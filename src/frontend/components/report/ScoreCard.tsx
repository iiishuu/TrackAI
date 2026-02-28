import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import type { Dictionary } from "@/shared/i18n/types";

interface ScoreCardProps {
  score: number;
  domain: string;
  sector: string;
  t: Dictionary;
}

function getScoreColor(score: number): string {
  if (score >= 70) return "text-green-600";
  if (score >= 40) return "text-yellow-500";
  return "text-red-500";
}

function getScoreLabel(score: number, t: Dictionary): string {
  if (score >= 70) return t.report.scoreGood;
  if (score >= 40) return t.report.scoreAverage;
  return t.report.scoreLow;
}

export function ScoreCard({ score, domain, sector, t }: ScoreCardProps) {
  const roundedScore = Math.round(score);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (roundedScore / 100) * circumference;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t.report.visibilityScore}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {domain} &middot; {sector}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <div className="relative h-32 w-32">
          <svg className="h-32 w-32 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              className="text-muted"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className={getScoreColor(roundedScore)}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${getScoreColor(roundedScore)}`}>
              {roundedScore}
            </span>
            <span className="text-xs text-muted-foreground">/100</span>
          </div>
        </div>
        <span className={`text-sm font-medium ${getScoreColor(roundedScore)}`}>
          {getScoreLabel(roundedScore, t)}
        </span>
      </CardContent>
    </Card>
  );
}
