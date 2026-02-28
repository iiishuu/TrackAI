import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Badge } from "@/frontend/components/ui/badge";
import type { QueryResult } from "@/shared/types";
import type { Dictionary } from "@/shared/i18n/types";

interface QueryResultCardProps {
  result: QueryResult;
  t: Dictionary;
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

function translateSentiment(sentiment: string, t: Dictionary): string {
  const key = sentiment as keyof typeof t.labels;
  return t.labels[key] ?? sentiment;
}

export function QueryResultCard({ result, t }: QueryResultCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-medium leading-tight">
            {result.query}
          </CardTitle>
          <div className="flex shrink-0 gap-1">
            <Badge variant={result.isPresent ? "default" : "outline"}>
              {result.isPresent ? t.labels.present : t.labels.absent}
            </Badge>
            <Badge variant={sentimentVariant(result.sentiment)}>
              {translateSentiment(result.sentiment, t)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {result.context || result.response}
        </p>
        {result.rank !== null && (
          <p className="text-xs text-muted-foreground">
            {t.report.position}: <span className="font-medium">#{result.rank}</span>
          </p>
        )}
        {result.competitors.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {result.competitors.map((comp) => (
              <Badge key={comp} variant="outline" className="text-xs">
                {comp}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
