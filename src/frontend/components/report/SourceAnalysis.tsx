import { Card, CardContent } from "@/frontend/components/ui/card";
import { Badge } from "@/frontend/components/ui/badge";
import type { Dictionary } from "@/shared/i18n/types";

interface SourceAnalysisProps {
  influenceSources: string[];
  t: Dictionary;
}

export function SourceAnalysis({ influenceSources, t }: SourceAnalysisProps) {
  if (influenceSources.length === 0) {
    return (
      <Card>
        <CardContent className="py-6 text-center text-sm text-muted-foreground">
          {t.report.noInfluenceSources}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">
            {t.report.influenceSources}
          </h3>
          <p className="text-xs text-muted-foreground">
            {t.report.influenceSourcesDesc}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {influenceSources.map((source, i) => (
            <Badge key={i} variant="outline" className="gap-1.5 py-1">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </span>
              {source}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
