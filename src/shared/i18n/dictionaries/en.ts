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
    reportTitle: "{domain} — AI Visibility Report — TrackAI",
    reportDescription:
      "AI visibility score: {score}/100 for {domain} in {sector}.",
    loadingTitle: "Analyzing — TrackAI",
  },

  nav: {
    scan: "Scan",
    history: "History",
  },

  hero: {
    badge: "AI Visibility Intelligence",
    titleBefore: "Track Your Brand on ",
    titleHighlight: "AI Search Engines",
    titleAfter: " in Real Time",
    description:
      "Discover how ChatGPT, Gemini, and Perplexity talk about your brand. Get actionable recommendations to boost your AI visibility score.",
    placeholder: "Enter your domain...",
    analyze: "Analyze for Free",
  },

  aiLogos: {
    title: "Analyze your visibility on",
    engines: ["ChatGPT", "Perplexity", "Gemini", "Copilot", "Claude"],
  },

  howItWorks: {
    title: "How It Works",
    subtitle:
      "Three simple steps to understand your brand's AI presence and take action.",
    stepLabel: "Step",
    steps: [
      {
        icon: "Globe",
        title: "Enter Your Domain",
        description:
          "Type in your brand domain and we'll start the analysis across multiple AI search engines.",
      },
      {
        icon: "Brain",
        title: "AI Analysis",
        description:
          "We query AI engines with strategic prompts related to your sector and analyze how they reference your brand.",
      },
      {
        icon: "BarChart3",
        title: "Get Your Report",
        description:
          "Receive a detailed visibility score, metrics breakdown, and actionable recommendations to improve.",
      },
    ],
  },

  features: {
    title: "Everything You Need",
    subtitle:
      "Comprehensive AI visibility analytics to stay ahead of the competition.",
    items: [
      {
        icon: "Search",
        title: "Multi-Engine Analysis",
        description:
          "Query ChatGPT, Gemini, and Perplexity simultaneously with strategic prompts tailored to your industry.",
      },
      {
        icon: "Target",
        title: "Brand Presence Detection",
        description:
          "Detect if and where your brand appears in AI responses, including position, sentiment, and context.",
      },
      {
        icon: "TrendingUp",
        title: "Visibility Scoring",
        description:
          "Get a composite score from 0 to 100 that reflects your overall AI search engine presence.",
      },
      {
        icon: "Users",
        title: "Competitive Analysis",
        description:
          "See which competitors are mentioned alongside your brand and their share of voice.",
      },
      {
        icon: "Lightbulb",
        title: "Smart Recommendations",
        description:
          "Receive AI-powered, context-aware recommendations specific to your sector and weaknesses.",
      },
      {
        icon: "LineChart",
        title: "Historical Tracking",
        description:
          "Monitor your AI visibility over time and measure the impact of your optimization efforts.",
      },
    ],
  },

  stats: {
    title: "Trusted by Brands Worldwide",
    subtitle: "Helping businesses understand and improve their AI visibility.",
    items: [
      { value: 500, suffix: "+", label: "Scans Completed" },
      { value: 3, suffix: "", label: "AI Engines Analyzed" },
      { value: 98, suffix: "%", label: "Accuracy Rate" },
      { value: 24, suffix: "/7", label: "Monitoring" },
    ],
  },

  finalCta: {
    title: "Ready to Boost Your AI Visibility?",
    description:
      "Join hundreds of brands already tracking their presence on AI search engines. Start your free analysis now.",
    placeholder: "Enter your domain...",
    analyze: "Start Free Analysis",
  },

  footer: {
    tagline: "TrackAI",
    description:
      "Track and improve your brand visibility across AI search engines like ChatGPT, Gemini, and Perplexity.",
    product: "Product",
    productLinks: [
      { label: "AI Scan", href: "/scan" },
      { label: "History", href: "/history" },
      { label: "Pricing", href: "#" },
    ],
    resources: "Resources",
    resourceLinks: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "AI SEO Guide", href: "#" },
    ],
    legal: "Legal",
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
    copyright: "All rights reserved.",
  },

  scan: {
    title: "Analyze Your Domain",
    description:
      "Enter a domain to discover how AI search engines reference your brand.",
    placeholder: "example.com",
    analyze: "Analyze",
    analyzing: "Analyzing...",
    whatWeAnalyze: "What We Analyze",
    infoCards: [
      {
        title: "AI Engine Queries",
        description:
          "We query leading AI engines like Perplexity, ChatGPT, and Gemini with strategic prompts related to your industry.",
      },
      {
        title: "Brand Presence Detection",
        description:
          "We detect if and where your brand appears in AI responses, tracking position, sentiment, and context.",
      },
      {
        title: "Actionable Report",
        description:
          "Get a complete visibility score, competitive analysis, and personalized recommendations to improve.",
      },
    ],
    aiEngine: "AI Engine",
    aiEngineDesc: "Select which AI engine to query",
    queryTypes: "Question Types",
    queryTypesDesc: "Choose what types of queries to run",
    depth: "Analysis Depth",
    depthDesc: "Number of strategic queries to run",
    commercial: "Commercial",
    commercialDesc: "Best products, where to buy, reviews",
    comparative: "Comparative",
    comparativeDesc: "Brand vs competitor, alternatives, top 5",
    reputation: "Reputation",
    reputationDesc: "Brand reviews, reliability, issues",
    informational: "Informational",
    informationalDesc: "How it works, guides, explanations",
    quick: "Quick",
    quickDesc: "5 queries",
    standard: "Standard",
    standardDesc: "10 queries",
    deep: "Deep",
    deepDesc: "20 queries",
  },

  scanSteps: {
    domainValidation: "Domain validation",
    sectorDiscovery: "Sector discovery",
    aiQueryAnalysis: "AI query analysis",
    scoreComputation: "Score computation",
    recommendations: "Recommendations",
  },

  loading: {
    title: "Analyzing {domain}",
    subtitle: "Our AI agents are examining your brand visibility",
    stepDescriptions: {
      domainValidation: "Checking domain validity and accessibility...",
      sectorDiscovery:
        "Identifying your industry sector and key competitors...",
      aiQueryAnalysis:
        "Querying AI engines with strategic prompts about your brand...",
      scoreComputation:
        "Computing your visibility score across all responses...",
      recommendations:
        "Generating personalized recommendations for your brand...",
    },
    complete: "Analysis complete!",
    redirecting: "Redirecting to your report...",
    error: "Something went wrong",
    tryAgain: "Try Again",
    facts: [
      "70% of users trust AI-generated recommendations when choosing a product.",
      "Brands mentioned in the first 3 positions in AI responses get 5x more visibility.",
      "AI search engines analyze over 100 data sources to form their responses.",
      "Your digital footprint across review sites directly impacts AI visibility.",
      "Structured data on your website helps AI engines better understand your brand.",
    ],
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
    header: "AI Visibility Report",
    scanDate: "Scanned on {date}",
    downloadPdf: "Download PDF",
    competitiveAnalysis: "Competitive Analysis",
    shareOfVoiceChart: "Share of Voice Distribution",
    yourBrand: "Your Brand",
    sourceAnalysis: "Source Analysis",
    influenceSources: "Influence Sources",
    influenceSourcesDesc:
      "Top domains and sources cited in AI responses about your industry",
    queriesAnalyzed: "Queries Analyzed",
    queriesAnalyzedDesc: "strategic queries sent to AI engines",
    sourcesCount: "Sources Found",
    sourcesCountDesc: "unique sources referenced by AI",
    viewFullResponse: "View full response",
    hideFullResponse: "Hide full response",
    aiSources: "Sources",
    noSources: "No sources available",
    noInfluenceSources: "No influence sources detected",
    scoreContext: {
      good: "Your brand has strong visibility across AI search engines. AI assistants frequently mention and recommend your brand.",
      average:
        "Your brand has moderate visibility. There is room to improve how AI search engines reference your brand.",
      low: "Your brand has limited visibility in AI responses. Significant improvements are needed to increase AI presence.",
    },
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
