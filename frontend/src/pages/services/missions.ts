export const MISSIONS = [

  {
    id: "mvp-ia",
    title: "🚀 Construire & livrer un MVP IA en 15 jours",
    tagline: "Validez votre idée en un temps record",
    description:
      "Vous voulez passer de l’idée au prototype fonctionnel ? En 2 semaines, je conçois un MVP complet (backend FastAPI, UI minimal, brique IA – chatbot, résumé, images générées…) prêt à être testé par vos utilisateurs ou investisseurs.",
    pour: "Startups early-stage, fondateurs solo, incubateurs",
    valeur:
      "Prototype testable, stable et versionné, pour itérer en toute confiance.",
    details:
      "Sprint structuré : J1 cadrage, J2–J12 implémentation modulaire, J13–J14 démo & docs.",
    duration: "10–15 jours",
    image: "images/missions/mission1.5.png",
  },
  {
    id: "backend-reboot",
    title: "🧱 Architecturer & refondre votre backend Python",
    tagline: "Code propre, maintenable et testable dès la 1ʳᵉ ligne",
    description:
      "Votre backend freine votre croissance ? Je restructure ou crée un service FastAPI modulaire, avec tests unitaires, CI/CD et documentation, pour garantir fiabilité et montée en charge sans douleur.",
    pour: "Scale-ups, équipes produit surchargées, CTOs juniors",
    valeur:
      "Base technique solide : évolutions rapides, onboarding simplifié, zéro surprise.",
    details:
      "Audit 1–2 j, refacto/build FastAPI 7–12 j, guide d’onboarding & docs.",
    duration: "8–15 jours",
    image: "images/missions/mission2.5.png",
  },
  {
    id: "cloud-devops",
    title: "⚙️ CI/CD & Cloud simplifiés",
    tagline: "Déploiements sûrs, coûts maîtrisés",
    description:
      "Marre des déploiements manuels et incapable de naviguer sur AWS ? Je mets en place vos pipelines CI/CD (GitHub Actions/GitLab CI), j’écris votre infrastructure-as-code (CDK/CloudFormation) et configure monitoring & rollback pour un flux de livraison fluide.",
    pour: "Équipes sans DevOps dédié, startups & PME",
    valeur:
      "Déploiement automatisé, autoscaling, alerting et maîtrise de vos coûts cloud.",
    details:
      "Conception pipeline 2 j, implémentation CI/CD & IaC 5–8 j, setup monitoring CloudWatch.",
    duration: "7–10 jours",
    image: "images/missions/mission3.5.png",
  },
  {
    id: "agent",
    title: "🤖 Votre assistant IA sur mesure",
    tagline: "Vos données internes deviennent utilisables en un instant",
    description: [
      "Agent IA (LangChain) connecté à vos données internes (CRM, wiki, PDFs).",
      "Recherche avancée, prompts optimisés, résultats précis.",
      "API sécurisée, documentée et facilement intégrable dans vos outils existants."
    ].toString(),
    pour: ["Entreprises data-driven", "Équipes support", "RH & Service client"].toString(),
    valeur: "Boostez votre productivité avec un assistant personnalisé, sécurisé et fiable.",
    duration: "Dès 10 jours",
    image: "images/missions/mission4.5.png",
    cta: "🧠 Créez votre agent IA"
  },
      {
    id: "ia-powerup",
    title: "🎓  Clarifier votre stratégie IA & monter en compétence",
    tagline: "Prenez les bonnes décisions et rendez vos équipes autonomes",
    description:
        "Vous souhaitez exploiter l’IA de manière concrète et performante ? Je vous accompagne pour identifier vos cas d’usage à forte valeur, bâtir une roadmap réaliste et renforcer les compétences de vos équipes grâce à des ateliers pratiques et un coaching sur-mesure.",
    pour: "PME en transition digitale, CTO, lead devs, équipes data",
    valeur:
        "Une stratégie IA solide, des équipes formées et autonomes pour déployer des solutions à impact.",
    details:
        "Diagnostic express (1–2 j), ateliers pratiques (1–3 j) et suivi Q&A (2 semaines) pour consolider les acquis.",
    duration: "1–5 jours + 2 sem. de suivi",
    image: "images/missions/mission5.5.png",
  },
  {
    id: "maintenance",
    title: "🔧 Maintenance & Support long-terme",
    tagline: "Votre sérénité, jour après jour",
    description:
      "Après livraison, je reste à vos côtés : Support réactif sous 48h, corrections de bugs, mises à jour de dépendances, monitoring et support SLA.",
    pour: "Tous clients post-mission",
    valeur:
      "Assurez la pérennité, gardez l'esprit tranquille",
    details:
      "Forfaits mensuels ou support à la demande, avec reporting régulier.",
    duration: "Forfait mensuel",
    image: "images/missions/mission6.5.png",
  },
];
