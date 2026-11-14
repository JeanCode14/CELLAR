/**
 * Textes du site en français (langue de référence).
 * Les autres langues reprennent exactement la même structure : voir en.ts, de.ts, es.ts, it.ts.
 */
const fr = {
  meta: {
    "/": "CYTOVEX — Science, engineered digitally.",
    "/solutions": "Nos solutions — CYTOVEX",
    "/cellar": "CELLAR — Cryoconservation et lignées cellulaires | CYTOVEX",
    "/vision": "Notre vision — CYTOVEX",
    "/support": "Support — CYTOVEX",
    "/contact": "Contact — CYTOVEX",
    "/mentions-legales": "Mentions légales — CYTOVEX",
    "/confidentialite": "Politique de confidentialité — CYTOVEX",
    description: "CYTOVEX, éditeur de solutions logicielles pour les sciences du vivant. Premier logiciel : CELLAR.",
  },
  nav: {
    home: "Accueil",
    solutions: "Nos solutions",
    cellar: "CELLAR",
    vision: "Notre vision",
    support: "Support",
    contact: "Contact",
    contactCta: "Nous contacter",
    homeLabel: "CYTOVEX, accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    language: "Langue du site",
    themeDark: "Passer en mode sombre",
    themeLight: "Passer en mode clair",
  },
  status: {
    test: "En phase de test",
    disponible: "Disponible",
    preparation: "En préparation",
  },
  apps: {
    cellar: {
      domain: "Cryoconservation et lignées cellulaires",
      description:
        "Le registre des cuves d'azote et congélateurs : chaque cellule, échantillon ou réactif localisé à la position près, avec son historique.",
    },
    stock: {
      domain: "Stocks et consommables",
      description: "Suivre les quantités, les lots et les dates de péremption, et anticiper les commandes.",
    },
    equip: {
      domain: "Équipements et maintenance",
      description: "Recenser les appareils du laboratoire, planifier les maintenances et garder leur historique.",
    },
    data: {
      domain: "Données scientifiques",
      description: "Réunir, suivre et valoriser les données produites par le laboratoire.",
    },
  },
  network: {
    title: "CYTOVEX au centre, relié à ses logiciels : CELLAR, puis STOCK, EQUIP et DATA en préparation.",
    discover: "Découvrir",
  },
  marquee: [
    "Lignées cellulaires",
    "Cuves d'azote −196 °C",
    "Congélateurs −80 °C",
    "Échantillons biologiques",
    "Réactifs",
    "Stocks et consommables",
    "Équipements",
    "Données scientifiques",
    "Traçabilité",
  ],
  footer: {
    tagline: "Éditeur de solutions logicielles pour les sciences du vivant.",
    solutions: "Solutions",
    company: "Entreprise",
    help: "Aide",
    faq: "Questions fréquentes",
    rights: "Tous droits réservés.",
    legal: "Mentions légales",
    privacy: "Confidentialité",
  },
  notFound: {
    kicker: "Erreur 404",
    title: "Cette page n'existe pas.",
    text: "Elle a peut-être été déplacée. Revenez à l'accueil pour continuer.",
    back: "Retour à l'accueil",
  },
  home: {
    title1: "Des solutions numériques conçues pour ",
    titleAccent: "les laboratoires",
    title2: ".",
    lead: "CYTOVEX édite des logiciels pour les sciences du vivant : des outils modernes et fiables pour gérer les échantillons, les stocks, les équipements et les données.",
    ctaCellar: "Découvrir CELLAR",
    ctaContact: "Nous contacter",
    aboutTitle: "Mettre la technologie au service de la recherche.",
    about1:
      "Dans beaucoup de laboratoires, les échantillons, les stocks et les équipements se gèrent encore avec des cahiers et des tableurs. Les informations se perdent, la traçabilité dépend de la mémoire de l'équipe.",
    about2:
      "CYTOVEX conçoit des outils qui simplifient ces tâches, renforcent la traçabilité et facilitent le travail des chercheurs, des techniciens et des responsables de laboratoire.",
    rangeTitle: "Un premier logiciel, une gamme en construction.",
    rangeAll: "Voir toutes les solutions",
    seeCellar: "Voir CELLAR",
    valuesTitle: "Ce qui guide nos logiciels.",
    values: [
      { name: "Rigueur scientifique", text: "Des outils construits à partir des pratiques réelles de la paillasse." },
      { name: "Fiabilité", text: "Chaque donnée enregistrée reste exacte, datée et retrouvable." },
      { name: "Simplicité", text: "Une interface que l'on comprend sans formation de plusieurs jours." },
      { name: "Innovation", text: "Le numérique là où il fait gagner du temps, pas ailleurs." },
      { name: "Sécurité", text: "Des droits par utilisateur et un historique de chaque action." },
    ],
    ctaTitle: "CELLAR est testé en conditions réelles.",
    ctaText: "Vous souhaitez l'essayer dans votre laboratoire ? Parlons-en.",
  },
  solutions: {
    kicker: "Nos solutions",
    title: "Un logiciel par besoin du laboratoire.",
    lead: "CYTOVEX est la marque mère. Chaque logiciel a son nom et sa fonction, et tous partagent la même ergonomie.",
    discoverCellar: "Découvrir CELLAR",
    workingNames: "STOCK, EQUIP et DATA sont des noms de travail, susceptibles d'évoluer.",
    commonTitle: "Un socle commun à tous les logiciels.",
    common: [
      { title: "Une navigation commune", text: "Qui sait utiliser CELLAR retrouve ses repères dans les logiciels suivants." },
      { title: "Des droits cohérents", text: "Une authentification et une gestion des droits partagées quand les applications sont réunies." },
      { title: "Une couleur par logiciel", text: "Chaque logiciel a son icône et sa couleur, dans le même langage graphique." },
      { title: "Versions claire et sombre", text: "Chaque interface existe en mode clair et en mode nuit." },
    ],
  },
  cellar: {
    kicker: "Le premier logiciel CYTOVEX",
    title1: "Chaque échantillon congelé, ",
    titleAccent: "retrouvé",
    title2: " en quelques secondes.",
    lead: "CELLAR (Cell Entry, Location and Archive Register) est le registre numérique de vos cuves d'azote liquide et congélateurs : cellules, échantillons et réactifs localisés à la position près.",
    seeApp: "Voir l'application",
    logoAlt: "Logo CELLAR, Cryogenic Cell Storage",
    liquidNitrogen: "Azote liquide",
    freezer: "Congélateur",
    actionTitle: "CELLAR en action.",
    actionLead: "Quatre moments du quotidien, filmés dans l'application.",
    problemTitle: "La cryoconservation mérite mieux qu'un cahier.",
    problemLead: "Dans beaucoup de laboratoires, retrouver un échantillon congelé repose encore sur la mémoire de l'équipe.",
    problems: [
      { title: "Des cahiers qui s'égarent", text: "Inventaires papier, étiquettes effacées par le froid, tableurs jamais à jour." },
      { title: "Des tubes introuvables", text: "Plusieurs boîtes à fouiller pour un seul cryotube, parfois sans succès." },
      { title: "Du froid qui s'échappe", text: "Chaque minute porte ouverte expose les échantillons et l'utilisateur." },
    ],
    levelsTitle: "Du stockage au tube, en cinq niveaux.",
    levelsLead: "CELLAR reproduit fidèlement l'organisation physique de vos équipements.",
    levels: [
      { title: "Stockage", text: "Cuve d'azote, congélateur −80 °C ou −20 °C" },
      { title: "Rack", text: "Les étages et canisters de chaque équipement" },
      { title: "Boîte", text: "Boîtes 9×9 ou 10×10, numérotées" },
      { title: "Position", text: "La case exacte du tube" },
      { title: "Échantillon", text: "Contenu, passage, date, responsable" },
    ],
    demoTitle: "Fini la chasse au tube à −196 °C.",
    demoLead:
      "Moins de temps porte ouverte, moins de risques pour vos échantillons. Voici une boîte de cuve d'azote telle qu'elle apparaît dans CELLAR, en mode sombre : cliquez sur une ampoule.",
    featuresTitle: "Pensé par et pour le laboratoire.",
    features: [
      { title: "Localisation à la position près", text: "Stockage, rack, boîte et case : l'emplacement exact de chaque tube." },
      { title: "Tous vos froids réunis", text: "Cuves d'azote et congélateurs dans un même registre, organisés comme dans la réalité." },
      { title: "Traçabilité complète", text: "Entrées, sorties et décongélations restent archivées." },
      { title: "Recherche instantanée", text: "Un nom de lignée, un réactif, une date : le résultat apparaît avec sa localisation." },
      { title: "Échantillons mieux protégés", text: "Savoir où chercher avant d'ouvrir, c'est moins d'exposition au réchauffement." },
      { title: "Pensé pour la paillasse", text: "Une interface visuelle qui reproduit les boîtes que vous manipulez." },
    ],
    compareCaption: "Comparaison entre un cahier ou un tableur et CELLAR",
    compareNeed: "Ce dont le laboratoire a besoin",
    comparePaper: "Cahier ou tableur",
    compareRows: [
      "Emplacement exact de chaque tube",
      "Recherche en quelques secondes",
      "Historique des entrées et sorties",
      "Vue visuelle des boîtes",
      "Registre partagé par l'équipe",
    ],
    yes: "Oui",
    no: "Non",
    loaderTitle: "L'écran de démarrage de CELLAR.",
    loaderLead: "Pendant que l'application lit vos cuves et charge vos racks, l'emblème CELLAR se forme dans le givre.",
    loaderHint: "Utilisez « Rejouer » pour revoir l'animation.",
    loaderFrame: "Écran de démarrage animé de CELLAR",
    roadmapTitle: "Où en est CELLAR.",
    roadmapLead: "L'application est testée en conditions réelles avant sa commercialisation.",
    roadmapCta: "Participer aux essais",
    roadmap: ["Conception", "Développement", "Phase de test en laboratoire", "Commercialisation"],
    roadmapState: { done: "Terminé", current: "En cours", next: "À venir" },
  },
  clips: {
    label: "Extraits de CELLAR",
    note: "Captures de l'application réelle, en accéléré.",
    items: [
      { title: "Visualiser ses cuves", text: "Occupation, places libres et activité récente de chaque cuve et congélateur." },
      { title: "Enregistrer une ampoule", text: "Lignée, passage, date et responsable : l'ampoule prend sa place dans la boîte." },
      { title: "Sortir et tracer", text: "Chaque sortie est datée et motivée, puis conservée dans l'historique." },
      { title: "Piloter le laboratoire", text: "Alertes, niveau d'azote, tableau de bord et droits de chaque utilisateur." },
    ],
  },
  box: {
    search: "Rechercher (nom, projet, milieu, notes…)",
    synced: "synchronisé",
    path: "Cuves › Cuve azote 1 › Rack 1 › Boîte 1",
    box: "Boîte 1",
    toolbar: ["Ajouter", "Sortir", "Déplacer", "Modifier", "Copier"],
    occupied: "occupée",
    free: "libres",
    cells: "Cellules",
    auto: "Démonstration automatique. ",
    hint: "Cliquez sur une ampoule pour afficher son détail.",
    details: "Détails de l'ampoule",
    position: "Position",
    free1: "libre",
    fields: ["Type d'élément", "Nom / lignée", "Passage", "Date de congélation", "Responsable", "Milieu de congélation", "Projet"],
    projects: ["Transfection", "Banque de travail", "Banque maîtresse", "Criblage", "Différenciation"],
    fbs: "SVF",
    primaryFibro: "Fibroblastes primaires",
  },
  vision: {
    kicker: "Notre vision",
    title1: "Les bons outils numériques pour ",
    titleAccent: "mieux maîtriser la science",
    title2: ".",
    lead: "CYTOVEX est un éditeur de solutions logicielles dédié aux sciences du vivant. Nous concevons des outils modernes, intuitifs et fiables pour accompagner les laboratoires au quotidien.",
    missionLabel: "Notre mission",
    mission: "Rendre les activités scientifiques plus simples, plus fiables et mieux maîtrisées grâce au numérique.",
    ambitionLabel: "Notre ambition",
    ambition: "Devenir un éditeur de référence pour les outils numériques des laboratoires.",
    journeyTitle: "Du cahier de laboratoire à une gamme complète.",
    journey: [
      { when: "Hier", title: "Cahiers et tableurs", text: "Les informations se dispersent, les étiquettes s'effacent, la traçabilité dépend de la mémoire de l'équipe." },
      { when: "Aujourd'hui", title: "CELLAR", text: "Un premier logiciel pour la cryoconservation : chaque ampoule a une entrée, un emplacement et une archive." },
      { when: "Demain", title: "La gamme CYTOVEX", text: "Stocks, équipements, données : des logiciels qui partagent la même ergonomie et les mêmes droits." },
    ],
    valuesTitle: "Cinq engagements, dans chaque logiciel.",
    valuesLabel: "Nos engagements",
    of: "sur",
    values: [
      {
        name: "Rigueur scientifique",
        short: "Partir de la paillasse.",
        text: "Nos logiciels partent des pratiques réelles des laboratoires : leur vocabulaire, leurs équipements, leurs contraintes. Une cuve d'azote se range en racks, en boîtes et en positions, pas en lignes de tableur.",
      },
      {
        name: "Fiabilité",
        short: "Une donnée juste, des années plus tard.",
        text: "Une information enregistrée doit rester exacte, datée et retrouvable. Chaque entrée, chaque sortie, chaque modification est conservée dans l'historique.",
      },
      {
        name: "Simplicité",
        short: "Un outil qu'on adopte.",
        text: "Un logiciel utile est un logiciel qu'on utilise. L'interface doit se comprendre d'elle-même, sans formation de plusieurs jours.",
      },
      {
        name: "Innovation",
        short: "Le numérique là où il compte.",
        text: "Nous utilisons la technologie là où elle fait gagner du temps ou de la sécurité aux équipes, sans promesses exagérées.",
      },
      {
        name: "Sécurité",
        short: "Des droits clairs, des données protégées.",
        text: "Chaque utilisateur a ses droits, définis par un administrateur, et chaque action est tracée dans l'historique.",
      },
    ],
    identityTitle: "Une seule identité, plusieurs logiciels.",
    rules: [
      "Une identité commune sur les sites, les applications, les documents et les présentations.",
      "Une icône et une couleur propres à chaque logiciel, dans le même langage graphique.",
      "Des versions claire et sombre pour chaque interface.",
      "Une navigation identique : qui connaît CELLAR retrouve ses repères partout.",
    ],
    toneTitle: "Notre façon de parler aux laboratoires.",
    tone: [
      ["Professionnels", "sans être froids"],
      ["Scientifiques", "sans être inutilement complexes"],
      ["Innovants", "sans promesses exagérées"],
      ["Accessibles", "aux chercheurs, techniciens et responsables"],
    ],
    ctaTitle: "Construisons ensemble les outils de votre laboratoire.",
    ctaContact: "Nous contacter",
    ctaSolutions: "Voir nos solutions",
  },
  support: {
    kicker: "Support",
    title: "Nous vous accompagnons.",
    lead: "Documentation, assistance et réponses aux questions les plus fréquentes.",
    docTitle: "Documentation",
    docText: "Le guide d'utilisation de CELLAR sera publié ici à la fin de la phase de test.",
    docStatus: "En préparation",
    helpTitle: "Assistance",
    helpText: "Un problème, une question sur votre installation ? Décrivez-le, nous revenons vers vous.",
    helpCta: "Contacter l'assistance",
    ideaTitle: "Suggestions",
    ideaText: "Une idée d'amélioration pour CELLAR ou un besoin pour un futur logiciel ? Elle nous intéresse.",
    ideaCta: "Proposer une idée",
    faqTitle: "Questions fréquentes.",
    faq: [
      {
        q: "CELLAR est-il déjà disponible ?",
        a: "CELLAR est en phase de test en conditions réelles. Les laboratoires intéressés peuvent nous contacter pour participer aux essais.",
      },
      {
        q: "Quels équipements CELLAR prend-il en charge ?",
        a: "Les cuves d'azote liquide (phase liquide ou vapeur) et les congélateurs −80 °C et −20 °C, avec leurs racks, canisters et boîtes 9×9 ou 10×10.",
      },
      {
        q: "Plusieurs personnes peuvent-elles utiliser CELLAR ?",
        a: "Oui. Chaque utilisateur a son compte et ses droits, définis par un administrateur, et chaque action est enregistrée dans l'historique.",
      },
      { q: "Peut-on exporter l'inventaire ?", a: "Oui, l'inventaire et les sorties d'ampoules s'exportent en fichier Excel." },
      {
        q: "L'interface existe-t-elle en mode sombre ?",
        a: "Oui, comme toutes les interfaces CYTOVEX, CELLAR propose un mode clair et un mode sombre.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Parlons de votre laboratoire.",
    lead: "Une démonstration de CELLAR, une participation aux essais ou une question : écrivez-nous.",
    intro:
      "Dites-nous qui vous êtes et ce que vous stockez : cuves, congélateurs, nombre d'utilisateurs. Nous vous répondons avec une proposition adaptée.",
    byEmail: "Par e-mail :",
    name: "Nom et prénom",
    org: "Laboratoire ou organisme",
    email: "E-mail professionnel",
    subject: "Objet",
    message: "Message",
    subjects: ["Découvrir CELLAR", "Participer aux essais", "Assistance", "Partenariat", "Autre demande"],
    send: "Envoyer le message",
    opened: "Votre messagerie s'ouvre avec le message prêt à envoyer.",
    inactive: "Le formulaire n'est pas encore relié à une adresse de réception.",
    mailName: "Nom",
    mailOrg: "Laboratoire / organisme",
    mailEmail: "E-mail",
    notice: "Les informations saisies servent uniquement à répondre à votre demande. Elles ne sont ni enregistrées par ce site, ni transmises à des tiers.",
    noticeLink: "Politique de confidentialité",
  },
  legal: {
    "kicker": "Informations légales",
    "title": "Mentions légales",
    "lead": "Informations sur l'éditeur et l'hébergeur de ce site, conformément à la loi pour la confiance dans l'économie numérique (LCEN).",
    "editorTitle": "Éditeur du site",
    "name": "Dénomination",
    "form": "Forme juridique",
    "capital": "Capital social",
    "address": "Siège social",
    "registration": "Immatriculation",
    "vat": "TVA intracommunautaire",
    "email": "Contact",
    "pending": "En cours d'immatriculation",
    "toCome": "À venir",
    "directorTitle": "Directeur de la publication",
    "hostTitle": "Hébergement",
    "phone": "Téléphone",
    "ipTitle": "Propriété intellectuelle",
    "ipText": "Les marques CYTOVEX et CELLAR, leurs logos, ainsi que les textes, images, vidéos et animations de ce site sont la propriété de leur titulaire. Toute reproduction, totale ou partielle, sans autorisation écrite préalable est interdite.",
    "updated": "Dernière mise à jour :"
  },
  privacy: {
    "kicker": "Données personnelles",
    "title": "Politique de confidentialité",
    "lead": "Ce site collecte le moins de données possible. Voici ce qui est traité, pourquoi, et comment exercer vos droits.",
    "sections": [
      {
        "title": "Responsable du traitement",
        "paras": [
          "CYTOVEX, éditeur de ce site. Les coordonnées complètes figurent dans les mentions légales."
        ]
      },
      {
        "title": "Formulaire de contact",
        "paras": [
          "Le formulaire prépare un e-mail dans votre messagerie : vous choisissez de l'envoyer ou non. Ce site n'enregistre ni ne conserve les informations saisies (nom, laboratoire, adresse e-mail, objet, message).",
          "Les e-mails reçus servent uniquement à répondre à votre demande, sur la base de notre intérêt légitime à traiter les demandes qui nous sont adressées. Ils sont conservés au plus trois ans après le dernier échange, puis supprimés."
        ]
      },
      {
        "title": "Préférences d'affichage",
        "paras": [
          "Votre navigateur mémorise la langue et le mode clair ou sombre que vous choisissez, afin de les retrouver à votre prochaine visite. Ces informations restent sur votre appareil, ne nous sont jamais transmises et ne servent à aucun suivi. Vous pouvez les effacer à tout moment dans les réglages de votre navigateur."
        ]
      },
      {
        "title": "Mesure d'audience et cookies",
        "paras": [
          "Ce site n'utilise aucun cookie publicitaire, aucun outil de statistiques et aucun bouton de réseau social. Les polices de caractères sont hébergées avec le site : aucune donnée n'est envoyée à un service tiers lors de votre visite."
        ]
      },
      {
        "title": "Hébergement",
        "paras": [
          "Le site est hébergé par GitHub Pages (GitHub, Inc.). Comme tout hébergeur, GitHub peut enregistrer des données techniques de connexion, comme l'adresse IP, pour assurer la sécurité du service. Ces données sont traitées selon la déclaration de confidentialité de GitHub."
        ]
      },
      {
        "title": "Vos droits",
        "paras": [
          "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition sur vos données. Pour les exercer, écrivez-nous à l'adresse indiquée ci-dessous.",
          "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (cnil.fr)."
        ]
      }
    ],
    "contactTitle": "Nous écrire",
    "emailPending": "L'adresse e-mail de contact sera publiée ici prochainement.",
    "githubPolicy": "Déclaration de confidentialité de GitHub",
    "updated": "Dernière mise à jour :"
  },
};

/** Structure commune à toutes les langues (les textes peuvent varier, pas les clés). */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;
export type Messages = Widen<typeof fr>;
export default fr as Messages;
