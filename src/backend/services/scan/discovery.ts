import type { AIProvider, DiscoveryResult } from "@/shared/types";

const DISCOVERY_PROMPT = (domain: string) => `
Analyze the website "${domain}" and provide the following information in JSON format only (no markdown, no explanation):

{
  "sector": "the business sector/industry of this website (e.g. 'e-commerce', 'SaaS', 'restaurant', 'fintech')",
  "competitors": ["competitor1.com", "competitor2.com", "competitor3.com"],
  "queries": [
    "strategic question 1 that a user might ask an AI about this type of business",
    "strategic question 2",
    "..."
  ]
}

Rules:
- "sector" must be a single short label
- "competitors" must be 3-5 real competitor domain names
- "queries" must be exactly 10 diverse questions that a potential customer might ask an AI assistant. Mix these types:
  - Direct brand queries ("What is ${domain}?", "Is ${domain} reliable?")
  - Comparison queries ("${domain} vs [competitor]", "best alternatives to ${domain}")
  - Category queries ("best [sector] tools", "top [sector] companies")
  - Reputation queries ("${domain} reviews", "is ${domain} worth it?")

Respond ONLY with valid JSON, nothing else.
`;

export function parseDiscoveryResponse(content: string): DiscoveryResult {
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Discovery: no JSON found in response");
  }

  const parsed = JSON.parse(jsonMatch[0]);

  if (!parsed.sector || !Array.isArray(parsed.competitors) || !Array.isArray(parsed.queries)) {
    throw new Error("Discovery: invalid JSON structure");
  }

  return {
    sector: String(parsed.sector),
    competitors: parsed.competitors.map(String).slice(0, 5),
    queries: parsed.queries.map(String).slice(0, 10),
  };
}

export async function discoverDomain(
  domain: string,
  provider: AIProvider
): Promise<DiscoveryResult> {
  const response = await provider.query({
    query: DISCOVERY_PROMPT(domain),
    domain,
  });

  return parseDiscoveryResponse(response.content);
}
