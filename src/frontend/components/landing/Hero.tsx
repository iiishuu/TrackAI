"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Input } from "@/frontend/components/ui/input";
import { useDictionary } from "@/frontend/components/providers/DictionaryProvider";
import BlurText from "@/frontend/components/BlurText";
import { GradientText } from "@/frontend/components/animations/GradientText";
import { ScrollReveal } from "@/frontend/components/animations/ScrollReveal";
import StarBorder from "@/frontend/components/StarBorder";

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
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-glow-primary" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Title */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          <BlurText
            text={t.hero.titleBefore}
            delay={80}
            animateBy="words"
            direction="top"
            className="justify-center"
          />
          <GradientText animate className="mt-2 block">
            <BlurText
              text={t.hero.titleHighlight}
              delay={100}
              animateBy="words"
              direction="bottom"
              stepDuration={0.5}
              className="justify-center"
            />
          </GradientText>
          {t.hero.titleAfter && (
            <BlurText
              text={t.hero.titleAfter}
              delay={80}
              animateBy="words"
              direction="top"
              className="justify-center"
            />
          )}
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
            className="flex w-full max-w-lg gap-3"
          >
            <Input
              type="text"
              placeholder={t.hero.placeholder}
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="h-12 flex-1 bg-card/50 text-base backdrop-blur-sm"
            />
            <StarBorder
              as="button"
              color="oklch(0.65 0.2 255)"
              speed="5s"
              className="h-12"
            >
              <span className="flex items-center gap-2 whitespace-nowrap text-sm font-medium">
                {t.hero.analyze}
                <ArrowRight className="h-4 w-4" />
              </span>
            </StarBorder>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
