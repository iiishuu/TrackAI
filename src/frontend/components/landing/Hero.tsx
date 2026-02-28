"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/frontend/components/ui/button";
import { Input } from "@/frontend/components/ui/input";

export function Hero() {
  const [domain, setDomain] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!domain.trim()) return;
    router.push(`/scan?domain=${encodeURIComponent(domain.trim())}`);
  }

  return (
    <section className="flex flex-col items-center gap-6 px-4 py-20 text-center md:py-32">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
        Track Your Brand Visibility on{" "}
        <span className="text-primary">AI Search Engines</span>
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Discover how ChatGPT, Gemini, and Perplexity talk about your brand.
        Get actionable recommendations to improve your AI visibility.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md gap-2"
      >
        <Input
          type="text"
          placeholder="Enter your domain..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={!domain.trim()}>
          Analyze
        </Button>
      </form>
    </section>
  );
}
