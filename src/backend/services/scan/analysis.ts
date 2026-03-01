import type { AIProvider, QueryResult, Sentiment } from "@/shared/types";
import type { Locale } from "@/shared/i18n/types";

const LOCALE_INSTRUCTION: Record<Locale, string> = {
  en: "",
  fr: '\nIMPORTANT: The "context" value must be written in French.',
};

export function extractBrandName(domain: string): string {
  // "supabase.com" → "supabase", "my-app.io" → "my-app"
  return domain.replace(/\.(com|io|org|net|co|ai|dev|app|xyz|me|fr|de|uk|us|tech)$/i, "").toLowerCase();
}

const ANALYSIS_PROMPT = (domain: string, query: string, response: string, locale: Locale = "en") => {
  const brand = extractBrandName(domain);
  return `
Analyze the following AI response about "${domain}" for the query "${query}".

The brand name is "${brand}" (from domain "${domain}").

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
  "context": "the exact sentence or phrase where the brand is mentioned, or empty string if not present"
}

Rules:
- "isPresent": true if the brand "${brand}" OR the domain "${domain}" appears ANYWHERE in the response, in any form (e.g., "${brand}", "${domain}", "${brand}.com", capitalized "${brand[0].toUpperCase()}${brand.slice(1)}"). Be generous — if the brand name appears even once, set true.
- "rank": the position where ${brand} appears in any list or ranking (1 = first mentioned, 2 = second, etc.). null if not in a list or not present
- "sentiment": the overall tone about ${brand} specifically. "neutral" if factual, "positive" if recommending, "negative" if criticizing
- "competitors": other domains/brands mentioned in the response that are NOT ${brand} (max 5)
- "context": the FIRST exact sentence where ${brand} or ${domain} is mentioned. Empty string if not present

Respond ONLY with valid JSON, nothing else.${LOCALE_INSTRUCTION[locale]}
`;
};

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
  provider: AIProvider,
  locale: Locale = "en"
): Promise<QueryResult> {
  const analysis = await provider.query({
    query: ANALYSIS_PROMPT(domain, query, rawResponse, locale),
    domain,
  });

  return parseAnalysisResponse(analysis.content, query, rawResponse, sources);
}
