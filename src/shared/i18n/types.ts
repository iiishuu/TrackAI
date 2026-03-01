export type Locale = "en" | "fr";

export type QueryType =
  | "commercial"
  | "comparative"
  | "reputation"
  | "informational";

export type ScanDepth = "quick" | "standard" | "deep";

export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    scanTitle: string;
    scanDescription: string;
    historyTitle: string;
    historyDescription: string;
    reportNotFound: string;
    reportTitle: string;
    reportDescription: string;
    loadingTitle: string;
  };

  nav: {
    scan: string;
    history: string;
  };

  hero: {
    titleBefore: string;
    titleHighlight: string;
    description: string;
    placeholder: string;
    analyze: string;
  };

  howItWorks: {
    title: string;
    steps: Array<{ title: string; description: string }>;
  };

  footer: {
    tagline: string;
  };

  scan: {
    title: string;
    description: string;
    placeholder: string;
    analyze: string;
    analyzing: string;
    whatWeAnalyze: string;
    infoCards: Array<{ title: string; description: string }>;
    aiEngine: string;
    aiEngineDesc: string;
    queryTypes: string;
    queryTypesDesc: string;
    depth: string;
    depthDesc: string;
    commercial: string;
    commercialDesc: string;
    comparative: string;
    comparativeDesc: string;
    reputation: string;
    reputationDesc: string;
    informational: string;
    informationalDesc: string;
    quick: string;
    quickDesc: string;
    standard: string;
    standardDesc: string;
    deep: string;
    deepDesc: string;
  };

  scanSteps: {
    domainValidation: string;
    sectorDiscovery: string;
    aiQueryAnalysis: string;
    scoreComputation: string;
    recommendations: string;
  };

  loading: {
    title: string;
    subtitle: string;
    stepDescriptions: {
      domainValidation: string;
      sectorDiscovery: string;
      aiQueryAnalysis: string;
      scoreComputation: string;
      recommendations: string;
    };
    complete: string;
    redirecting: string;
    error: string;
    tryAgain: string;
    facts: string[];
  };

  report: {
    visibilityScore: string;
    metrics: string;
    aiResponses: string;
    recommendations: string;
    position: string;
    scoreGood: string;
    scoreAverage: string;
    scoreLow: string;
    header: string;
    scanDate: string;
    downloadPdf: string;
    competitiveAnalysis: string;
    shareOfVoiceChart: string;
    yourBrand: string;
    sourceAnalysis: string;
    influenceSources: string;
    influenceSourcesDesc: string;
    queriesAnalyzed: string;
    queriesAnalyzedDesc: string;
    sourcesCount: string;
    sourcesCountDesc: string;
    viewFullResponse: string;
    hideFullResponse: string;
    aiSources: string;
    noSources: string;
    noInfluenceSources: string;
    scoreContext: {
      good: string;
      average: string;
      low: string;
    };
  };

  metrics: {
    citationRate: string;
    citationRateDesc: string;
    avgPosition: string;
    avgPositionDesc: string;
    sentiment: string;
    sentimentDesc: string;
    shareOfVoice: string;
    noData: string;
    na: string;
  };

  labels: {
    present: string;
    absent: string;
    positive: string;
    neutral: string;
    negative: string;
    high: string;
    medium: string;
    low: string;
  };

  history: {
    title: string;
    description: string;
    filterPlaceholder: string;
    loading: string;
    empty: string;
    errorFetch: string;
  };

  errors: {
    scanFailed: string;
    unexpected: string;
  };
}
