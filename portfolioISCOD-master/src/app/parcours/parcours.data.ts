export interface ParcoursArticle {
  context: string;
  workDone: string;
  discoveries: string;
  takeaway: string;
}

export interface ParcoursStep {
  order: number;
  period: string;
  slug: string;
  title: string;
  detailTitleHtml?: string;
  relatedRealisations?: {
    label: string;
    link: string;
  }[];
  subtitle: string;
  description: string;
  category: 'school' | 'company' | 'mixed';
  categoryLabel: string;
  accent: string;
  accentSoft: string;
  accentGlow: string;
  article: ParcoursArticle;
}

const SCHOOL_TONE = {
  accent: '#60a5fa',
  accentSoft: 'rgba(96, 165, 250, 0.18)',
  accentGlow: 'rgba(96, 165, 250, 0.16)',
}

const COMPANY_TONE = {
  accent: '#f59e0b',
  accentSoft: 'rgba(245, 158, 11, 0.18)',
  accentGlow: 'rgba(245, 158, 11, 0.16)',
}

const MIXED_TONE = {
  accent: '#a78bfa',
  accentSoft: 'rgba(167, 139, 250, 0.18)',
  accentGlow: 'rgba(167, 139, 250, 0.16)',
}

export const PARCOURS_STEPS: ParcoursStep[] = [
  {
    order: 1,
    period: '2015-2017',
    slug: 'lycee-saint-remi',
    title: 'Lycée Saint Remi',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://www.groupefresc.com" target="_blank" rel="noopener noreferrer">Lycée Saint Rémi</a>',
    subtitle: 'Bac économique et sociale - option Économie approfondie',
    description:
      `Cette étape représente l'étincelle de mon attrait pour l'informatique.`,
    category: 'school',
    categoryLabel: 'École',
    ...SCHOOL_TONE,
    article: {
      context:
        `Cette étape correspond à mes années au Lycée Saint Remi. C'est durant cette étape que j'ai commencé à sérieusement réfléchir à ce que j'aimerais faire dans la vie. La politique m'a toujours plu, mais l'idée de poursuivre une voie dans la programmation se faisait ressentir de plus en plus...`,
      workDone:
        `J’y ai construit mes bases scolaires, ma méthode de travail et ma capacité à réfléchir à des problèmes donnés. C’est aussi une période où j’ai commencé à mieux cerner les domaines qui m’attiraient. Avec l'aval de mes professeurs, j'ai poussé mon parcours vers une licence AES`,
      discoveries:
        `Ce fut un moment majeur dans ma vie, car j’ai rencontré des gens qui m’ont beaucoup inspiré. J’ai pu développer mon ouverture sur le monde qui m'a permis de rester curieux et informé de ce qui se passait autour de moi.`,
      takeaway:
        `Avec le recul, cette étape me sert surtout de fondation. Elle m’a permis de mieux comprendre ce que je voulais faire dans la vie.`,
    },
  },
  {
    order: 2,
    period: '2017-2020',
    slug: 'universite-lille-2',
    title: 'Université de Lille 2',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://www.univ-lille.fr" target="_blank" rel="noopener noreferrer">Université de Lille 2</a>',
    subtitle: 'Licence administration économique et sociale',
    description:
      'Mon entrée dans les études supérieures, qui a permis de définir mes forces et faiblesses.',
    category: 'school',
    categoryLabel: 'École',
    ...SCHOOL_TONE,
    article: {
      context:
        'Après des recommandations de plusieurs professeurs en leur parlant de mon attrait naturel à la politique, j’ai choisi de poursuivre mes études chez l’université de Lille 2. ',
      workDone:
        `J’ai appris le droit public, l’économie et les sciences sociales.`,
      discoveries:
        'J’ai appris bien des choses sur moi, notamment que faire du développement web m’intéressait plus que la politique.',
      takeaway:
        'J’ai pu développer ma manière de travailler, d’apprendre, et m’ouvrir au monde. J’ai aussi pu rencontrer des gens qui m’ont beaucoup inspiré, notamment des amis qui m’ont poussé à apprendre le développement web..',
    },
  },
  {
    order: 3,
    period: '2021-2022',
    slug: 'CEPRECO',
    title: 'CEPRECO',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--company" href="https://laho-formation.fr/laho-nos-centres-laho-metropole-lilloise/" target="_blank" rel="noopener noreferrer">CEPRECO / Vap’in</a>',
    subtitle: 'Chef de projet web et stratégie digitale',
    description:
      'Une première immersion en entreprise.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        `Suite à mes études en université, j'ai intégré une formation de chef de projet web et stratégie digitale, qui m'a permis de me familiariser avec l'environnement informatique en entreprise.`,
      workDone:
        'En tant que chef de projet web, j’ai pu superviser plusieurs produits pour cigarettes électroniques. De sa création, à la communication, au travail en équipe ainsi que de la gestion du site web. J’ai aussi eu l’occasion d’apprendre les bases du développement web avec HTML, CSS, Javascript et PHP.',
      discoveries:
        `Avec une telle expérience, j’ai découvert le travail en entreprise, commment travailer en groupe et la gestion de projet.`,
      takeaway:
        'Cette expérience m’a initié au monde du travail. Elle a renforcé ma capacité à m’adapter et à comprendre les enjeux d’un cadre de travail exigeant.',
    },
  },
  {
    order: 4,
    period: '2022-2023',
    slug: 'openclassrooms',
    title: 'OpenClassrooms',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer">Openclassrooms</a>',
    subtitle: 'Développeur d’application React',
    description:
      'Cette formation a été l’occasion pour moi d’améliorer mes capacités de développeur web.',
    category: 'school',
    categoryLabel: 'École',
    ...SCHOOL_TONE,
    article: {
      context:
        `Après ma formation chez CEPRECO, j'ai sauté le pas et j'ai appris le développement web avec React.Je voulais me spécialiser dans le développement web, après m'être rendu compte à quel point j'aimais ça.`,
      workDone:
        `En plus d'avoir pu renforcer mes acquis, j'ai pu apprendre un framework, React, qui a permis de mener mes projets avec de nouvelles fonctionnalités. J'ai aussi pu travailler sur le déploiement de plusieurs applications web, et maîtriser des compétences indispensables pour tout développeur web.`,
      discoveries:
        `J’y ai découvert que j’étais capable d’apprendre rapidement de nouvelles technologies et de m’adapter à des projets très différents, mais aussi que je pouvais travailler en autonomie.`,
      takeaway:
        'Cette période m’a beaucoup fait grandir. Elle m’a permis de confirmer mon autonomie, ma persévérance et ma capacité à apprendre sur des projets concrets.',

    },
  },
  {
    order: 5,
    period: '2024-2025',
    slug: 'iscod-vegacy',
    title: 'ISCOD / Vegacy',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://www.iscod.fr/?utm_source=google-branding&utm_medium=cpc&utm_campaign=ISCOD&utm_term=%2Biscod&gad_source=1&gad_campaignid=9492102615&gclid=Cj0KCQjwy_fOBhC6ARIsAHKFB79uivLwgaSXcra1QkGfrGp1-lBWWdXUSceKhQG0FYC1wfA3V4V1AOcaAtd4EALw_wcB" target="_blank" rel="noopener noreferrer">ISCOD</a><span class="parcours-title-separator"> / </span><a class="parcours-link parcours-link--company" href="https://www.instagram.com/teamvegacy/" target="_blank" rel="noopener noreferrer">Vegacy</a>',
    relatedRealisations: [
      {
        label: 'Cybergarde',
        link: 'Cybergarde',
      }
    ],
    subtitle: 'Master Expert en Ingénierie du Logiciel',
    description:
      'Une étape de consolidation entre expertise logicielle, qualité, tests et compréhension métier en entreprise.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        `
        Durant ma formation à ISCOD, dans le cadre du master Expert en Ingénierie du Logiciel, j’ai approfondi la gestion de projet, le développement full-stack (Angular, Java / Spring, TypeScript), les tests, le DevOps (Docker, CI/CD, Kubernetes), l’architecture logicielle, la sécurité, ainsi que les méthodes agiles et la communication en environnement professionnel.
        Durant mon alternance chez Vegacy, je suis intervenu en tant que développeur full-stack sur des applications liées à la gestion d'événements e-sportifs.`,
      workDone:
        `Au sein de mon entreprise, mon premier rôle a été la refonte du site web. J'ai aussi eu l'occasion de travailler sur un nouveau framework de Python, qui s'appelle Ren'py. Ce framework permet de creer des jeux video en utilisant des scripts Python. C'était un projet très difficile mais surtout passionnant, qui m'a permis de concevoir le jeu de ses visuels à son histoire, en passant bien sûr par sa programmation.`,
      discoveries:
        `À l’école, j’y ai découvert une vision plus large de l’ingénierie du logiciel, avec des sujets comme l’architecture, le pilotage de projet, la relation client, la qualité et l’industrialisation du développement.
        En entreprise, j’ai pu travailler sur des projets plus concrets, au contact de profils très divers.`,
      takeaway:
        `Cette étape a confirmé la direction que je voulais donner à mon profil : devenir un développeur capable de produire du code utile, maintenable et cohérent. Elle a aussi renforcé mon intérêt pour les environnements où la qualité, la collaboration et la compréhension fonctionnelle ont une vraie importance.`,
    },
  },
  {
    order: 6,
    period: '2025-2026',
    slug: 'iscod-monabanq',
    title: 'ISCOD / Monabanq',
    detailTitleHtml:
      '<a class="parcours-link parcours-link--school" href="https://www.iscod.fr/?utm_source=google-branding&utm_medium=cpc&utm_campaign=ISCOD&utm_term=%2Biscod&gad_source=1&gad_campaignid=9492102615&gclid=Cj0KCQjwy_fOBhC6ARIsAHKFB79uivLwgaSXcra1QkGfrGp1-lBWWdXUSceKhQG0FYC1wfA3V4V1AOcaAtd4EALw_wcB" target="_blank" rel="noopener noreferrer">ISCOD</a><span class="parcours-title-separator"> / </span><a class="parcours-link parcours-link--company" href="https://www.monabanq.com/fr/index.html" target="_blank" rel="noopener noreferrer">Monabanq</a>',  
    subtitle: 'Master Expert en Ingénierie du Logiciel',
    description:
      'Une étape de consolidation entre expertise logicielle, qualité, tests et compréhension métier en entreprise.',
    category: 'mixed',
    categoryLabel: 'École & entreprise',
    ...MIXED_TONE,
    article: {
      context:
        `
        Durant ma formation à ISCOD, dans le cadre du master Expert en Ingénierie du Logiciel, j’ai approfondi la gestion de projet, le développement full-stack (Angular, Java / Spring, TypeScript), les tests, le DevOps (Docker, CI/CD, Kubernetes), l’architecture logicielle, la sécurité, ainsi que les méthodes agiles et la communication en environnement professionnel.
        Durant mon alternance chez Vegacy, je suis intervenu en tant que développeur full-stack sur des applications liées à la gestion d'événements e-sportifs.`,
      workDone:
        `Les missions au sein de l'entreprise ont pour objectif la maintenance, la refonte et la mise en place de nouvelles fonctionnalités. J'ai notamment pu travailler avec plusieurs équipes sur une toute nouvelle fonctionnalité du site web, qui consiste à apporter un suivi des primes pour les tout nouveaux clients de Monabanq. J'ai aussi pu participer à la refonte du site web, en s'assurant de la qualité et de l'accessibilité de chacune des pages. Le plus grand défi à relever a été d'assimiler très rapidement une nouvelle langue de programmation, le liquid. 

      Au niveau de ma formation, j’ai suivi des cours sur la gestion de la relation client en ingénierie logicielle, le pilotage de projet d’ingénierie du logiciel, l’intégration, l’industrialisation et le déploiement logiciel, ainsi que la conception avancée de l’architecture logicielle. Aujourd’hui, j’ai terminé la partie formation et il me reste encore quelques épreuves à passer pour valider mon année.`,
      discoveries:
        `À l’école, j’y ai découvert une vision plus large de l’ingénierie du logiciel, avec des sujets comme l’architecture, le pilotage de projet, la relation client, la qualité et l’industrialisation du développement.

        En entreprise, j’y ai découvert les rituels de travail qui structurent le quotidien d'une entreprise, de la compréhension métier et de la collaboration pour faire évoluer une application web existante. Dans le secteur bancaire, chaque erreur peut être critique et avoir des conséquences graves. C'est pourquoi j'ai appris l'importance de proposer un code de qualité, lisible, maintenable et cohérent.`,
      takeaway:
        `Cette étape marque le moment où je me suis senti le plus épanoui dans mon travail de développeur web. J'ai énormément appris non seulement sur moi même mais aussi sur le travail en équipe, les relations professionnelles et la gestion de projet.`,
    },
  },
];

export function getParcoursStepBySlug(slug: string | null): ParcoursStep | undefined {
  return PARCOURS_STEPS.find((step) => step.slug === slug);
}

