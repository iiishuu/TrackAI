import { describe, it, expect, vi } from "vitest";
import type { AIProvider, Metrics } from "@/shared/types";
import {
  generateRecommendations,
  parseRecommendationsResponse,
} from "./recommendations";

function mockProvider(content: string): AIProvider {
  return {
    name: "mock",
    query: vi.fn().mockResolvedValue({
      content,
      sources: [],
      provider: "mock",
    }),
  };
}

const VALID_RECOMMENDATIONS = JSON.stringify([
  {
    title: "Improve content authority",
    description: "Create detailed, factual content that AI models can reference.",
    priority: "high",
  },
  {
    title: "Get listed on comparison sites",
    description: "Submit your product to review aggregators.",
    priority: "medium",
  },
  {
    title: "Monitor competitor mentions",
    description: "Track how competitors appear in AI responses.",
    priority: "low",
  },
]);

const SAMPLE_METRICS: Metrics = {
  visibilityScore: 45,
  citationRate: 0.3,
  averagePosition: 4,
  overallSentiment: "neutral",
  shareOfVoice: { "example.com": 30, "rival.com": 70 },
  influenceSources: ["wikipedia.org", "techcrunch.com"],
};

// ----- parseRecommendationsResponse -----

describe("parseRecommendationsResponse", () => {
  it("parses valid recommendations", () => {
    const result = parseRecommendationsResponse(VALID_RECOMMENDATIONS);
    expect(result).toHaveLength(3);
    expect(result[0].title).toBe("Improve content authority");
    expect(result[0].priority).toBe("high");
  });

  it("extracts JSON from markdown-wrapped response", () => {
    const wrapped = `Here are the recommendations:\n\`\`\`json\n${VALID_RECOMMENDATIONS}\n\`\`\``;
    const result = parseRecommendationsResponse(wrapped);
    expect(result).toHaveLength(3);
  });

  it("caps at 5 recommendations", () => {
    const many = Array.from({ length: 8 }, (_, i) => ({
      title: `Rec ${i}`,
      description: `Desc ${i}`,
      priority: "medium",
    }));
    const result = parseRecommendationsResponse(JSON.stringify(many));
    expect(result).toHaveLength(5);
  });

  it("defaults invalid priority to medium", () => {
    const recs = JSON.stringify([
      { title: "Test", description: "Desc", priority: "critical" },
    ]);
    const result = parseRecommendationsResponse(recs);
    expect(result[0].priority).toBe("medium");
  });

  it("filters out entries without title or description", () => {
    const recs = JSON.stringify([
      { title: "Valid", description: "Has both" },
      { title: "No desc" },
      { description: "No title" },
    ]);
    const result = parseRecommendationsResponse(recs);
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Valid");
  });

  it("throws on non-array response", () => {
    expect(() =>
      parseRecommendationsResponse('{"not": "array"}')
    ).toThrow("Recommendations: no JSON array found in response");
  });

  it("throws on plain text", () => {
    expect(() =>
      parseRecommendationsResponse("no json here")
    ).toThrow("Recommendations: no JSON array found in response");
  });
});

// ----- generateRecommendations -----

describe("generateRecommendations", () => {
  it("calls provider and returns parsed recommendations", async () => {
    const provider = mockProvider(VALID_RECOMMENDATIONS);
    const result = await generateRecommendations(
      "example.com",
      SAMPLE_METRICS,
      provider
    );

    expect(provider.query).toHaveBeenCalledOnce();
    expect(result).toHaveLength(3);
    expect(result[0].title).toBe("Improve content authority");
  });

  it("includes domain and metrics in the prompt", async () => {
    const provider = mockProvider(VALID_RECOMMENDATIONS);
    await generateRecommendations("mysite.io", SAMPLE_METRICS, provider);

    const call = vi.mocked(provider.query).mock.calls[0][0];
    expect(call.query).toContain("mysite.io");
    expect(call.query).toContain("45/100");
  });
});
