export type Locale = "en" | "fr";

export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    scanTitle: string;
    scanDescription: string;
    historyTitle: string;
    historyDescription: string;
    reportNotFound: string;
    reportTitle: (domain: string) => string;
    reportDescription: (
      score: number,
      domain: string,
      sector: string
    ) => string;
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
  };

  scanSteps: {
    domainValidation: string;
    sectorDiscovery: string;
    aiQueryAnalysis: string;
    scoreComputation: string;
    recommendations: string;
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
