import { Card, CardContent } from "@/frontend/components/ui/card";
import type { Dictionary } from "@/shared/i18n/types";

interface CompetitiveAnalysisProps {
  shareOfVoice: Record<string, number>;
  domain: string;
  t: Dictionary;
}

const BAR_COLORS = [
  "bg-[oklch(0.6_0.2_250)]",
  "bg-[oklch(0.65_0.18_160)]",
  "bg-[oklch(0.7_0.15_50)]",
  "bg-[oklch(0.55_0.2_300)]",
  "bg-[oklch(0.6_0.15_20)]",
];

export function CompetitiveAnalysis({
  shareOfVoice,
  domain,
  t,
}: CompetitiveAnalysisProps) {
  const entries = Object.entries(shareOfVoice).sort(([, a], [, b]) => b - a);
  const maxShare = Math.max(...entries.map(([, v]) => v), 1);

  if (entries.length === 0) return null;

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          {t.report.shareOfVoiceChart}
        </h3>
        <div className="space-y-3">
          {entries.map(([name, share], i) => {
            const isDomain = name.toLowerCase() === domain.toLowerCase();
            const barWidth = Math.max((share / maxShare) * 100, 2);
            const color = isDomain
              ? "bg-primary"
              : BAR_COLORS[i % BAR_COLORS.length];

            return (
              <div key={name} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span
                    className={`truncate ${isDomain ? "font-semibold" : ""}`}
                  >
                    {name}
                    {isDomain && (
                      <span className="ml-1 text-xs text-muted-foreground">
                        ({t.report.yourBrand})
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 font-medium tabular-nums">
                    {Math.round(share)}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className={`h-2 rounded-full transition-all duration-700 ease-out ${color}`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
