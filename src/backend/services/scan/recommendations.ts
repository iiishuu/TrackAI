import type { AIProvider, Metrics, Recommendation } from "@/shared/types";

const RECOMMENDATIONS_PROMPT = (domain: string, metrics: Metrics) => `
You are an AI visibility expert. Analyze these metrics for "${domain}" and provide actionable recommendations.

Metrics:
- Visibility Score: ${metrics.visibilityScore}/100
- Citation Rate: ${Math.round(metrics.citationRate * 100)}% (how often AI mentions this brand)
- Average Position: ${metrics.averagePosition ?? "not ranked"}
- Overall Sentiment: ${metrics.overallSentiment}
- Share of Voice: ${JSON.stringify(metrics.shareOfVoice)}
- Influence Sources: ${metrics.influenceSources.join(", ") || "none"}

Provide 3-5 specific, actionable recommendations in JSON format only (no markdown, no explanation):

[
  {
    "title": "Short action title",
    "description": "Detailed explanation of what to do and why it will improve AI visibility",
    "priority": "high" | "medium" | "low"
  }
]

Rules:
- Sort by priority (high first)
- Be specific to this domain and its metrics
- Focus on improving AI visibility (not traditional SEO)
- Each recommendation should be actionable and concrete

Respond ONLY with valid JSON array, nothing else.
`;

export function parseRecommendationsResponse(content: string): Recommendation[] {
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error("Recommendations: no JSON array found in response");
  }

  const parsed = JSON.parse(jsonMatch[0]);

  if (!Array.isArray(parsed)) {
    throw new Error("Recommendations: response is not an array");
  }

  const validPriorities = ["high", "medium", "low"] as const;

  return parsed
    .filter(
      (r: Record<string, unknown>) =>
        typeof r.title === "string" && typeof r.description === "string"
    )
    .slice(0, 5)
    .map((r: Record<string, unknown>) => ({
      title: String(r.title),
      description: String(r.description),
      priority: validPriorities.includes(r.priority as "high" | "medium" | "low")
        ? (r.priority as "high" | "medium" | "low")
        : "medium",
    }));
}

export async function generateRecommendations(
  domain: string,
  metrics: Metrics,
  provider: AIProvider
): Promise<Recommendation[]> {
  const response = await provider.query({
    query: RECOMMENDATIONS_PROMPT(domain, metrics),
    domain,
  });

  return parseRecommendationsResponse(response.content);
}
