"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/frontend/components/ui/card";
import { Input } from "@/frontend/components/ui/input";
import { Badge } from "@/frontend/components/ui/badge";
import type { HistoryEntry } from "@/shared/types";

function getScoreColor(score: number): string {
  if (score >= 70) return "text-green-600";
  if (score >= 40) return "text-yellow-500";
  return "text-red-500";
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function HistoryList() {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const url = filter
          ? `/api/history?domain=${encodeURIComponent(filter)}`
          : "/api/history";
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch history");
        const data: HistoryEntry[] = await response.json();
        setEntries(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load history"
        );
      } finally {
        setIsLoading(false);
      }
    }

    const timeout = setTimeout(fetchHistory, filter ? 300 : 0);
    return () => clearTimeout(timeout);
  }, [filter]);

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Filter by domain..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="max-w-sm"
      />

      {isLoading && (
        <p className="text-sm text-muted-foreground">Loading history...</p>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}

      {!isLoading && !error && entries.length === 0 && (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              No scans yet. Start by analyzing a domain.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-2">
        {entries.map((entry) => (
          <Link key={entry.reportId} href={`/report/${entry.reportId}`}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader className="py-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    {entry.domain}
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg font-bold ${getScoreColor(entry.score)}`}
                    >
                      {Math.round(entry.score)}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {formatDate(entry.createdAt)}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
