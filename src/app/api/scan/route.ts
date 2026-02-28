import { NextResponse } from "next/server";
import { validateAndSanitizeDomain } from "@/backend/validation/domain";
import { createAIProvider } from "@/backend/lib/ai/provider";
import { runScanPipeline } from "@/backend/services/scan/pipeline";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { domain } = body;

    if (!domain || typeof domain !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'domain' field" },
        { status: 400 }
      );
    }

    // Validate domain before starting pipeline
    try {
      validateAndSanitizeDomain(domain);
    } catch {
      return NextResponse.json(
        { error: "Invalid domain format" },
        { status: 400 }
      );
    }

    const provider = createAIProvider();
    const result = await runScanPipeline(domain, provider);

    return NextResponse.json({
      scanId: result.scanId,
      reportId: result.reportId,
    });
  } catch (error) {
    console.error("Scan pipeline error:", error);
    return NextResponse.json(
      { error: "Scan failed. Please try again later." },
      { status: 500 }
    );
  }
}
