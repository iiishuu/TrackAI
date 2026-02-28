import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    siteTitle: "TrackAI — AI Visibility Tracker",
    siteDescription:
      "Track your brand visibility across AI search engines like ChatGPT, Gemini, and Perplexity.",
    scanTitle: "Scan Your Domain — TrackAI",
    scanDescription:
      "Analyze your brand visibility across AI search engines like ChatGPT, Gemini, and Perplexity.",
    historyTitle: "Scan History — TrackAI",
    historyDescription:
      "View your past AI visibility scans and track your brand performance over time.",
    reportNotFound: "Report Not Found — TrackAI",
    reportTitle: (domain) => `${domain} — AI Visibility Report — TrackAI`,
    reportDescription: (score, domain, sector) =>
      `AI visibility score: ${score}/100 for ${domain} in ${sector}.`,
  },

  nav: {
    scan: "Scan",
    history: "History",
  },

  hero: {
    titleBefore: "Track Your Brand Visibility on ",
    titleHighlight: "AI Search Engines",
    description:
      "Discover how ChatGPT, Gemini, and Perplexity talk about your brand. Get actionable recommendations to improve your AI visibility.",
    placeholder: "Enter your domain...",
    analyze: "Analyze",
  },

  howItWorks: {
    title: "How It Works",
    steps: [
      {
        title: "Enter Your Domain",
        description:
          "Type in your brand domain and we'll start the analysis across multiple AI search engines.",
      },
      {
        title: "AI Analysis",
        description:
          "We query AI engines with strategic prompts related to your sector and analyze how they reference your brand.",
      },
      {
        title: "Get Your Report",
        description:
          "Receive a detailed visibility score, metrics breakdown, and actionable recommendations to improve.",
      },
    ],
  },

  footer: {
    tagline: "TrackAI — AI Visibility Tracker",
  },

  scan: {
    title: "Analyze Your Domain",
    description:
      "Enter a domain to discover how AI search engines reference your brand.",
    placeholder: "example.com",
    analyze: "Analyze",
    analyzing: "Analyzing...",
  },

  scanSteps: {
    domainValidation: "Domain validation",
    sectorDiscovery: "Sector discovery",
    aiQueryAnalysis: "AI query analysis",
    scoreComputation: "Score computation",
    recommendations: "Recommendations",
  },

  report: {
    visibilityScore: "AI Visibility Score",
    metrics: "Metrics",
    aiResponses: "AI Responses",
    recommendations: "Recommendations",
    position: "Position",
    scoreGood: "Good",
    scoreAverage: "Average",
    scoreLow: "Low",
  },

  metrics: {
    citationRate: "Citation Rate",
    citationRateDesc: "of AI responses mention you",
    avgPosition: "Avg. Position",
    avgPositionDesc: "when mentioned in results",
    sentiment: "Sentiment",
    sentimentDesc: "overall AI perception",
    shareOfVoice: "Share of Voice",
    noData: "No data",
    na: "N/A",
  },

  labels: {
    present: "Present",
    absent: "Absent",
    positive: "positive",
    neutral: "neutral",
    negative: "negative",
    high: "high",
    medium: "medium",
    low: "low",
  },

  history: {
    title: "Scan History",
    description: "View and compare your past AI visibility analyses.",
    filterPlaceholder: "Filter by domain...",
    loading: "Loading history...",
    empty: "No scans yet. Start by analyzing a domain.",
    errorFetch: "Failed to load history",
  },

  errors: {
    scanFailed: "Scan failed. Please try again later.",
    unexpected: "An unexpected error occurred",
  },
};
