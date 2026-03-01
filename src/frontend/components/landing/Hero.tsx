"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/frontend/components/ui/button";
import { Input } from "@/frontend/components/ui/input";
import { useDictionary } from "@/frontend/components/providers/DictionaryProvider";
import { SplitText } from "@/frontend/components/animations/SplitText";
import { GradientText } from "@/frontend/components/animations/GradientText";
import { ScrollReveal } from "@/frontend/components/animations/ScrollReveal";

export function Hero() {
  const [domain, setDomain] = useState("");
  const router = useRouter();
  const { t } = useDictionary();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!domain.trim()) return;
    router.push(`/scan?domain=${encodeURIComponent(domain.trim())}`);
  }

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 pt-14 text-center">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-glow-primary" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Badge */}
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            {t.hero.badge}
          </div>
        </ScrollReveal>

        {/* Title */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          <SplitText text={t.hero.titleBefore} delay={0.3} />
          <GradientText animate className="mt-1 block">
            <SplitText text={t.hero.titleHighlight} delay={0.6} />
          </GradientText>
          <SplitText text={t.hero.titleAfter} delay={0.9} />
        </h1>

        {/* Description */}
        <ScrollReveal delay={1.2}>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t.hero.description}
          </p>
        </ScrollReveal>

        {/* Search form */}
        <ScrollReveal delay={1.4}>
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-lg gap-2"
          >
            <Input
              type="text"
              placeholder={t.hero.placeholder}
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="h-12 flex-1 bg-card/50 text-base backdrop-blur-sm"
            />
            <Button
              type="submit"
              disabled={!domain.trim()}
              size="lg"
              className="h-12 gap-2 px-6"
            >
              {t.hero.analyze}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
