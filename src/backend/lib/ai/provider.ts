import type { AIProvider, AIQueryRequest, AIQueryResponse } from "@/shared/types";
import { env } from "@/backend/config/env";

export class PerplexityProvider implements AIProvider {
  name = "perplexity";

  async query(request: AIQueryRequest): Promise<AIQueryResponse> {
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.perplexityApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          {
            role: "user",
            content: request.query,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Perplexity API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content ?? "";
    const citations: string[] = data.citations ?? [];

    return {
      content,
      sources: citations,
      provider: this.name,
    };
  }
}

export function createAIProvider(name: string = "perplexity"): AIProvider {
  switch (name) {
    case "perplexity":
      return new PerplexityProvider();
    default:
      throw new Error(`Unknown AI provider: ${name}`);
  }
}
