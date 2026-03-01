"use client";

import { useState } from "react";
import { Button } from "@/frontend/components/ui/button";

interface DownloadButtonProps {
  reportId: string;
  label: string;
}

export function DownloadButton({ reportId, label }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDownload() {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/report/${reportId}/pdf`);
      if (!response.ok) throw new Error("PDF generation failed");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `trackai-report-${reportId}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // Fallback to print
      window.print();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDownload}
      disabled={isLoading}
      className="no-print gap-2"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
        />
      </svg>
      {isLoading ? "..." : label}
    </Button>
  );
}
