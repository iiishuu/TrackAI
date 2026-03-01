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
    reportTitle: "{domain} — Rapport de visibilité IA — TrackAI",
    reportDescription:
      "Score de visibilité IA : {score}/100 pour {domain} dans le secteur {sector}.",
    loadingTitle: "Analyse en cours — TrackAI",
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
    whatWeAnalyze: "Ce que nous analysons",
    infoCards: [
      {
        title: "Requêtes IA",
        description:
          "Nous interrogeons les moteurs IA leaders comme Perplexity, ChatGPT et Gemini avec des requêtes stratégiques liées à votre secteur.",
      },
      {
        title: "Détection de présence",
        description:
          "Nous détectons si et où votre marque apparaît dans les réponses IA, en suivant la position, le sentiment et le contexte.",
      },
      {
        title: "Rapport actionnable",
        description:
          "Obtenez un score de visibilité complet, une analyse concurrentielle et des recommandations personnalisées.",
      },
    ],
    aiEngine: "Moteur IA",
    aiEngineDesc: "Sélectionnez le moteur IA à interroger",
    queryTypes: "Types de questions",
    queryTypesDesc: "Choisissez les types de requêtes à exécuter",
    depth: "Profondeur d'analyse",
    depthDesc: "Nombre de requêtes stratégiques à exécuter",
    commercial: "Commerciales",
    commercialDesc: "Meilleurs produits, où acheter, avis",
    comparative: "Comparatives",
    comparativeDesc: "Marque vs concurrent, alternatives, top 5",
    reputation: "Réputation",
    reputationDesc: "Avis sur la marque, fiabilité, problèmes",
    informational: "Informationnelles",
    informationalDesc: "Comment ça marche, guides, explications",
    quick: "Rapide",
    quickDesc: "5 requêtes",
    standard: "Standard",
    standardDesc: "10 requêtes",
    deep: "Approfondie",
    deepDesc: "20 requêtes",
  },

  scanSteps: {
    domainValidation: "Validation du domaine",
    sectorDiscovery: "Découverte du secteur",
    aiQueryAnalysis: "Analyse des requêtes IA",
    scoreComputation: "Calcul du score",
    recommendations: "Recommandations",
  },

  loading: {
    title: "Analyse de {domain}",
    subtitle: "Nos agents IA examinent la visibilité de votre marque",
    stepDescriptions: {
      domainValidation:
        "Vérification de la validité et de l'accessibilité du domaine...",
      sectorDiscovery:
        "Identification de votre secteur d'activité et de vos concurrents clés...",
      aiQueryAnalysis:
        "Interrogation des moteurs IA avec des requêtes stratégiques sur votre marque...",
      scoreComputation:
        "Calcul de votre score de visibilité à travers toutes les réponses...",
      recommendations:
        "Génération de recommandations personnalisées pour votre marque...",
    },
    complete: "Analyse terminée !",
    redirecting: "Redirection vers votre rapport...",
    error: "Une erreur est survenue",
    tryAgain: "Réessayer",
    facts: [
      "70 % des utilisateurs font confiance aux recommandations générées par l'IA pour choisir un produit.",
      "Les marques mentionnées dans les 3 premières positions des réponses IA obtiennent 5x plus de visibilité.",
      "Les moteurs de recherche IA analysent plus de 100 sources de données pour formuler leurs réponses.",
      "Votre empreinte numérique sur les sites d'avis impacte directement votre visibilité IA.",
      "Les données structurées sur votre site aident les moteurs IA à mieux comprendre votre marque.",
    ],
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
    header: "Rapport de visibilité IA",
    scanDate: "Analysé le {date}",
    downloadPdf: "Télécharger PDF",
    competitiveAnalysis: "Analyse concurrentielle",
    shareOfVoiceChart: "Répartition de la part de voix",
    yourBrand: "Votre marque",
    sourceAnalysis: "Analyse des sources",
    influenceSources: "Sources d'influence",
    influenceSourcesDesc:
      "Principaux domaines et sources cités dans les réponses IA de votre secteur",
    queriesAnalyzed: "Requêtes analysées",
    queriesAnalyzedDesc: "requêtes stratégiques envoyées aux moteurs IA",
    sourcesCount: "Sources trouvées",
    sourcesCountDesc: "sources uniques référencées par l'IA",
    viewFullResponse: "Voir la réponse complète",
    hideFullResponse: "Masquer la réponse complète",
    aiSources: "Sources",
    noSources: "Aucune source disponible",
    noInfluenceSources: "Aucune source d'influence détectée",
    scoreContext: {
      good: "Votre marque bénéficie d'une forte visibilité sur les moteurs de recherche IA. Les assistants IA mentionnent et recommandent fréquemment votre marque.",
      average:
        "Votre marque a une visibilité modérée. Il y a des axes d'amélioration pour la façon dont les moteurs IA référencent votre marque.",
      low: "Votre marque a une visibilité limitée dans les réponses IA. Des améliorations significatives sont nécessaires pour augmenter votre présence IA.",
    },
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
