import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Badge } from "@/frontend/components/ui/badge";
import type { Metrics } from "@/shared/types";
import type { Dictionary } from "@/shared/i18n/types";

interface MetricsGridProps {
  metrics: Metrics;
  t: Dictionary;
}

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

function sentimentVariant(
  sentiment: string
): "default" | "secondary" | "destructive" | "outline" {
  switch (sentiment) {
    case "positive":
      return "default";
    case "negative":
      return "destructive";
    default:
      return "secondary";
  }
}

function translateSentiment(
  sentiment: string,
  t: Dictionary
): string {
  const key = sentiment as keyof typeof t.labels;
  return t.labels[key] ?? sentiment;
}

export function MetricsGrid({ metrics, t }: MetricsGridProps) {
  const topCompetitors = Object.entries(metrics.shareOfVoice)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {t.metrics.citationRate}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {formatPercent(metrics.citationRate)}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.metrics.citationRateDesc}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {t.metrics.avgPosition}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {metrics.averagePosition !== null
              ? `#${metrics.averagePosition.toFixed(1)}`
              : t.metrics.na}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.metrics.avgPositionDesc}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {t.metrics.sentiment}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant={sentimentVariant(metrics.overallSentiment)}>
            {translateSentiment(metrics.overallSentiment, t)}
          </Badge>
          <p className="mt-1 text-xs text-muted-foreground">
            {t.metrics.sentimentDesc}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {t.metrics.shareOfVoice}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {topCompetitors.length > 0 ? (
            <ul className="space-y-1">
              {topCompetitors.map(([name, share]) => (
                <li
                  key={name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="truncate">{name}</span>
                  <span className="font-medium">
                    {Math.round(share)}%
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">{t.metrics.noData}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
