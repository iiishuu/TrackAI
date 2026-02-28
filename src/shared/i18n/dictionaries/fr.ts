import type { Dictionary } from "../types";

export const fr: Dictionary = {
  meta: {
    siteTitle: "TrackAI — Suivi de Visibilité IA",
    siteDescription:
      "Suivez la visibilité de votre marque sur les moteurs de recherche IA comme ChatGPT, Gemini et Perplexity.",
    scanTitle: "Analysez votre domaine — TrackAI",
    scanDescription:
      "Analysez la visibilité de votre marque sur les moteurs de recherche IA comme ChatGPT, Gemini et Perplexity.",
    historyTitle: "Historique des scans — TrackAI",
    historyDescription:
      "Consultez vos analyses de visibilité IA passées et suivez les performances de votre marque.",
    reportNotFound: "Rapport introuvable — TrackAI",
    reportTitle: (domain) =>
      `${domain} — Rapport de visibilité IA — TrackAI`,
    reportDescription: (score, domain, sector) =>
      `Score de visibilité IA : ${score}/100 pour ${domain} dans le secteur ${sector}.`,
  },

  nav: {
    scan: "Scanner",
    history: "Historique",
  },

  hero: {
    titleBefore: "Suivez la visibilité de votre marque sur les ",
    titleHighlight: "moteurs de recherche IA",
    description:
      "Découvrez comment ChatGPT, Gemini et Perplexity parlent de votre marque. Obtenez des recommandations concrètes pour améliorer votre visibilité IA.",
    placeholder: "Entrez votre domaine...",
    analyze: "Analyser",
  },

  howItWorks: {
    title: "Comment ça marche",
    steps: [
      {
        title: "Entrez votre domaine",
        description:
          "Saisissez le domaine de votre marque et nous lancerons l'analyse sur plusieurs moteurs de recherche IA.",
      },
      {
        title: "Analyse IA",
        description:
          "Nous interrogeons les moteurs IA avec des requêtes stratégiques liées à votre secteur et analysons comment ils référencent votre marque.",
      },
      {
        title: "Obtenez votre rapport",
        description:
          "Recevez un score de visibilité détaillé, une analyse des métriques et des recommandations concrètes.",
      },
    ],
  },

  footer: {
    tagline: "TrackAI — Suivi de Visibilité IA",
  },

  scan: {
    title: "Analysez votre domaine",
    description:
      "Entrez un domaine pour découvrir comment les moteurs de recherche IA référencent votre marque.",
    placeholder: "exemple.com",
    analyze: "Analyser",
    analyzing: "Analyse en cours...",
  },

  scanSteps: {
    domainValidation: "Validation du domaine",
    sectorDiscovery: "Découverte du secteur",
    aiQueryAnalysis: "Analyse des requêtes IA",
    scoreComputation: "Calcul du score",
    recommendations: "Recommandations",
  },

  report: {
    visibilityScore: "Score de visibilité IA",
    metrics: "Métriques",
    aiResponses: "Réponses IA",
    recommendations: "Recommandations",
    position: "Position",
    scoreGood: "Bon",
    scoreAverage: "Moyen",
    scoreLow: "Faible",
  },

  metrics: {
    citationRate: "Taux de citation",
    citationRateDesc: "des réponses IA vous mentionnent",
    avgPosition: "Position moy.",
    avgPositionDesc: "quand mentionné dans les résultats",
    sentiment: "Sentiment",
    sentimentDesc: "perception IA globale",
    shareOfVoice: "Part de voix",
    noData: "Aucune donnée",
    na: "N/A",
  },

  labels: {
    present: "Présent",
    absent: "Absent",
    positive: "positif",
    neutral: "neutre",
    negative: "négatif",
    high: "haute",
    medium: "moyenne",
    low: "basse",
  },

  history: {
    title: "Historique des scans",
    description:
      "Consultez et comparez vos analyses de visibilité IA passées.",
    filterPlaceholder: "Filtrer par domaine...",
    loading: "Chargement de l'historique...",
    empty: "Aucun scan pour le moment. Commencez par analyser un domaine.",
    errorFetch: "Impossible de charger l'historique",
  },

  errors: {
    scanFailed: "L'analyse a échoué. Veuillez réessayer plus tard.",
    unexpected: "Une erreur inattendue s'est produite",
  },
};
