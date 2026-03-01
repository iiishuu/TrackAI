"use client";

import { useDictionary } from "@/frontend/components/providers/DictionaryProvider";
import { ScrollReveal } from "@/frontend/components/animations/ScrollReveal";
import { RotatingText } from "@/frontend/components/animations/RotatingText";

export function AILogos() {
  const { t } = useDictionary();

  return (
    <section className="relative border-y border-border/50 px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="text-lg text-muted-foreground md:text-xl">
            {t.aiLogos.title}{" "}
            <RotatingText
              texts={t.aiLogos.engines}
              className="inline-block font-semibold text-foreground"
            />
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
