import type { AIProvider, DiscoveryResult } from "@/shared/types";
import type { Locale, QueryType } from "@/shared/i18n/types";

const LOCALE_INSTRUCTION: Record<Locale, string> = {
  en: "",
  fr: '\nIMPORTANT: The "sector" value and the "queries" array must be written in French.',
};

const QUERY_TYPE_INSTRUCTIONS: Record<QueryType, string> = {
  commercial: `Commercial queries: "best [product] for...", "where to buy...", "top [sector] tools", "[sector] pricing"`,
  comparative: `Comparison queries: "${"{domain}"} vs [competitor]", "best alternatives to ${"{domain}"}", "top 5 [sector]"`,
  reputation: `Reputation queries: "${"{domain}"} reviews", "is ${"{domain}"} reliable?", "problems with ${"{domain}"}"`,
  informational: `Informational queries: "what is ${"{domain}"}?", "how does [sector] work?", "guide to [sector]"`,
};

function buildDiscoveryPrompt(
  domain: string,
  locale: Locale,
  queryCount: number,
  queryTypes: QueryType[]
): string {
  const typeInstructions = queryTypes
    .map((type) =>
      QUERY_TYPE_INSTRUCTIONS[type].replaceAll("{domain}", domain)
    )
    .join("\n  - ");

  return `Analyze the website "${domain}" and provide the following information in JSON format only (no markdown, no explanation):

{
  "sector": "the business sector/industry of this website (e.g. 'e-commerce', 'SaaS', 'restaurant', 'fintech')",
  "competitors": ["competitor1.com", "competitor2.com", "competitor3.com"],
  "queries": [
    "strategic question 1",
    "strategic question 2",
    "..."
  ]
}

Rules:
- "sector" must be a single short label
- "competitors" must be 3-5 real competitor domain names
- "queries" must be exactly ${queryCount} diverse questions that a potential customer might ask an AI assistant. Distribute queries evenly across these types:
  - ${typeInstructions}

Respond ONLY with valid JSON, nothing else.${LOCALE_INSTRUCTION[locale]}`;
}

export function parseDiscoveryResponse(
  content: string,
  queryCount: number
): DiscoveryResult {
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Discovery: no JSON found in response");
  }

  const parsed = JSON.parse(jsonMatch[0]);

  if (
    !parsed.sector ||
    !Array.isArray(parsed.competitors) ||
    !Array.isArray(parsed.queries)
  ) {
    throw new Error("Discovery: invalid JSON structure");
  }

  return {
    sector: String(parsed.sector),
    competitors: parsed.competitors.map(String).slice(0, 5),
    queries: parsed.queries.map(String).slice(0, queryCount),
  };
}

export async function discoverDomain(
  domain: string,
  provider: AIProvider,
  locale: Locale = "en",
  queryCount: number = 10,
  queryTypes: QueryType[] = [
    "commercial",
    "comparative",
    "reputation",
    "informational",
  ]
): Promise<DiscoveryResult> {
  const prompt = buildDiscoveryPrompt(domain, locale, queryCount, queryTypes);
  const response = await provider.query({ query: prompt, domain });
  return parseDiscoveryResponse(response.content, queryCount);
}
