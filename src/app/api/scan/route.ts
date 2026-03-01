import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { validateAndSanitizeDomain } from "@/backend/validation/domain";
import { createAIProvider } from "@/backend/lib/ai/provider";
import { runScanPipeline } from "@/backend/services/scan/pipeline";
import { LOCALE_COOKIE, DEFAULT_LOCALE, isValidLocale } from "@/shared/i18n";

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

    // Read locale from cookie
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get(LOCALE_COOKIE)?.value;
    const locale =
      localeCookie && isValidLocale(localeCookie)
        ? localeCookie
        : DEFAULT_LOCALE;

    const provider = createAIProvider();
    const result = await runScanPipeline(domain, provider, locale);

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
