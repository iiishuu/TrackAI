import type { Metadata } from "next";
import { HistoryList } from "@/frontend/components/history/HistoryList";

export const metadata: Metadata = {
  title: "Scan History — TrackAI",
  description:
    "View your past AI visibility scans and track your brand performance over time.",
};

export default function HistoryPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Scan History</h1>
        <p className="mt-2 text-muted-foreground">
          View and compare your past AI visibility analyses.
        </p>
      </div>
      <HistoryList />
    </main>
  );
}
