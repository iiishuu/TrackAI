import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Badge } from "@/frontend/components/ui/badge";
import type { Metrics } from "@/shared/types";

interface MetricsGridProps {
  metrics: Metrics;
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

export function MetricsGrid({ metrics }: MetricsGridProps) {
  const topCompetitors = Object.entries(metrics.shareOfVoice)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Citation Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {formatPercent(metrics.citationRate)}
          </p>
          <p className="text-xs text-muted-foreground">
            of AI responses mention you
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Avg. Position
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {metrics.averagePosition !== null
              ? `#${metrics.averagePosition.toFixed(1)}`
              : "N/A"}
          </p>
          <p className="text-xs text-muted-foreground">
            when mentioned in results
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Sentiment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant={sentimentVariant(metrics.overallSentiment)}>
            {metrics.overallSentiment}
          </Badge>
          <p className="mt-1 text-xs text-muted-foreground">
            overall AI perception
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Share of Voice
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
            <p className="text-sm text-muted-foreground">No data</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
