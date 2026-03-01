"use client";

import {
  Search,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/frontend/components/ui/card";
import { useDictionary } from "@/frontend/components/providers/DictionaryProvider";
import { ScrollReveal } from "@/frontend/components/animations/ScrollReveal";

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  LineChart,
};

export function Features() {
  const { t } = useDictionary();

  return (
    <section className="relative px-4 py-24">
      <div className="pointer-events-none absolute inset-0 bg-glow-accent" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t.features.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.features.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, index) => {
            const Icon = ICON_MAP[item.icon] ?? Search;
            return (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
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
