import { Realisation } from '../models/realisation.model'

export const REALISATIONS: Realisation[] = [
  
  
  {
    title: 'Intégration, industrialisation et déploiement de logiciel - PMT',
    slug: 'ci-cd-deploy',
    shortDescription:
      'Étude de cas ISCOD visant à créer une plateforme de gestion de projet collaboratif destinée aux équipes de développement logiciel.',
          externalLink: {
      label: 'Lien github du projet',
      url: 'https://github.com/Astora59/MPMT',
      spotlightTitle: 'Étude de cas ISCOD - PMT',
      spotlightDescription:
        'Pour plus de détails sur ce projet, vous pouvez consulter le repos git du projet.',
    },
    article: {
      presentation:
        `Dans le cadre d’une étude de cas faite durant ma formation chez ISCOD, j’ai travaillé sur PMT (Project Management Tool), une plateforme collaborative de gestion de projet. Le projet avait pour but de concevoir une application capable d’aider une équipe à planifier ses projets et à suivre l’avancement des tâches.

c’est une application que J’ai réalisée en TypeScript avec Angular pour la partie front-end et Java Spring Boot pour la partie back-end. Elle ne se limitait pas au développement fonctionnel de l’application, puisqu’elle intégrait aussi des enjeux de tests automatisés, de dockerisation et de pipeline CI/CD (Intégration continue / Déploiement continu).`,
      objectives:
        `<h3>Objectif principal</h3>L’objectif principal du projet était de créer une application permettant à une équipe de planifier, suivre et faire évoluer un projet de manière collaborative.

Il fallait aussi intégrer les tests, la dockerisation front et back, mettre en place une chaîne d’intégration continue et que tout soit documenté.
<h3>Contexte </h3>Ce projet s’inscrit dans une démarche de preuve des compétences acquises durant l’apprentissage de mon bloc de formation Intégration, industrialisation et déploiement de logiciels au cours de mon Master Expert en Ingénierie du Logiciel.
<h3>Enjeux</h3>Ce projet m’a permis de valider les compétences attendues :

 -Développer les fonctionnalités du logiciel en modélisant un domaine métier, et en intégrant des composants externes afin d’améliorer la qualité du code et faciliter les développements futurs.

 -Automatiser la construction de la solution logicielle en configurant les chaînes de build et l’exécution des tests unitaires, fonctionnels et d’intégration afin de préparer le déploiement continu du logiciel.

 -Industrialiser le développement du logiciel à l’aide d’outils d’automatisation et le documenter en décrivant le processus de déploiement de manière à faire évoluer les logiciels développés et minimiser les erreurs de manipulation par les tiers.
 <h3>Risques</h3>Une mauvaise couverture pouvait entraîner des régressions ou des anomalies non détectées lors des évolutions du projet et une mauvaise configuration du pipeline CI/CD ou des images Docker pouvait bloquer la mise en production ou générer des erreurs difficiles à diagnostiquer.
 `,
      steps:
        `Le projet a commencé par une phase de conception, durant laquelle j’ai identifié les entités principales du système. J’ai travaillé sur les objets clés du domaine, comme les utilisateurs, les projets, les membres, les invitations, les tâches, les historiques de modification et les notifications. Cette étape m’a amené à structurer à la fois un diagramme de classes et un schéma relationnel, en prenant en compte les règles métier, la nullabilité et les contraintes d’unicité.

Une fois la structure définie, j’ai travaillé sur le back-end en Java avec Spring Boot qui expose une API REST permettant de gérer les utilisateurs, les projets, les membres de projet, les invitations, les tâches, l’historique et les notifications. Le back-end repose sur Spring Web, Spring Data JPA, PostgreSQL, ainsi que sur une base H2 pour les tests.

En parallèle, j’ai développé le front-end avec Angular 19, dans un environnement Nx (outil de gestion de workspace en monorepo), avec TypeScript et Tailwind CSS. L’interface permet aujourd’hui de gérer l’inscription, la connexion simple par email, la persistance de session en localStorage, l’affichage d’un dashboard, la création de projets et la création de tâches.

J’ai mis en place des tests côté front et back :

Côté front-end, j’ai mis en place des tests unitaires ainsi que des tests end-to-end avec Karma et Jasmine, capables de couvrir les parcours les plus importants, comme l’inscription, la connexion, la création d’un projet, l’invitation d’un membre, l’attribution d’un rôle, la création et l’assignation d’une tâche, ou encore la consultation de l’historique. 

Côté back-end, des tests Java ont été prévus avec JUnit, Spring Boot Test et H2, avec génération d’un rapport de couverture JaCoCo.

Le projet est organisé de manière claire, avec une séparation entre le back-end, le front-end, la base de données, la documentation et les workflows GitHub Actions. Le front-end et le back-end ont chacun leur Dockerfile, le projet dispose d’un docker-compose.yml, et un pipeline GitHub Actions permet de lancer les tests, de construire les images Docker et de les pousser sur Docker Hub lors d’un push sur la branche principale. Un README détaillé documente également l’installation, le lancement, les variables d’environnement, les tests et le déploiement.`,
      results:
        `Ce projet est fonctionnel et m’a permis de réaliser un outil testé, maintenable et facilement déployable.
        
        Ce projet me permet de mettre en avant mes compétences en Angular, Java/Spring Boot, Docker & DevOps, Tests et de la CI/CD, mais aussi au niveau des soft skills de mettre en avant mon autonomie et mon esprit d’analyse et de rigueur.`,
      future:
        `Ce projet pourrait encore évoluer. Il serait possible d’aller plus loin dans la gestion des droits, dans la sécurité du back-end, dans la supervision du déploiement en intégrant des outils de monitoring, de logs et d’alertes.

Avec des fonds, de la patience et une bonne équipe, il serait possible de faire un outil aussi poussé que Jira en intégrant aussi une IA comme Rovo à partir de ce projet.`
    },
    relatedSkills: [
      {
        label: 'Angular',
        link: 'angular-front',
      },
      {
        label: 'Java / Spring Boot',
        link: 'java-spring',
      },
      {
        label: 'Docker & DevOps',
        link: 'docker-devops',
      },
      {
        label: 'Tests',
        link: 'tests',
      }
      ,
      {
        label: 'Adaptabilité & autonomie',
        link: 'adaptabilite-autonomie',
      },
      {
        label: `esprit d’analyse & rigueur`,
        link: 'analyse-rigueur',
      }
    ],
    relatedParcours: [
      {
        label: 'ISCOD / Monabanq',
        link: 'iscod-monabanq',
      },
    ],
  },
  {
    title: 'Programmation d’un moteur graphique - Just an Easter game',
    slug: 'just-an-easter-game',
    shortDescription:
      'Jeu vidéo réalisé en Java lors d’un compétition de développement de jeux vidéo.',
    externalLink: {
      label: 'Découvrir le jeu',
      url: 'https://github.com/Astora59/justAnEasterGame',
      spotlightTitle: "Jeu vidéo codé en Java",
      spotlightDescription:
        "Il s'agit d'un simple jeu inspiré par Slender man dans le thème de pâques.",
    },
    article: {
      presentation: `
        Quand j'ai commencé à apprendre Java, j'ai été fasciné en retrospect par Minecraft. Le jeu le plus populaire de l'histoire du jeu vidéo avait été codé en Java. Bien entendu, j'avais une vision principalement de développeur concernant Java, alors je me suis dit qu'il était intéressant de coder un jeu vidéo de A à Z en Java, en rejoignant une compétition de programmation de jeux vidéo. 
      `,
      objectives: `
      <h3>Objectif principal</h3>
      Le but principal de ce projet a été d'explorer les mécaniques principales de Java en créant des éléments en utilisant des classes, et de tester JPanel, qui permet d'afficher des images en Java.
      <h3>Contexte </h3>
      Fut une époque où l'horreur sur Internet était tout simplement omniprésente. Ce mouvement a été principalement poussé par les youtubeurs de l'époque, en particulier Pewdiepie et Markiplier. Ces derniers ont permis à de nombreuses personnes de découvrir les jeux d'horreur. On a pu voir à cette époque une explosion de ces jeux faits par des développeurs indépendants, parfois intriguants, parfois très ennuyants, mais toujours fait avec amour et passion. Pour mon premier jeu codé en Java, je m'étais dit qu'il était intéressant de faire écho à cette époque du jeu vidéo qui m'est nostalgique.

      `,
      steps: `
      <h3>Organisation du travail</h3>
      Pour comprendre les bases de la programmation d'un moteur de jeu en Java, il a fallu chercher en profondeur pour comprendre les mécaniques de JPanel, qui n'a pas été une mince affaire étonnamment. En particulier quand l'objectif est de faire un jeu d'horreur.
      <h3>Chronologie de mon parcours sur le projet</h3><div class="real-timeline">
        <article class="real-timeline-item">
          <h4>Conception du moteur graphique</h4>
          <p>J'ai commencé à programmer le comportement de la fenêtre principale de l'application, ainsi que du moteur graphique et de la distance d'affichage.</p>
        </article>

        <article class="real-timeline-item">
          <h4>Création et animation des sprites</h4>
          <p>J'ai créé les sprites et les animer. J'ai créé une classe joueur et monstre, et est défini le comportement de chacun d'entre eux avec un écouteur d'événements qui affiche un sprite spécifique en fonction de la touche pressée.</p>
        </article>

        <article class="real-timeline-item">
          <h4>Définition de la carte</h4>
          <p>Pour la création de la carte, j'ai utilisé un tileset qui me permet d'afficher une carte cadrillée. J'ai aussi travaillé sur la collision de l'environnement.</p>
          
        </article>

        <article class="real-timeline-item">
          <h4>Placement des objets et du son</h4>
          <p>Comme dans le jeu slenderman, il y a 8 oeufs à trouver à travers la carte. J'ai défini la musique du jeu, et l'effet sonore quand on récupère un objet.</p>
        </article>

        <article class="real-timeline-item">
          <h4>Création du comportement des monstres</h4>
          <p>Le comportement des monstres a beaucoup changé par rapport au jeu slenderman. Ils sont maintenant plus agressifs et peuvent encercler le joueur s'il ne fait pas attention à ses déplacements.</p>
        </article>
      </div>
      `,
      results: `Je suis personnellement super fier de ce projet, c'est un programme simple mais qui a eu des retours positifs, dans un langage dont je ne connaissais pas les specificités. Dans un sens, ça m'a permis de développer non seulement de meilleurs connaissances en Java, mais aussi en game design. Je comprends mieux les systèmes dans lequel s'inscrivent de simples jeux qui ont bercé mon enfance et je trouve ça génial. `,
      future: `Je me suis beaucoup amusé sur ce projet, et c'est une évidence que je recommencerai à coder des jeux vidéo pour challenger ma vision de la programmation au sens large..`,
    },
    relatedSkills: [
      {
        label: 'Java / Spring Boot',
        link: 'svelte',
      },
      {
        label: 'Docker & DevOps',
        link: 'docker-devops',
      },
      {
        label: 'Tests',
        link: 'tests',
      },{
        label: 'Communication en mode projet',
        link: 'communication-projet',
      },
      {
        label: 'Travail en équipe & collaboration',
        link: 'travail-equipe',
      },
      {
        label: "esprit d’analyse & rigueur",
        link: 'analyse-rigueur',
      },
      {
        label: 'Adaptabilité & autonomie',
        link: 'adaptabilite-autonomie',
      }
    ],
    relatedParcours: [
      {
        label: 'Étape 5 - ISCOD / Weekera',
        link: 'iscod-weekera',
      },
    ],
  },
  {
    title: `Développement d'un jeu vidéo sur le cyberharcèlement - Cybergarde`,
    slug: 'cybergarde',
    shortDescription:
      'Jeu vidéo réalisé en Python (avec le framework ren’py) lors de cours contre le cyberhacèlement.',
    externalLink: {
      label: 'Découvrir le jeu',
      url: 'https://github.com/Astora59/Cybergarde-part-one',
      spotlightTitle: "Jeu vidéo codé en Python",
      spotlightDescription:
        "Il s'agit d'un simple jeu en partenariat avec les collégiens de l'établissement Louise MICHEL.",
    },
    article: {
      presentation: `
        Dans le cadre d'une mission avec le collège Louise Michel de Lille, j'ai pu proposer des ateliers autour du cyberharcèlement, comment le reconnaître, les formes qu'il peut prendre, les actions qu'il faut adopter mais aussi les biais qui permettent à ces formes de violence de continuer.
      `,
      objectives: `
      <h3>Objectif principal</h3>
      Le but principal a été de mettre les joueurs au coeur de scénario qui implique du cyberharcèlement. Ils devront ensuite faire les bons choix, afin d'obtenir la meilleure fin possible. Les jeux explorent les méthodes des cyberharceleurs, et les manières de désamorcer ces situations.

      `,
      steps: `
      <h3>Organisation du travail</h3>
      Le développement de ces jeux s'est fait par itération. J'apportais les outils et les connaissances nécessaires pour comprendre le cyberharcèlement et la composition d'une histoire. Les jeunes s'occupaient ensuite de concevoir l'histoire, et les choix possibles que le joueur pourrait prendre.
      <h3>Chronologie de mon parcours sur le projet</h3><div class="real-timeline">
        <article class="real-timeline-item">
          <h4>Apprentissage du cyberharcèlement</h4>
          <p>J'apprenais aux collégiens le cyberharcèlement et les formes qu'il peut prendre.</p>
        </article>

        <article class="real-timeline-item">
          <h4>Création des personnages, de l'histoire et des sprites</h4>
          <p>Ensemble, le groupe et moi réfléchissaient à la composition de l'histoire, ainsi que de la composition des personnages et des sprites.</p>
        </article>

        <article class="real-timeline-item">
          <h4>Définition de la structure du jeu</h4>
          <p>Un jeu de type "visual novel" peut vite devenir un enfer de choix. J'ai donc commencé à travailler sur la structure du jeu.</p>
          
        </article>

        <article class="real-timeline-item">
          <h4>Retour auprès des jeunes</h4>
          <p>Après une petite démo du jeu en suivant les consignes des collégiens, ces derniers me proposent les modifications possibles à apporter au jeu.</p>
        </article>

        <article class="real-timeline-item">
          <h4>Programmation de l'entiérète du jeu</h4>
          <p>Le plus important dans ce type de projet, c'est de programmer en gardant un point de vue macro de l'ensemble du projet. Un écart peut vite arriver scénaristiquement, et le joueur peut constater rapidement ces erreurs. De plus, il a fallu programmer les routes, qui gardent en mémoire différentes variables qui correspondent aux choix. Afin de rendre le projet dynamique, je me suis permis de programmer certains effets visuels pour améliorer l'immersion du jeu.</p>
        </article>
      </div>
      `,
      results: `Ce projet fut passionnant, autant d'un point de vue humain que technique. Ce travail m'a permis de mettre à rude épreuve mes compétences en communication, mon travail d'équipe et mon adaptabilité. Il aura fallu que je prenne le rôle de "chef de projet" afin de cadrer la conception du jeu, tout en restant ouvert aux suggestions de ma très jeune équipe. C'était aussi humainement enrichissant, puisque cela m'a permis de comprendre la jeunesse d'aujourd'hui, leurs aspirations et les épreuves qu'ils peuvent rencontrer dans un monde hyper connecté.`,
      future: `J'ai réfléchi à plusieurs nouvelles mécaniques à implémenter si je devais refaire un jeu vidéo de ce type, et je compte bien mettre Python au service de mes futurs projets.`,
    },
    relatedSkills: [
      {
        label: 'Python',
        link: 'python',
      }
    ],
    relatedParcours: [
      {
        label: 'Étape 5 - ISCOD / Vegacy',
        link: 'iscod-vegacy',
      },
    ],
  },
]






