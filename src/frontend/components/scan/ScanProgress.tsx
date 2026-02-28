"use client";

import { Progress } from "@/frontend/components/ui/progress";
import type { ScanStep } from "@/shared/types";

const DEFAULT_STEPS: ScanStep[] = [
  { label: "Domain validation", status: "done" },
  { label: "Sector discovery", status: "running" },
  { label: "AI query analysis", status: "pending" },
  { label: "Score computation", status: "pending" },
  { label: "Recommendations", status: "pending" },
];

interface ScanProgressProps {
  steps?: ScanStep[];
}

export function ScanProgress({ steps = DEFAULT_STEPS }: ScanProgressProps) {
  const completedCount = steps.filter((s) => s.status === "done").length;
  const progress = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Progress value={progress} className="h-2" />
      <ul className="flex flex-col gap-2">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-2 text-sm">
            <span
              className={
                step.status === "done"
                  ? "text-green-600"
                  : step.status === "running"
                    ? "text-blue-500 animate-pulse"
                    : step.status === "error"
                      ? "text-destructive"
                      : "text-muted-foreground"
              }
            >
              {step.status === "done"
                ? "\u2713"
                : step.status === "running"
                  ? "\u25CB"
                  : step.status === "error"
                    ? "\u2717"
                    : "\u2022"}
            </span>
            <span
              className={
                step.status === "pending"
                  ? "text-muted-foreground"
                  : undefined
              }
            >
              {step.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
