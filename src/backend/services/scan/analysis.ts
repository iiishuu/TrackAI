import type { AIProvider, QueryResult, Sentiment } from "@/shared/types";

const ANALYSIS_PROMPT = (domain: string, query: string, response: string) => `
Analyze the following AI response about "${domain}" for the query "${query}".

AI Response:
"""
${response}
"""

Provide your analysis in JSON format only (no markdown, no explanation):

{
  "isPresent": true/false,
  "rank": number or null,
  "sentiment": "positive" | "neutral" | "negative",
  "competitors": ["competitor1.com", "competitor2.com"],
  "context": "the exact sentence or phrase where ${domain} is mentioned, or empty string if not present"
}

Rules:
- "isPresent": true if "${domain}" (or its brand name) is explicitly mentioned in the response
- "rank": the position where ${domain} appears in any list or ranking (1 = first mentioned, 2 = second, etc.). null if not in a list or not present
- "sentiment": the overall tone about ${domain} specifically. "neutral" if factual, "positive" if recommending, "negative" if criticizing
- "competitors": other domains/brands mentioned in the response (max 5)
- "context": the exact quote where ${domain} is mentioned. Empty string if not present

Respond ONLY with valid JSON, nothing else.
`;

const VALID_SENTIMENTS: Sentiment[] = ["positive", "neutral", "negative"];

export function parseAnalysisResponse(
  content: string,
  query: string,
  rawResponse: string,
  sources: string[]
): QueryResult {
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Analysis: no JSON found in response");
  }

  const parsed = JSON.parse(jsonMatch[0]);

  const sentiment: Sentiment = VALID_SENTIMENTS.includes(parsed.sentiment)
    ? parsed.sentiment
    : "neutral";

  return {
    query,
    response: rawResponse,
    isPresent: Boolean(parsed.isPresent),
    rank: typeof parsed.rank === "number" ? parsed.rank : null,
    sentiment,
    competitors: Array.isArray(parsed.competitors)
      ? parsed.competitors.map(String).slice(0, 5)
      : [],
    sources,
    context: String(parsed.context ?? ""),
  };
}

export async function analyzeResponse(
  domain: string,
  query: string,
  rawResponse: string,
  sources: string[],
  provider: AIProvider
): Promise<QueryResult> {
  const analysis = await provider.query({
    query: ANALYSIS_PROMPT(domain, query, rawResponse),
    domain,
  });

  return parseAnalysisResponse(analysis.content, query, rawResponse, sources);
}
