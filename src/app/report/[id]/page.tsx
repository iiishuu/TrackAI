import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScoreCard } from "@/frontend/components/report/ScoreCard";
import { MetricsGrid } from "@/frontend/components/report/MetricsGrid";
import { QueryResultCard } from "@/frontend/components/report/QueryResultCard";
import { RecommendationList } from "@/frontend/components/report/RecommendationList";
import { getServerDictionary } from "@/shared/i18n/server";
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
  const [report, t] = await Promise.all([getReport(id), getServerDictionary()]);
  if (!report) {
    return { title: t.meta.reportNotFound };
  }
  return {
    title: t.meta.reportTitle(report.domain),
    description: t.meta.reportDescription(
      Math.round(report.metrics.visibilityScore),
      report.domain,
      report.sector
    ),
  };
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { id } = await params;
  const [report, t] = await Promise.all([getReport(id), getServerDictionary()]);

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
          t={t}
        />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">{t.report.metrics}</h2>
        <MetricsGrid metrics={report.metrics} t={t} />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          {t.report.aiResponses} ({report.queryResults.length})
        </h2>
        <div className="space-y-3">
          {report.queryResults.map((result, index) => (
            <QueryResultCard key={index} result={result} t={t} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          {t.report.recommendations}
        </h2>
        <RecommendationList recommendations={report.recommendations} t={t} />
      </section>
    </main>
  );
}
