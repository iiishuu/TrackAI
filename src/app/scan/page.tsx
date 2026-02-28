import type { Metadata } from "next";
import { Suspense } from "react";
import { ScanForm } from "@/frontend/components/scan/ScanForm";
import { getServerDictionary } from "@/shared/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerDictionary();
  return {
    title: t.meta.scanTitle,
    description: t.meta.scanDescription,
  };
}

export default async function ScanPage() {
  const t = await getServerDictionary();

  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-2xl flex-col items-center justify-center gap-8 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{t.scan.title}</h1>
        <p className="mt-2 text-muted-foreground">
          {t.scan.description}
        </p>
      </div>
      <Suspense>
        <ScanForm />
      </Suspense>
    </main>
  );
}
