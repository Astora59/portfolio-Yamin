import { Skill } from '../models/skill.model'

const EMPTY_ARTICLE = {
  definition: 'Contenu à venir.',
  proofs: [],
  selfCritique: 'Contenu à venir.',
  evolution: 'Contenu à venir.',
  relatedProjects: [],
}

export const SKILLS: Skill[] = [
  {
    name: 'Angular',
    slug: 'angular-front',
    summary:
      "Framework <strong>front-end</strong> pour créer la partie visible d'une application web de façon <strong>structurée</strong> et <strong>maintenable</strong>.",
    icon: '🅰️',
    level: 90,
    type: 'technical',
    article: {
      definition: `
      <strong>Angular</strong> est un <strong>framework front-end</strong> adapté aux <strong>projets SPA</strong>, au <strong>SSR</strong> (Server-Side Rendering) avec <strong>Angular Universal</strong> et aux <strong>sites statiques</strong>.

      Il repose sur une <strong>architecture modulaire</strong> (fonctionnement par modules) et sur les <strong>composants</strong>, qui constituent un élément central de ce framework. On peut les générer, comme les <strong>pipes</strong>, les <strong>directives</strong>, les <strong>fichiers de test</strong> ou les <strong>services</strong>, et ils constituent la base du fonctionnement de ce framework SPA, puisque chaque composant fonctionne de manière isolée tout en pouvant communiquer avec d’autres. Cela rend les <strong>pages dynamiques</strong> et la <strong>navigation fluide</strong>, car le <strong>DOM</strong> est mis à jour dynamiquement.

      Angular utilise <strong>TypeScript</strong>, un langage basé sur <strong>JavaScript</strong> qui ajoute du <strong>typage</strong>. Lors du build, ce code est ensuite compilé en <strong>JavaScript</strong>, le langage interprété par les navigateurs.
      `,
      proofs: [
        {
          title: 'Étude de cas ISCOD - PMT',
          description:
            `Dans le cadre d’une étude de cas faite durant ma formation chez ISCOD, j’ai travaillé sur PMT (Project Management Tool), une plateforme collaborative de gestion de projet. Le projet avait pour but de concevoir une application capable d’aider une équipe à planifier ses projets et à suivre l’avancement des tâches.

c’est une application que J’ai réalisée en TypeScript avec Angular pour la partie front-end et Java Spring Boot pour la partie back-end. Elle ne se limitait pas au développement fonctionnel de l’application, puisqu’elle intégrait aussi des enjeux de tests automatisés, de dockerisation et de pipeline CI/CD (Intégration continue / Déploiement continu).`,
          result:
            `Ce projet est fonctionnel et m’a permis de réaliser un outil testé, maintenable et facilement déployable.
        
        Ce projet me permet de mettre en avant mes compétences en Angular, Java/Spring Boot, Docker & DevOps, Tests et de la CI/CD, mais aussi au niveau des soft skills de mettre en avant mon autonomie et mon esprit d’analyse et de rigueur.`,
          link: '/real/ci-cd-deploy',
        },
        {
          title: 'Utilisation d’Angular pour le portfolio personnel',
          description:
            'Ce <strong>portfolio</strong> a été développé avec <strong>Angular</strong>.',
          result: '',
        },
      ],
      selfCritique: `
      Aujourd’hui, j’estime avoir un <strong>niveau intermédiaire</strong> sur <strong>Angular</strong>. Ayant déjà utilisé ce framework dans des <strong>contextes professionnels et personnels</strong>, je maîtrise les <strong>concepts fondamentaux du framework</strong>, la <strong>structuration des projets</strong>, le <strong>fonctionnement des composants</strong> et l’organisation globale du code avec les <strong>bonnes pratiques</strong>.

      Cette compétence occupe une <strong>place importante dans mon profil</strong>, car Angular correspond à ma vision d’un <strong>front-end structuré et maintenable</strong>. Cette compétence reste cohérente avec mon <strong>métier actuel</strong> et mon <strong>projet professionnel</strong>, même si ce n’est pas aujourd’hui le framework principal que j’utilise en entreprise dans le cadre de mon alternance.

      L’acquisition de cette compétence a été relativement rapide une fois les <strong>bases assimilées</strong> et grâce à un accompagnement par la <strong>documentation</strong> et l’application de ce framework dans <strong>plusieurs projets</strong>. J’aime réaliser mes projets avec <strong>Tailwind</strong> pour le CSS et j’utilise <strong>Firebase</strong> pour gérer le back et les <strong>connexions sécurisées</strong>.
      C’est encore aujourd’hui le <strong>framework que je prends par défaut</strong> pour mes projets front-end.
      Je considère aujourd’hui être à l’aise avec Angular, même si je continue à apprendre et à me perfectionner au fil de mes projets.

      Avec le recul, je considère qu’Angular demande un <strong>investissement initial</strong> sûrement plus important qu’avec d’autres frameworks front-end, mais il offre en contrepartie une <strong>excellente stabilité</strong> et une <strong>forte maintenabilité</strong> par sa conception et son architecture, ce qui correspond à ma vision d’un <strong>développement front-end de qualité</strong>.
      `,
      evolution: `
      Aujourd'hui, je souhaite continuer à <strong>approfondir ma maîtrise d'Angular</strong> en m'intéressant à des sujets plus avancés comme la <strong>gestion de la performance</strong>, la <strong>mise en place de tests automatisés</strong> (avec des agents IA intégrés pour générer les <strong>tests unitaires</strong> et d'<strong>intégration</strong>), ou encore au <strong>développement d'applications mobiles</strong> avec <strong>Angular et Ionic</strong>.
      Dans mes futurs projets personnels, je pense continuer à utiliser Angular, mais je reste ouvert à d'autres <strong>frameworks front-end</strong> comme <strong>Svelte</strong> pour du développement plus rapide et plus léger, ou encore <strong>React</strong> pour sa communauté et son fonctionnement, avec lequel je ne suis pas encore totalement à l'aise.
      `,
      relatedProjects: [
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
      ],
    },
  },
  
  {
    name: 'Java / Spring Boot',
    slug: 'java-spring',
    summary:
      "Framework back-end pour gérer les données, les traitements et les règles de fonctionnement d'une application.",
    icon: '☕',
    level: 90,
    type: 'technical',
    article: {
      definition: `Java est un langage de programmation orienté objet.

Spring Boot est un framework qui simplifie l’utilisation de Java pour le développement d’applications web et d’API. Il permet de mettre en place le routage et les actions du back de la création à l'utilisation de la BDD afin de permettre de créer des API ou des microservices plus facilement.

Spring Boot facilite notamment la création d’API REST en intégrant des modules comme Spring Web pour la gestion des requêtes HTTP et Spring Data JPA pour l’accès aux données.

Ce qui rend Spring Boot intéressant est son faible couplage (le service dépend de l'interface, donc on peut changer l’implémentation sans casser le reste).
      `,
      proofs: [
        {
          title: 'PMT – Project Management Tool',
          description:
            "Réalisation d'une étude de cas pour le master chez ISCOD. Il s'agit d'un back-end avec Spring Boot permettant de gérer des utilisateurs, des projets, des tâches et des notifications via une API REST, avec une base de données PostgreSQL ainsi qu'un front-end avec Angular et Tailwind.",
          result:
            "Résultat : conception d’une API REST, gestion de la persistance des données avec JPA et intégration de tests ainsi qu’un pipeline CI/CD.",
          link: '/real/ci-cd-deploy',
        },
      ],
      selfCritique: `Je considère maîtriser les fondamentaux de Java et de Spring Boot, notamment sur la création d’API REST, la structuration d’un back-end et l’interaction avec une base de données via JPA.

Je ne pense pas être expert mais je suis à l’aise avec la mise en place de fonctionnalités classiques côté serveur. Je manque encore de recul sur des aspects plus avancés comme la sécurité avec Spring Security, l’optimisation des performances ou la mise en place d’architectures plus complexes.
      `,
      evolution: `      Je pense que dans de futurs projets je continuerai à faire du back-end avec Spring Boot car je me suis habitué au framework.
      `,
      relatedProjects: [
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
        {
          label: 'Programmation d’un moteur graphique - Just an Easter game',
          link: '/real/just-an-easter-game',
        }
      ],
    },
  },
  {
    name: 'Docker & DevOps',
    slug: 'docker-devops',
    summary:
      "Outils de déploiement et d'exploitation pour lancer, partager et maintenir une application dans un environnement stable.",
    icon: '🐳',
    level: 75,
    type: 'technical',
    article: {
      definition: `Docker est un outil de conteneurisation qui permet d’exécuter des applications de manière isolée.
     On peut aussi partager des images Docker et les déployer facilement sur différents environnements grâce à Docker Hub.

Le DevOps est un ensemble de pratiques visant à améliorer la collaboration entre les développeurs et les opérateurs (personnes qui s’occupent de faire fonctionner l’application en production), pour automatiser les processus de build, de test et de déploiement.

On utilise Docker pour avoir un même environnement de travail pour tous.

On peut aussi parler de Kubernetes qui est un outil qui permet de gérer automatiquement plusieurs conteneurs (Docker).

En termes de DevOps on peut parler des pipelines CI/CD qui permettent d’automatiser les étapes clés du cycle de vie d’une application, comme les tests, la construction des images et la mise en production.

      `,
      proofs: [
        {
          title: 'PMT – Project Management Tool',
          description:
            "Réalisation d'une étude de cas pour le master chez ISCOD. Il s'agit d'un back-end avec Spring Boot permettant de gérer des utilisateurs, des projets, des tâches et des notifications via une API REST, avec une base de données PostgreSQL ainsi qu'un front-end avec Angular et Tailwind.",
          result:
            "Résultat : conception d’une API REST, gestion de la persistance des données avec JPA et intégration de tests ainsi qu’un pipeline CI/CD.",
          link: '/real/ci-cd-deploy',
        },
      ],
      selfCritique: `Je suis à l’aise sur la mise en place de conteneurs, la création de Dockerfiles et l’utilisation de docker-compose pour orchestrer une application simple.
      `,
      evolution: `Pour l'instant, l'utilisation de Docker est un plus dans mon éventail de technologies maîtrisées, mais je ne l'utiliserai pas dans des projets personnels simples, car je n'en vois l'utilité que dans des équipes de développement ou pour des projets concrets où l'on a besoin de standardiser les environnements et de faciliter le déploiement.
      `,
      relatedProjects: [
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        }
      ],
    },
  },
  {
    name: 'Tests (Jest, Karama & Jasmine, JUnit, H2)',
    slug: 'tests',
    summary:
      "Outils et méthodes de qualité pour vérifier automatiquement qu'une application fonctionne comme prévu.",
    icon: '🧪',
    level: 95,
    type: 'technical',
    article: {
      definition: `
      Pour moi, les <strong>tests</strong> servent à vérifier qu'une application fait bien ce qu'elle est censée faire, mais aussi à éviter de casser quelque chose sans s'en rendre compte quand le projet évolue. Ce n'est pas juste une étape à la fin du développement : c'est une manière de sécuriser le travail au fur et à mesure.

      J'utilise cette compétence à plusieurs niveaux. Les tests unitaires, avec des outils comme <strong>Vitest</strong> ou <strong>Jest</strong>, permettent de vérifier une fonction, un composant ou une logique précise. Les tests end-to-end, avec <strong>Playwright</strong>, vont plus loin : ils rejouent des parcours utilisateur complets, comme une connexion, une création de projet ou une validation de formulaire.

      Avec le temps, j'ai surtout compris que les tests ne remplacent pas la réflexion, mais qu'ils obligent à mieux comprendre ce qu'on développe. Si un comportement est difficile à tester, c'est souvent qu'il mérite d'être clarifié.
      `,
      proofs: [
        {
          title: 'Tests front-end et back-end sur le projet PMT',
          description: `
            Sur l'étude de cas PMT, j'ai mis en place des tests côté front-end et back-end. Côté front, les tests couvraient des parcours importants comme l'inscription, la connexion, la création d'un projet, l'invitation d'un membre ou la création d'une tâche. Côté back-end, les tests permettaient de vérifier la logique serveur et l'accès aux données.
          `,
          result:
            "Résultat : le projet disposait d'une base plus fiable, avec des tests intégrés dans une logique de qualité, de couverture et d'industrialisation.",
          link: '/real/ci-cd-deploy',
        }
      ],
      selfCritique: `
      Je suis à l'aise avec la compréhension d'un test, mais je sais que je peux encore progresser dans les tests unitaires et d'intégration.
      `,
      evolution: `
      Je veux continuer à renforcer cette compétence, car c'est  un bon moyen de sécuriser les parcours critiques dans des applications métier.

      Je souhaite aussi progresser sur la stratégie de test : savoir quoi tester en priorité, jusqu'où aller dans le détail, et comment garder une suite de tests rapide, lisible et fiable. Mon objectif n'est pas seulement d'écrire plus de tests, mais d'écrire des tests qui aident réellement à maintenir le projet dans le temps.
      `,
      relatedProjects: [
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        }
      ],
    },
  },
  {
    name: 'Communication en mode projet',
    slug: 'communication-projet',
    summary:
      "Compétence humaine pour expliquer clairement les besoins, partager l'avancement et coordonner le travail.",
    icon: '💬',
    level: 95,
    type: 'soft',
    article: {
      definition: `
      Pour moi, la <strong>communication en mode projet</strong>, ce n'est pas seulement faire des points d'avancement. C'est surtout réussir à rendre les choses compréhensibles pour les bonnes personnes : expliquer ce qui est fait, ce qui bloque, ce qui reste flou, et parfois reformuler un besoin qui n'est pas encore totalement posé.

      Je l'ai surtout appris sur le terrain. Entre les échanges avec un client en stage, les réunions avec des équipes métier ou les rituels d'équipe chez Weekera, j'ai compris qu'un projet avance mieux quand les informations circulent clairement. Même une bonne solution technique peut perdre beaucoup de valeur si elle est mal expliquée ou mal comprise.
      `,
      proofs: [
        {
          title: "Développeur web front-end chez Monabanq",
          description: `
            Durant la durée de cette alternance, j'ai rapidement compris que s'exprimer, et s'exprimer bien, était essentiel afin de faire avancer un sujet. Il faut savoir adapter son speech en fonction de la bonne personne : entrer dans les détails techniques avec les développeurs pour mieux 

          `,
          result:
            "Résultat : le projet est resté cadré malgré un départ compliqué, et les décisions prises en réunion nous ont servi de fil conducteur pendant la réalisation.",
          link: '/real/iscod-monabanq',
        }
      ],
      selfCritique: `
      J'ai progressé sur cette compétence parce que j'ai été confronté à des contextes où le flou pouvait vite coûter du temps. Aujourd'hui, je suis plus à l'aise pour poser des questions, expliquer ce que je fais et demander une validation quand un point me semble risqué.

      Mon axe d'amélioration, c'est d'être encore plus synthétique. J'ai parfois tendance à vouloir donner trop de contexte pour être sûr d'être compris. C'est utile dans certains cas, mais je dois continuer à apprendre à adapter mon niveau de détail selon la personne en face de moi.
      `,
      evolution: `
      Je veux continuer à développer une communication plus directe et plus utile au projet. Pour moi, ça passe par des comptes rendus plus clairs, des questions mieux préparées et une meilleure capacité à alerter tôt quand un besoin n'est pas assez précis.

      À terme, j'aimerais être capable de faire le lien naturellement entre les profils techniques et les profils métier, sans perdre les détails importants d'un côté comme de l'autre.
      `,
      relatedProjects: [
        {
          label: "Développeur web front-end chez Monabanq",
          link: '/real/iscod-monabanq',
        }
      ],
    },
  },
  
  {
    name: 'Travail en équipe & collaboration',
    slug: 'travail-equipe',
    summary:
      'Compétence humaine pour collaborer, partager les informations utiles et faire avancer un travail commun.',
    icon: '👥',
    level: 95,
    type: 'soft',
    article: {
      definition: `
      Le <strong>travail en équipe</strong>, pour moi, c'est avancer sans rester enfermé dans son propre sujet. Il faut savoir partager l'information, demander de l'aide quand c'est nécessaire, relire le travail des autres, accepter les retours et garder une vision commune du projet.

      J'ai aussi compris qu'une équipe ne fonctionne pas seulement parce que chacun fait sa partie. Elle fonctionne quand les membres arrivent à se coordonner, à prévenir les blocages et à garder une certaine confiance dans la manière de travailler ensemble.
      `,
      proofs: [
        {
          title: 'Travail en binôme sur la refonte du site UPC',
          description: `
            Le projet UPC a été mené avec un autre stagiaire. Nous avons dû nous répartir les tâches, garder une cohérence sur le site et échanger régulièrement avec notre maître de stage pour ne pas avancer chacun dans une direction différente.
          `,
          result:
            "Résultat : cette première expérience m'a appris qu'un projet en binôme demande autant d'organisation que de technique.",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          title: 'Collaboration avec plusieurs pôles sur la plateforme métier',
          description: `
            Sur la plateforme de consultation métier, le travail ne se limitait pas au développement. Il fallait échanger avec les équipes métier, le service informatique et les responsables des différents pôles pour ajuster les fonctionnalités et limiter les incompréhensions.
          `,
          result:
            "Résultat : j'ai appris à intégrer plusieurs points de vue dans un même projet, même quand les attentes n'étaient pas toujours alignées au départ.",
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: 'Travail dans une équipe produit chez Weekera',
          description: `
            Chez Weekera, j'ai travaillé dans une organisation agile avec des sprints, des daily meetings, des reviews et des échanges réguliers autour des User Stories. J'ai aussi participé à des sujets plus transverses autour de la qualité et des tests.
          `,
          result:
            "Résultat : j'ai gagné en méthode dans ma manière de collaborer, notamment sur le partage d'informations et la prise en compte des impacts fonctionnels.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      J'aime être autonome, donc mon principal point de vigilance est de ne pas trop garder un sujet pour moi quand je pense pouvoir le résoudre seul. Dans une équipe, attendre trop longtemps avant de partager un blocage peut faire perdre du temps à tout le monde.

      J'ai progressé sur ce point avec les projets en entreprise, surtout chez Weekera, où les rituels obligent à rendre visibles les difficultés et les avancées. Je dois continuer à garder ce réflexe, même sur des sujets où je me sens à l'aise.
      `,
      evolution: `
      Je veux continuer à devenir plus régulier dans ma manière de collaborer : mieux documenter ce que je fais, donner de la visibilité plus tôt, et ne pas attendre qu'un sujet soit terminé pour en parler.

      Mon objectif est d'être quelqu'un sur qui une équipe peut compter, pas seulement pour produire du code, mais aussi pour fiabiliser le travail collectif.
      `,
      relatedProjects: [
        {
          label: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
  {
    name: 'Adaptabilité & autonomie',
    slug: 'adaptabilite-autonomie',
    summary:
      "Compétence humaine pour s'adapter rapidement, apprendre vite et avancer avec autonomie quand c'est nécessaire.",
    icon: '🧭',
    level: 100,
    type: 'soft',
    article: {
      definition: `
      L'<strong>adaptabilité</strong> et l'<strong>autonomie</strong>, pour moi, vont ensemble. C'est être capable d'arriver dans un contexte nouveau, de comprendre progressivement comment il fonctionne, puis d'avancer sans attendre qu'on me donne toutes les réponses.

      Ce n'est pas travailler seul dans son coin. C'est plutôt savoir chercher, tester, demander au bon moment et ajuster sa manière de faire selon le projet. J'ai souvent eu à apprendre de nouvelles technologies, de nouveaux métiers ou de nouvelles façons de travailler, et c'est une partie de mon profil que je considère comme importante.
      `,
      proofs: [
        {
          title: "Adaptation à un cahier des charges incomplet sur l'UPC",
          description: `
            Sur la refonte du site de l'UPC, le besoin de départ n'était pas totalement fiable. Il a fallu s'adapter au fil des échanges avec le client, reconstruire une direction cohérente et avancer malgré un cadre qui évoluait pendant le stage.
          `,
          result:
            "Résultat : cette expérience m'a appris à rester souple face à un besoin mouvant, tout en gardant une méthode de travail claire.",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          title: 'Adaptation à un contexte métier complexe autour du CRM',
          description: `
            Sur la plateforme de consultation métier, il fallait comprendre à la fois les données du CRM, les droits d'accès, les contraintes de sécurité et les besoins des différents pôles. Le projet demandait donc de s'adapter à un environnement métier sensible et pas uniquement à un sujet technique.
          `,
          result:
            "Résultat : j'ai appris à avancer dans un contexte où la technique devait rester alignée avec des règles métier et des enjeux de confidentialité.",
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: 'Réalisation complète du projet PMT',
          description: `
            Pour l'étude de cas PMT, j'ai dû prendre en charge plusieurs dimensions du projet : conception, front-end Angular, back-end Spring Boot, base de données, tests, Docker, documentation et pipeline CI/CD.
          `,
          result:
            "Résultat : ce projet m'a demandé d'être autonome sur l'organisation du travail et sur l'apprentissage des outils nécessaires pour livrer un ensemble cohérent.",
          link: '/real/ci-cd-deploy',
        },
        {
          title: 'Montée en compétence chez Weekera',
          description: `
            Chez Weekera, je suis arrivé sur un produit existant, avec des technologies et un domaine métier que je ne connaissais pas encore, notamment Svelte, WQL, la paie, la DSN et les tests end-to-end.
          `,
          result:
            "Résultat : j'ai appris à me repérer dans une base de code déjà en place, à comprendre les habitudes d'équipe et à progresser sur des sujets nouveaux sans repartir de zéro.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      L'autonomie est un vrai point fort pour moi, mais elle peut aussi devenir un piège si je reste trop longtemps sur un problème avant de demander un avis. J'ai parfois tendance à vouloir aller au bout seul, surtout quand je pense que la solution est proche.

      Avec l'expérience, je fais davantage la différence entre être autonome et être isolé. Être autonome, ce n'est pas tout résoudre sans aide, c'est savoir avancer intelligemment en utilisant les bonnes ressources au bon moment.
      `,
      evolution: `
      Je veux continuer à garder cette capacité d'adaptation, parce qu'elle m'aide beaucoup dans les environnements techniques qui bougent vite. En revanche, je veux aussi mieux cadrer mes recherches et valider plus tôt mes choix quand un sujet peut avoir un impact sur d'autres personnes.

      Mon objectif est de rester quelqu'un qui apprend vite, tout en étant plus précis dans sa manière de demander, de vérifier et de partager ce qu'il découvre.
      `,
      relatedProjects: [
        {
          label: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
  {
    name: "Esprit d'analyse & rigueur",
    slug: 'analyse-rigueur',
    summary:
      'Compétence humaine pour comprendre un problème, structurer la réflexion et proposer des solutions fiables.',
    icon: '🧠',
    level: 90,
    type: 'soft',
    article: {
      definition: `
      Pour moi, l'<strong>esprit d'analyse</strong> et la <strong>rigueur</strong>, c'est prendre le temps de comprendre un problème avant de chercher à le résoudre. Ça passe par l'analyse du besoin, des contraintes, des risques, mais aussi par une manière de travailler qui limite les erreurs : structurer, tester, relire et documenter quand c'est nécessaire.

      Cette compétence est devenue de plus en plus importante dans mon parcours. Plus les projets sont proches du métier ou de la production, plus je me rends compte qu'un détail mal compris peut avoir des conséquences sur l'utilisateur, sur les données ou sur la maintenabilité du projet.
      `,
      proofs: [
        {
          title: "Analyse d'un cahier des charges incorrect sur le projet UPC",
          description: `
            Sur la refonte du site UPC, le cahier des charges initial ne correspondait pas vraiment au besoin. Nous avons donc dû reprendre l'arborescence, questionner les attentes et reconstruire un cadre de travail plus fiable avec le client.
          `,
          result:
            "Résultat : cette situation m'a appris à ne pas considérer un document comme automatiquement juste, même quand il sert de point de départ officiel.",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          title: 'Analyse des données et des accès sur la plateforme métier',
          description: `
            Sur les outils liés au CRM, la rigueur était importante parce que les données étaient sensibles et que les rôles utilisateurs pouvaient avoir un impact direct sur la confidentialité des informations.
          `,
          result:
            "Résultat : j'ai mieux compris l'importance de vérifier les droits, les flux de données et les conséquences possibles d'une fonctionnalité avant sa mise en place.",
          link: '/real/plateforme-consultation-metier',
        },
        {
          title: `Structuration complète de l'étude de cas PMT`,
          description: `
            Sur PMT, j'ai dû concevoir le modèle de données, préparer les livrables, mettre en place les tests, dockeriser les applications et documenter le processus de déploiement. Le projet demandait une approche assez carrée pour rester cohérent de bout en bout.
          `,
          result:
            "Résultat : j'ai renforcé ma capacité à organiser un projet technique complet et à vérifier sa qualité au-delà du simple développement des fonctionnalités.",
          link: '/real/ci-cd-deploy',
        },
        {
          title: 'Qualité et tests dans un contexte applicatif existant',
          description: `
            Chez Weekera, j'ai travaillé sur du code existant, des corrections de bugs et des sujets de tests. Cela demandait de comprendre les impacts avant de modifier, surtout dans un domaine sensible comme la paie.
          `,
          result:
            "Résultat : cette expérience m'a rendu plus attentif aux effets de bord, aux cas limites et à la qualité globale d'une évolution.",
          link: '/real/applications-rh-paie-weekera',
        },
      ],
      selfCritique: `
      Je suis assez rigoureux dans ma manière de travailler, surtout quand un sujet touche aux données, aux tests ou à la logique métier. J'aime comprendre ce que je fais et éviter de corriger un symptôme sans comprendre la cause.

      Mon point de vigilance, c'est de ne pas passer trop de temps à vouloir tout sécuriser avant d'avancer. La rigueur est utile, mais elle doit rester au service du projet. Je dois donc continuer à trouver le bon équilibre entre analyse, action et validation.
      `,
      evolution: `
      Je veux continuer à renforcer cette compétence en m'appuyant davantage sur des méthodes concrètes : tests automatisés, documentation courte mais utile, critères d'acceptation plus clairs et meilleure anticipation des cas limites.

      Avec le temps, j'aimerais que cette rigueur devienne encore plus naturelle dans mon travail, pas comme une étape lourde en plus, mais comme une façon normale de construire des solutions fiables.
      `,
      relatedProjects: [
        {
          label: "Refonte du site de l'Unité de production culinaire (UPC) du Lycée Jean Mermoz",
          link: '/real/refonte-site-upc-jean-mermoz',
        },
        {
          label: 'Plateforme de consultation métier',
          link: '/real/plateforme-consultation-metier',
        },
        {
          label: 'Intégration, industrialisation et déploiement de logiciel - PMT',
          link: '/real/ci-cd-deploy',
        },
        {
          label: 'Applications RH et paie chez Weekera',
          link: '/real/applications-rh-paie-weekera',
        },
        {
          label: "Pilotage de projet d'ingénierie du logiciel - O'Fit",
          link: '/real/pilotage-projet-ofit',
        },
      ],
    },
  },
  {
    name: "Python",
    slug: 'python',
    summary:
      `Langage informatique qui m'a notamment permis de programmer des jeux vidéo sur le cyberharcèlement.`,
    icon: '🐍',
    level: 90,
    type: 'technical',
    article: {
      definition: `
      Python est un superbe langage informatique que j'ai pu apprendre par nécessité, dans le cadre de la création de visual novel. J'ai utilisé un framework qui a permis de m'aider dans la gestion des packages et streamliner la création des jeux.
      `,
      proofs: [
        {
          title: "Développement d'un jeu vidéo sur le cyberharcèlement - Cybergarde",
          description: `
            Dans le cadre d'une mission avec le collège Louise Michel de Lille, j'ai pu proposer des ateliers autour du cyberharcèlement, comment le reconnaître, les formes qu'il peut prendre, les actions qu'il faut adopter mais aussi les biais qui permettent à ces formes de violence de continuer.
          `,
          result:
            `Le projet fut passionnant, autant d'un point de vue humain que technique. Ce travail m'a permis de mettre à rude épreuve mes compétences en communication, mon travail d'équipe et mon adaptabilité. Il aura fallu que je prenne le rôle de "chef de projet" afin de cadrer la conception du jeu, tout en restant ouvert aux suggestions de ma très jeune équipe. C'était aussi humainement enrichissant, puisque cela m'a permis de comprendre la jeunesse d'aujourd'hui, leurs aspirations et les épreuves qu'ils peuvent rencontrer dans un monde hyper connecté.`,
          link: '/real/cybergarde',
        }
      ],
      selfCritique: `
        Le travail avec Python est simple, et permet de comprendre sans fioritures les bases de la programmation. J'ai hâte d'appliquer ce que j'ai appris dans des projets plus complexes.

      `,
      evolution: `
      Le potentiel de Python reste à être travailler, et je sais que beaucoup de programmes sont possibles en python.
      `,
      relatedProjects: [
        {
          label: "Développement d'un jeu vidéo sur le cyberharcèlement - Cybergarde",
          link: '/real/cybergarde',
        }
      ],
    },
  },
]

