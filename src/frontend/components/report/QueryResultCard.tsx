import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Badge } from "@/frontend/components/ui/badge";
import type { QueryResult } from "@/shared/types";

interface QueryResultCardProps {
  result: QueryResult;
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

export function QueryResultCard({ result }: QueryResultCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-medium leading-tight">
            {result.query}
          </CardTitle>
          <div className="flex shrink-0 gap-1">
            <Badge variant={result.isPresent ? "default" : "outline"}>
              {result.isPresent ? "Present" : "Absent"}
            </Badge>
            <Badge variant={sentimentVariant(result.sentiment)}>
              {result.sentiment}
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
            Position: <span className="font-medium">#{result.rank}</span>
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
