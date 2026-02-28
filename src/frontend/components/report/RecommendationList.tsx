import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Badge } from "@/frontend/components/ui/badge";
import type { Recommendation } from "@/shared/types";

interface RecommendationListProps {
  recommendations: Recommendation[];
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

export function RecommendationList({
  recommendations,
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
                {rec.priority}
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
