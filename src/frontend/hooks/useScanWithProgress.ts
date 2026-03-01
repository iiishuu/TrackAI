"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type StepStatus = "pending" | "running" | "done" | "error";

interface Step {
  key: string;
  status: StepStatus;
}

interface UseScanWithProgressReturn {
  steps: Step[];
  currentStep: number;
  isComplete: boolean;
  error: string | null;
  reportId: string | null;
}

const STEP_KEYS = [
  "domainValidation",
  "sectorDiscovery",
  "aiQueryAnalysis",
  "scoreComputation",
  "recommendations",
] as const;

const STEP_DELAYS = [2000, 4000, 12000, 6000, 4000];

export function useScanWithProgress(
  domain: string | null
): UseScanWithProgressReturn {
  const [steps, setSteps] = useState<Step[]>(
    STEP_KEYS.map((key) => ({ key, status: "pending" }))
  );
  const [currentStep, setCurrentStep] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reportId, setReportId] = useState<string | null>(null);
  const apiDone = useRef(false);
  const apiResult = useRef<string | null>(null);
  const apiError = useRef<string | null>(null);
  const started = useRef(false);

  const completeAllSteps = useCallback(() => {
    setSteps(STEP_KEYS.map((key) => ({ key, status: "done" })));
    setCurrentStep(STEP_KEYS.length - 1);
    if (apiResult.current) {
      setReportId(apiResult.current);
      setIsComplete(true);
    }
  }, []);

  useEffect(() => {
    if (!domain || started.current) return;
    started.current = true;

    // Start API call
    fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Scan failed");
        }
        return res.json();
      })
      .then((data) => {
        apiDone.current = true;
        apiResult.current = data.reportId;
      })
      .catch((err) => {
        apiDone.current = true;
        apiError.current =
          err instanceof Error ? err.message : "An unexpected error occurred";
      });

    // Start step timer
    let stepIndex = 0;

    function advanceStep() {
      if (apiError.current) {
        setSteps((prev) =>
          prev.map((s, i) =>
            i === stepIndex
              ? { ...s, status: "error" }
              : i < stepIndex
                ? { ...s, status: "done" }
                : s
          )
        );
        setCurrentStep(stepIndex);
        setError(apiError.current);
        return;
      }

      // Mark current step as running
      setSteps((prev) =>
        prev.map((s, i) =>
          i === stepIndex
            ? { ...s, status: "running" }
            : i < stepIndex
              ? { ...s, status: "done" }
              : s
        )
      );
      setCurrentStep(stepIndex);

      const delay = STEP_DELAYS[stepIndex];
      setTimeout(() => {
        // Mark current as done
        setSteps((prev) =>
          prev.map((s, i) => (i === stepIndex ? { ...s, status: "done" } : s))
        );

        stepIndex++;

        if (stepIndex >= STEP_KEYS.length) {
          // All simulated steps done, wait for API if needed
          if (apiDone.current) {
            if (apiError.current) {
              setError(apiError.current);
            } else {
              setReportId(apiResult.current);
              setIsComplete(true);
            }
          } else {
            // Wait for API with polling
            const poll = setInterval(() => {
              if (apiDone.current) {
                clearInterval(poll);
                if (apiError.current) {
                  setError(apiError.current);
                } else {
                  setReportId(apiResult.current);
                  setIsComplete(true);
                }
              }
            }, 500);
          }
        } else if (apiDone.current && !apiError.current) {
          // API returned early — snap remaining steps to done
          completeAllSteps();
        } else {
          advanceStep();
        }
      }, delay);
    }

    advanceStep();
  }, [domain, completeAllSteps]);

  return { steps, currentStep, isComplete, error, reportId };
}
