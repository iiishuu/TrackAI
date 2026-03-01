"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardContent } from "@/frontend/components/ui/card";
import type { QueryResult } from "@/shared/types";
import type { Dictionary } from "@/shared/i18n/types";

interface SentimentChartProps {
  queryResults: QueryResult[];
  t: Dictionary;
}

const SENTIMENT_COLORS: Record<string, string> = {
  positive: "hsl(142, 70%, 45%)",
  neutral: "hsl(220, 15%, 55%)",
  negative: "hsl(0, 70%, 50%)",
};

export function SentimentChart({ queryResults, t }: SentimentChartProps) {
  const counts = { positive: 0, neutral: 0, negative: 0 };
  for (const qr of queryResults) {
    counts[qr.sentiment]++;
  }

  const data = [
    {
      name: t.labels.positive,
      value: counts.positive,
      color: SENTIMENT_COLORS.positive,
    },
    {
      name: t.labels.neutral,
      value: counts.neutral,
      color: SENTIMENT_COLORS.neutral,
    },
    {
      name: t.labels.negative,
      value: counts.negative,
      color: SENTIMENT_COLORS.negative,
    },
  ];

  const total = queryResults.length;
  const presentCount = queryResults.filter((qr) => qr.isPresent).length;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Bar chart */}
          <div className="h-48 w-full md:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" barSize={24}>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={70}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  formatter={(value) =>
                    `${value}/${total} (${Math.round((Number(value) / total) * 100)}%)`
                  }
                  contentStyle={{
                    borderRadius: "8px",
                    fontSize: "12px",
                    border: "1px solid hsl(0 0% 90%)",
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Summary stats */}
          <div className="flex flex-1 flex-col justify-center gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-green-50 p-3 text-center dark:bg-green-950/20">
                <p className="text-2xl font-bold text-green-600">
                  {presentCount}/{total}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.labels.present}
                </p>
              </div>
              <div className="rounded-lg bg-muted/50 p-3 text-center">
                <p className="text-2xl font-bold">
                  {total - presentCount}/{total}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.labels.absent}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {data.map((d) => (
                <div
                  key={d.name}
                  className="flex flex-1 items-center gap-1.5 rounded-md border p-2"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: d.color }}
                  />
                  <span className="text-xs">
                    {d.name}: {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
