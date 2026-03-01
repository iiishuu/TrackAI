"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/frontend/components/ui/button";
import { Input } from "@/frontend/components/ui/input";
import { useDictionary } from "@/frontend/components/providers/DictionaryProvider";
import { ScrollReveal } from "@/frontend/components/animations/ScrollReveal";
import { ShinyText } from "@/frontend/components/animations/ShinyText";

export function FinalCTA() {
  const [domain, setDomain] = useState("");
  const router = useRouter();
  const { t } = useDictionary();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!domain.trim()) return;
    router.push(`/scan?domain=${encodeURIComponent(domain.trim())}`);
  }

  return (
    <section className="relative overflow-hidden px-4 py-32">
      <div className="pointer-events-none absolute inset-0 bg-glow-accent" />
      <div className="pointer-events-none absolute inset-0 bg-glow-primary" />

      <div className="relative mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold md:text-5xl">
            <ShinyText>{t.finalCta.title}</ShinyText>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.finalCta.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-lg gap-2"
          >
            <Input
              type="text"
              placeholder={t.finalCta.placeholder}
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
              {t.finalCta.analyze}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
