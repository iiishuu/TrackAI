import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Badge } from "@/frontend/components/ui/badge";
import type { Recommendation } from "@/shared/types";
import type { Dictionary } from "@/shared/i18n/types";

interface RecommendationListProps {
  recommendations: Recommendation[];
  t: Dictionary;
}

function priorityVariant(
  priority: string
): "default" | "secondary" | "destructive" | "outline" {
  switch (priority) {
    case "high":
      return "destructive";
    case "medium":
      return "secondary";
    default:
      return "outline";
  }
}

function priorityOrder(priority: string): number {
  switch (priority) {
    case "high":
      return 0;
    case "medium":
      return 1;
    default:
      return 2;
  }
}

function translatePriority(priority: string, t: Dictionary): string {
  const key = priority as keyof typeof t.labels;
  return t.labels[key] ?? priority;
}

export function RecommendationList({
  recommendations,
  t,
}: RecommendationListProps) {
  const sorted = [...recommendations].sort(
    (a, b) => priorityOrder(a.priority) - priorityOrder(b.priority)
  );

  return (
    <div className="space-y-3">
      {sorted.map((rec, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between gap-2">
              <CardTitle className="text-sm font-medium">
                {rec.title}
              </CardTitle>
              <Badge variant={priorityVariant(rec.priority)}>
                {translatePriority(rec.priority, t)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{rec.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
