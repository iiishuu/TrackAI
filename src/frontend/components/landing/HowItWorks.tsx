"use client";

import { Globe, Brain, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/frontend/components/ui/card";
import { useDictionary } from "@/frontend/components/providers/DictionaryProvider";
import { ScrollReveal } from "@/frontend/components/animations/ScrollReveal";

const STEP_ICONS = [Globe, Brain, BarChart3] as const;

export function HowItWorks() {
  const { t } = useDictionary();

  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t.howItWorks.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.howItWorks.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.howItWorks.steps.map((step, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <ScrollReveal key={index} delay={0.15 * index}>
                <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/30">
                  <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {t.howItWorks.stepLabel} {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
