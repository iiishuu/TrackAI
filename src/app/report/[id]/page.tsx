import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScoreCard } from "@/frontend/components/report/ScoreCard";
import { MetricsGrid } from "@/frontend/components/report/MetricsGrid";
import { QueryResultCard } from "@/frontend/components/report/QueryResultCard";
import { RecommendationList } from "@/frontend/components/report/RecommendationList";
import type { Report } from "@/shared/types";

interface ReportPageProps {
  params: Promise<{ id: string }>;
}

async function getReport(id: string): Promise<Report | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  try {
    const response = await fetch(`${baseUrl}/api/report/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: ReportPageProps): Promise<Metadata> {
  const { id } = await params;
  const report = await getReport(id);
  if (!report) {
    return { title: "Report Not Found — TrackAI" };
  }
  return {
    title: `${report.domain} — AI Visibility Report — TrackAI`,
    description: `AI visibility score: ${Math.round(report.metrics.visibilityScore)}/100 for ${report.domain} in ${report.sector}.`,
  };
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { id } = await params;
  const report = await getReport(id);

  if (!report) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <section>
        <ScoreCard
          score={report.metrics.visibilityScore}
          domain={report.domain}
          sector={report.sector}
        />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Metrics</h2>
        <MetricsGrid metrics={report.metrics} />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          AI Responses ({report.queryResults.length})
        </h2>
        <div className="space-y-3">
          {report.queryResults.map((result, index) => (
            <QueryResultCard key={index} result={result} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Recommendations</h2>
        <RecommendationList recommendations={report.recommendations} />
      </section>
    </main>
  );
}
