"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/frontend/components/ui/button";
import { Input } from "@/frontend/components/ui/input";
import { useScan } from "@/frontend/hooks/useScan";

export function ScanForm() {
  const searchParams = useSearchParams();
  const [domain, setDomain] = useState(searchParams.get("domain") ?? "");
  const { scan, isLoading, error } = useScan();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!domain.trim()) return;

    try {
      const result = await scan(domain.trim());
      router.push(`/report/${result.reportId}`);
    } catch {
      // Error is handled by useScan hook
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="example.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          disabled={isLoading}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || !domain.trim()}>
          {isLoading ? "Analyzing..." : "Analyze"}
        </Button>
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </form>
  );
}
