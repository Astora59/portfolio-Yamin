type SkillLinkDefinition = {
  slug: string;
  aliases: string[];
};

type ImportantTextDefinition = {
  pattern: string;
};

const SKILL_LINK_DEFINITIONS: SkillLinkDefinition[] = [
  {
    slug: 'angular-front',
    aliases: ['Angular / Front-end', 'Angular'],
  },
  {
    slug: 'svelte',
    aliases: ['Svelte'],
  },
  {
    slug: 'java-spring',
    aliases: ['Java / Spring Boot', 'Java / Spring', 'Java/Spring', 'Spring Boot', 'Java'],
  },
  {
    slug: 'docker-devops',
    aliases: ['Docker & DevOps', 'GitHub Actions', 'Kubernetes', 'CI/CD', 'Docker', 'DevOps'],
  },
  {
    slug: 'tests',
    aliases: [
      'Tests (Vitest, Jest, Playwright)',
      'tests automatisés',
      'tests unitaires',
      'tests end-to-end',
      'tests bout à bout',
      'Vitest',
      'Jest',
      'Playwright',
      'Tests',
    ],
  },
  {
    slug: 'communication-projet',
    aliases: ['Communication en mode projet', 'communication'],
  },
  {
    slug: 'relation-client',
    aliases: ['Gestion de la relation client', 'relation client'],
  },
  {
    slug: 'travail-equipe',
    aliases: ['Travail en équipe & collaboration', 'travail en équipe', 'collaboration'],
  },
  {
    slug: 'adaptabilite-autonomie',
    aliases: ['Adaptabilité & autonomie', 'adaptabilité', 'autonomie'],
  },
  {
    slug: 'analyse-rigueur',
    aliases: ["Esprit d'analyse & rigueur", 'esprit d’analyse', 'analyse', 'rigueur'],
  },
];

const IMPORTANT_TEXT_DEFINITIONS: ImportantTextDefinition[] = [
  { pattern: 'CRM Dynamics 365' },
  { pattern: 'Unité de production culinaire' },
  { pattern: 'Lycée Jean Mermoz' },
  { pattern: 'Lycée Georges Clemenceau' },
  { pattern: 'Informatique et Sciences du Numérique' },
  { pattern: 'Services Informatiques aux Organisations' },
  { pattern: 'Solutions Logicielles et Applications Métiers' },
  { pattern: 'Master Expert en Ingénierie du Logiciel' },
  { pattern: 'Master Expert Architecte logiciel' },
  { pattern: 'Technicien Informatique' },
  { pattern: 'administrateur de système d’information' },
  { pattern: 'administrateur de système d\'information' },
  { pattern: 'Monsieur Didier Garnier' },
  { pattern: 'Olivier Barrière' },
  { pattern: 'cahier des charges' },
  { pattern: 'arborescence' },
  { pattern: 'Dynamics 365' },
  { pattern: 'GitHub Actions' },
  { pattern: 'Project Management Tool' },
  { pattern: "Pilotage de projet d'ingénierie du logiciel" },
  { pattern: "O'Fit" },
  { pattern: 'Docker Hub' },
  { pattern: 'CI/CD' },
  { pattern: 'JWT' },
  { pattern: 'JSON Web Token' },
  { pattern: 'MySQL' },
  { pattern: 'OVH' },
  { pattern: 'UPC' },
  { pattern: 'PMT' },
  { pattern: 'MVP' },
  { pattern: 'V1' },
  { pattern: 'RGPD' },
  { pattern: 'CEO' },
  { pattern: 'KPI' },
  { pattern: 'WampServer' },
  { pattern: 'Wamp' },
  { pattern: 'bons de commande' },
  { pattern: 'fiches techniques' },
  { pattern: 'circuit court' },
  { pattern: 'commissions de menus' },
  { pattern: 'archives' },
  { pattern: 'nutrition' },
  { pattern: 'produits locaux' },
  { pattern: 'recettes' },
  { pattern: 'ingrédients' },
  { pattern: 'CRM' },
  { pattern: 'DSN' },
  { pattern: 'ISCOD' },
  { pattern: 'YNOV' },
  { pattern: 'Weekera' },
  { pattern: 'Computacenter' },
  { pattern: 'A+ Énergies' },
  { pattern: 'IPSSI' },
  { pattern: 'BTS SIO' },
  { pattern: 'Bac Scientifique' },
  { pattern: 'SIO' },
  { pattern: 'SLAM' },
  { pattern: 'ISN' },
  { pattern: 'ESN' },
  { pattern: 'N+1' },
  { pattern: 'Déclaration Sociale Nominative' },
  { pattern: 'OWASP' },
  { pattern: 'API REST' },
  { pattern: 'API' },
  { pattern: 'CRUD' },
  { pattern: 'BDD' },
  { pattern: 'SQL' },
  { pattern: 'NoSQL' },
  { pattern: 'PostgreSQL' },
  { pattern: 'MongoDB' },
  { pattern: 'Firebase' },
  { pattern: 'TypeScript' },
  { pattern: 'JavaScript' },
  { pattern: 'Tailwind' },
  { pattern: 'Bootstrap' },
  { pattern: 'Spring Security' },
  { pattern: 'Spring Data JPA' },
  { pattern: 'JPA' },
  { pattern: 'JUnit' },
  { pattern: 'H2' },
  { pattern: 'JaCoCo' },
  { pattern: 'Nx' },
  { pattern: 'WQL' },
  { pattern: 'PHP' },
  { pattern: 'C#' },
  { pattern: '.NET' },
  { pattern: 'React Native' },
  { pattern: 'React' },
  { pattern: 'Flutter' },
  { pattern: 'Kotlin' },
  { pattern: 'Python' },
  { pattern: 'Laravel' },
  { pattern: 'Symfony' },
  { pattern: 'Kubernetes' },
  { pattern: 'UML' },
  { pattern: 'Merise' },
  { pattern: 'HTML' },
  { pattern: 'CSS' },
  { pattern: 'AJAX' },
  { pattern: 'VS Code' },
  { pattern: 'NetBeans' },
  { pattern: 'Visual Studio' },
  { pattern: 'Laragon' },
  { pattern: 'Asana' },
  { pattern: 'iPad' },
  { pattern: 'LAN' },
  { pattern: 'BUS' },
  { pattern: 'SAV' },
  { pattern: 'QCM' },
  { pattern: 'support helpdesk' },
  { pattern: 'niveau 1' },
  { pattern: 'tickets' },
  { pattern: 'rush' },
  { pattern: 'alternance' },
  { pattern: 'distanciel' },
  { pattern: 'transition énergétique' },
  { pattern: 'parc informatique' },
  { pattern: 'tablettes iPad' },
  { pattern: 'projet transverse' },
  { pattern: 'architectes' },
  { pattern: 'commerciaux' },
  { pattern: 'graphistes' },
  { pattern: 'développeur full-stack' },
  { pattern: 'développement applicatif' },
  { pattern: 'correction de bugs' },
  { pattern: 'repo' },
  { pattern: 'Tetris' },
  { pattern: '20/20' },
  { pattern: 'algorithmie' },
  { pattern: 'Daily Stand-up Meeting' },
  { pattern: 'DSM' },
  { pattern: 'User Stories' },
  { pattern: 'User Story' },
  { pattern: 'user stories' },
  { pattern: 'US' },
  { pattern: 'Product Owner' },
  { pattern: 'UX/UI' },
  { pattern: 'bêta-testeurs' },
  { pattern: 'valeur ajoutée' },
  { pattern: 'complexité technique' },
  { pattern: 'impact calendrier' },
  { pattern: 'indicateurs de suivi' },
  { pattern: 'analyse des risques' },
  { pattern: 'plan de mitigation' },
  { pattern: 'stratégie de mitigation' },
  { pattern: 'audit' },
  { pattern: 'plan d’action' },
  { pattern: "plan d'action" },
  { pattern: 'roadmap' },
  { pattern: 'matrice RACI' },
  { pattern: 'backlog' },
  { pattern: 'jalons' },
  { pattern: 'télétravail' },
  { pattern: 'équipe projet' },
  { pattern: 'outils collaboratifs' },
  { pattern: 'Teams' },
  { pattern: 'Notion' },
  { pattern: 'Trello' },
  { pattern: 'Sprint reviews' },
  { pattern: '3 Amigos' },
  { pattern: 'tests automatisés' },
  { pattern: 'tests unitaires' },
  { pattern: 'tests end-to-end' },
  { pattern: 'tests bout à bout' },
  { pattern: 'pipeline' },
  { pattern: 'déploiement continu' },
  { pattern: 'intégration continue' },
  { pattern: 'front-end' },
  { pattern: 'back-end' },
  { pattern: 'full-stack' },
  { pattern: 'monorepo' },
  { pattern: 'localStorage' },
  { pattern: 'Dockerfile' },
  { pattern: 'docker-compose.yml' },
  { pattern: 'README' },
  { pattern: 'workflow' },
  { pattern: 'workflows' },
  { pattern: 'base de données' },
  { pattern: 'données sensibles' },
  { pattern: 'rôles utilisateurs' },
  { pattern: 'droits d’accès' },
  { pattern: 'utilisateurs métier' },
  { pattern: 'mise en production' },
  { pattern: 'mise en ligne' },
  { pattern: 'suivi client' },
  { pattern: 'besoin métier' },
  { pattern: 'besoin utilisateur' },
  { pattern: 'modèle relationnel' },
  { pattern: 'diagramme de classes' },
  { pattern: 'schéma relationnel' },
  { pattern: 'user stories' },
  { pattern: 'couverture de code' },
  { pattern: 'rapport de couverture' },
  { pattern: 'images Docker' },
  { pattern: 'tests fonctionnels' },
  { pattern: 'architecture logicielle' },
  { pattern: 'sécurité' },
  { pattern: 'qualité' },
  { pattern: 'expertise logicielle' },
    { pattern: 'compréhension métier' },
  { pattern: 'tests' },
  { pattern: 'paie' },
  { pattern: 'ressources humaines' },
  { pattern: 'RH' },
  { pattern: 'experts-comptables' },
  { pattern: 'gestion de projet' },
  { pattern: 'gestion RH' },
  { pattern: 'gestion des ressources humaines' },
  { pattern: 'droit' },
  { pattern: 'réseaux' },
  { pattern: 'développement mobile' },
  { pattern: 'développement web' },
  { pattern: 'auto-apprentissage' },
  { pattern: 'méthodes agiles' },
  { pattern: 'compréhension fonctionnelle' },
  { pattern: 'relation client' },
  { pattern: 'autonomie' },
  { pattern: 'adaptabilité' },
  { pattern: 'rigueur' },
];

const SKILL_ALIAS_ENTRIES = SKILL_LINK_DEFINITIONS
  .flatMap((definition) => definition.aliases.map((alias) => ({ alias, slug: definition.slug })))
  .sort((left, right) => right.alias.length - left.alias.length);

const IMPORTANT_TEXT_ENTRIES = Array.from(
  new Set(IMPORTANT_TEXT_DEFINITIONS.map(({ pattern }) => pattern)),
).sort((left, right) => right.length - left.length);

const SKILL_ALIAS_TO_SLUG = new Map(
  SKILL_ALIAS_ENTRIES.map(({ alias, slug }) => [alias.toLocaleLowerCase('fr-FR'), slug]),
);

const SKILL_ALIAS_PATTERN = new RegExp(
  `(?<![\\p{L}\\p{N}])(${SKILL_ALIAS_ENTRIES.map(({ alias }) => escapeRegex(alias)).join('|')})(?![\\p{L}\\p{N}])`,
  'giu',
);

const IMPORTANT_TEXT_PATTERN = new RegExp(
  `(?<![\\p{L}\\p{N}])(${IMPORTANT_TEXT_ENTRIES.map((pattern) => escapeRegex(pattern)).join('|')})(?![\\p{L}\\p{N}])`,
  'giu',
);

export function linkSkillMentions(
  text: string | null | undefined,
  excludedSlugs: string[] = [],
): string {
  if (!text) {
    return '';
  }

  return formatHtmlText(text, excludedSlugs, { linkSkills: true, emphasizeImportant: false });
}

export function highlightPortfolioText(
  text: string | null | undefined,
  excludedSlugs: string[] = [],
): string {
  if (!text) {
    return '';
  }

  return formatHtmlText(text, excludedSlugs, { linkSkills: true, emphasizeImportant: true });
}

export function emphasizePortfolioText(text: string | null | undefined): string {
  if (!text) {
    return '';
  }

  return formatHtmlText(text, [], { linkSkills: false, emphasizeImportant: true });
}

function formatHtmlText(
  text: string,
  excludedSlugs: string[],
  options: { linkSkills: boolean; emphasizeImportant: boolean },
): string {
  const excludedSlugSet = new Set(excludedSlugs);
  const htmlParts = text.split(/(<[^>]+>)/g);
  let anchorDepth = 0;
  let strongDepth = 0;

  return htmlParts
    .map((part) => {
      if (!part) {
        return part;
      }

      if (part.startsWith('<')) {
        const lowerPart = part.toLocaleLowerCase('fr-FR');

        if (/^<a(?=\s|>)/i.test(part)) {
          anchorDepth += 1;
        } else if (/^<\/a\s*>/i.test(part)) {
          anchorDepth = Math.max(0, anchorDepth - 1);
        } else if (/^<strong(?=\s|>)/i.test(part)) {
          strongDepth += 1;
        } else if (/^<\/strong\s*>/i.test(part)) {
          strongDepth = Math.max(0, strongDepth - 1);
        }

        return part;
      }

      if (anchorDepth > 0) {
        return part;
      }

      return formatTextSegment(part, excludedSlugSet, strongDepth > 0, options);
    })
    .join('');
}

function formatTextSegment(
  text: string,
  excludedSlugSet: Set<string>,
  isInsideStrong: boolean,
  options: { linkSkills: boolean; emphasizeImportant: boolean },
): string {
  if (!text.trim()) {
    return text;
  }

  let formattedText = text;

  if (options.linkSkills) {
    formattedText = formattedText.replace(SKILL_ALIAS_PATTERN, (match) => {
      const slug = SKILL_ALIAS_TO_SLUG.get(match.toLocaleLowerCase('fr-FR'));

      if (!slug || excludedSlugSet.has(slug)) {
        return match;
      }

      return `<a href="/comp/${slug}" class="skill-inline-link">${match}</a>`;
    });
  }

  if (options.emphasizeImportant && !isInsideStrong) {
    formattedText = emphasizeImportantText(formattedText);
  }

  return formattedText;
}

function emphasizeImportantText(text: string): string {
  const htmlParts = text.split(/(<[^>]+>)/g);
  let anchorDepth = 0;
  let strongDepth = 0;

  return htmlParts
    .map((part) => {
      if (!part) {
        return part;
      }

      if (part.startsWith('<')) {
        if (/^<a(?=\s|>)/i.test(part)) {
          anchorDepth += 1;
        } else if (/^<\/a\s*>/i.test(part)) {
          anchorDepth = Math.max(0, anchorDepth - 1);
        } else if (/^<strong(?=\s|>)/i.test(part)) {
          strongDepth += 1;
        } else if (/^<\/strong\s*>/i.test(part)) {
          strongDepth = Math.max(0, strongDepth - 1);
        }

        return part;
      }

      if (anchorDepth > 0 || strongDepth > 0) {
        return part;
      }

      return part.replace(IMPORTANT_TEXT_PATTERN, '<strong>$1</strong>');
    })
    .join('');
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
