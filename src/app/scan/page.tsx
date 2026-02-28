import type { Metadata } from "next";
import { Suspense } from "react";
import { ScanForm } from "@/frontend/components/scan/ScanForm";

export const metadata: Metadata = {
  title: "Scan Your Domain — TrackAI",
  description:
    "Analyze your brand visibility across AI search engines like ChatGPT, Gemini, and Perplexity.",
};

export default function ScanPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-2xl flex-col items-center justify-center gap-8 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Analyze Your Domain</h1>
        <p className="mt-2 text-muted-foreground">
          Enter a domain to discover how AI search engines reference your
          brand.
        </p>
      </div>
      <Suspense>
        <ScanForm />
      </Suspense>
    </main>
  );
}
