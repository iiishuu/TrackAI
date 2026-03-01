"use client";

import { useDictionary } from "@/frontend/components/providers/DictionaryProvider";
import { ScrollReveal } from "@/frontend/components/animations/ScrollReveal";
import { CountUp } from "@/frontend/components/animations/CountUp";

export function Stats() {
  const { t } = useDictionary();

  return (
    <section className="border-y border-border/50 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t.stats.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.stats.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {t.stats.items.map((stat, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
