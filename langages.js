/* ============================================================
   i18n.js — Système de traduction FR / EN
   ============================================================ */

/* ---- Dictionnaires ---- */
const TRANSLATIONS = {

  fr: {
    /* Navigation */
    'nav.accueil':     'Accueil',
    'nav.profil':      'Mon Profil',
    'nav.projets':     'Projets',
    'nav.veille':      'Veille Technologique',
    'nav.competences': 'Compétences',
    'nav.contact':     'Contact',

    /* Accueil */
    'accueil.modeSombre': 'Mode sombre',
    'accueil.modeClair':  'Mode clair',
    'accueil.titre':      'Technicien Réseau',

    /* Profil */
    'profil.apropos':   'À propos',
    'profil.bio':       "Enchanté, je me présente, Quentin Raizonville : Jeune technicien réseau curieux et déterminé, je cherche aujourd'hui à étendre mon arsenal de connaissances, que ce soit en cybersécurité, langages informatiques ou encore en systèmes d'exploitations. Actuellement apprenti en BTS Services Informatiques aux Organisations option SISR chez Nexa Digital School à Paris, je travail avec patience et rigueur afin de répondre à vos attentes.",
    'profil.cv':        'CV',
    'profil.cvDownload':'⬇ Télécharger le CV',
    'profil.interets':  "Centres d'intérêts",
    'profil.icard.code.titre':   'Code',
    'profil.icard.code.desc':    "Programmer représente pour moi une série de challenges que j'aime surmonter.",
    'profil.icard.echecs.titre': 'Échecs',
    'profil.icard.echecs.desc':  "Jouer aux échecs me permet de développer mon sens de l'analyse, et surtout de réfléchir avant d'agir.",
    'profil.icard.jv.titre':     'Jeux vidéo',
    'profil.icard.jv.desc':      "En tant que coach amateur en jeux d'équipes et de stratégie, j'ai appris à faire valoir mon opinion et celles des autres, combattant ainsi ma timidité.",

    /* Projets */
    'projets.consulter': 'Consulter',
    'projets.avec':      'Avec :',
    'projets.wip':       'En cours de développement',
    'projets.p1.titre':  'Sécuriser un domaine avec PingCastle',
    'projets.p1.desc':   "Outil d'audit de sécurité, PingCastle est un logiciel d'analyse de données dans un domaine qui va nous permettre de renforcer la sécurité d'une infrastructure sous Windows.",
    'projets.p2.titre':  "Mise en place d'un serveur Samba",
    'projets.p2.desc':   "Création et gestion d'une infrastructure contenant : Serveur AD DS et DHCP ; Serveur de partage Samba ; Page Web ; Serveur de sauvegarde de données ; Espace Client ; routeur et pare-feu PfSense.",
    'projets.p3.titre':  'Compotesteur équipe de 3/6 joueurs pour le jeu Wakfu',
    'projets.p3.desc':   'Site accompagné d\'un programme qui test des compositions de personnage pour des équipes de 3 ou 6 joueurs pour le jeu Wakfu',

    /* E5 */
    'e5.download': '⬇ Télécharger le tableau de synthèse',

    /* Veille */
    'veille.lire':    'Lire l\'article ↗',
    'veille.v1.titre': "L'état français banni Microsoft et choisit Libre",
    'veille.v1.desc':  "Afin de ne plus dépendre des règles imposées par les États-Unis, l'État français décide, pour sécuriser l'impôt français, de se séparer du système Microsoft et le remplace par un autre logiciel\u00a0: Libre.",
    'veille.v2.titre': 'La France, championne de la fuite de données en 2026',
    'veille.v2.desc':  "Depuis janvier 2026, la France subit une vague de piratages qui met en péril plus de 200 millions de données personnelles des citoyens. Les secteurs de la médecine et de la finance sont les plus exposés.",
    'veille.v3.titre': "Le manque de réactivité de l'ANSSI",
    'veille.v3.desc':  "Face à la recrudescence des attaques informatiques touchant un nombre toujours plus élevé de services publics et de ministères, l'Agence nationale de la sécurité des systèmes d'information peine à prouver sa capacité d'action.",

    /* Compétences — sous-titres */
    'comp.sub.programmation':  'Programmation',
    'comp.sub.domaine':        'Contrôleur de domaine',
    'comp.sub.editionWeb':     'Édition de page internet',
    'comp.sub.simReseau':      'Simulation de Réseaux',
    'comp.sub.os':             "Système d'exploitation",
    'comp.sub.virtualisation': 'Virtualisation',
    'comp.sub.audit':          'Audit de sécurité',
    'comp.sub.parefeu':        'Pare-Feux',
    'comp.sub.automatisation': 'Automatisation',
    'comp.sub.supervision':    'Supervision',
    'comp.sub.editeurCode':    'Éditeur de code',
    'comp.sub.analyse':        'Analyse de données',

    /* Compétences — descriptions */
    'comp.desc.c':            "Programmation et réseau sont étroitement liés dans le domaine du numérique. Avoir des connaissances en développement me permet de mieux coordonner mes actions en fonction des besoins.",
    'comp.desc.ad':           "L'Active Directory sous Windows est un service qui va permettre de gérer les ressources d'un serveur en attribuant aux utilisateurs une hiérarchie et des conditions d'accès dans un domaine.",
    'comp.desc.css':          "Le langage CSS est une extension de HTML pour accompagner ce dernier dans la création de pages web. Il permet de créer des effets visuels et animations pour donner une réelle personnalité aux fichiers HTML.",
    'comp.desc.cisco':        "La simulation de réseaux permet de définir en détail l'architecture numérique à mettre en place et de la tester avant de l'appliquer en physique.",
    'comp.desc.html':         "HTML est un indispensable pour configurer une page internet, notamment pour la création de ce portfolio.",
    'comp.desc.linux':        "Linux est un système ouvert qui permet de mettre en place multiples services : Pare-Feux ; Superviseur ; Serveurs ; etc...",
    'comp.desc.office':       "Logiciels de création et d'édition de textes/présentations/tableaux de données.",
    'comp.desc.virtualisation':"La virtualisation est le centre de tout développement de réseaux et postes numériques. Elle permet de simuler ces derniers depuis un unique appareil physique.",
    'comp.desc.pingcastle':   "PingCastle est un logiciel d'analyse de données qui fournit à son utilisateur un rapport de vulnérabilité concernant le domaine dans lequel il est testé. C'est un très bon outil pour sécuriser une infrastructure informatique.",
    'comp.desc.pfsense':      "Savoir configurer un pare-feux est indispensable pour assurer la sécurité de nos appareils et réseaux.",
    'comp.desc.vagrant':      "Automatiser une installation de poste représente à la fois un gain de temps considérable et une gestion uniforme de tout les appareils en les basant sur une configuration commune.",
    'comp.desc.windows':      "Que ce soit dans le cadre d'un serveur ou d'un poste client, il est crucial de connaître le système d'un appareil pour répondre aux demandes des utilisateurs.",
    'comp.desc.zabbix':       "Superviser un appareil permet de repérer en continu diverses failles et erreurs dans son système avant que ces dernières ne deviennent de réels obstacles dans son fonctionnement.",
    'comp.desc.vscode':       "Visual Studio Code est un excellent support pour rédiger des fichiers HTML, CSS ou encore pour des langages de programmation comme Python ou C.",
    'comp.desc.wireshark':    "L'analyse de flux de données est très utile pour comprendre quels éléments sont visibles dans un réseau et pour des simulations d'attaque et défense.",

    /* Contact */
    'contact.parMail':         'Par Mail :',
    'contact.nom':             'Votre nom',
    'contact.nomPlaceholder':  'Jean Dupont',
    'contact.email':           'Votre adresse e-mail',
    'contact.emailPlaceholder':'vous@exemple.com',
    'contact.objet':           'Objet',
    'contact.objetPlaceholder':'Objet du message',
    'contact.message':         'Message',
    'contact.messagePlaceholder':'Votre message…',
    'contact.envoyer':         'Envoyer',
    'contact.parTel':          'Par téléphone :',
  },

  en: {
    /* Navigation */
    'nav.accueil':     'Home',
    'nav.profil':      'My Profile',
    'nav.projets':     'Projects',
    'nav.veille':      'Tech Watch',
    'nav.competences': 'Skills',
    'nav.contact':     'Contact',

    /* Home */
    'accueil.modeSombre': 'Dark mode',
    'accueil.modeClair':  'Light mode',
    'accueil.titre':      'Network Technician',

    /* Profile */
    'profil.apropos':   'About',
    'profil.bio':       "Nice to meet you, I'm Quentin Raizonville: a curious and driven young network technician, looking to expand my skill set — whether in cybersecurity, programming languages, or operating systems. Currently an apprentice in the BTS SIO SISR programme at Nexa Digital School in Paris, I work with patience and thoroughness to meet your expectations.",
    'profil.cv':        'CV',
    'profil.cvDownload':'⬇ Download CV',
    'profil.interets':  'Interests',
    'profil.icard.code.titre':   'Coding',
    'profil.icard.code.desc':    'Programming is, for me, a series of challenges I enjoy overcoming.',
    'profil.icard.echecs.titre': 'Chess',
    'profil.icard.echecs.desc':  'Playing chess helps me develop my analytical thinking and, above all, to think before I act.',
    'profil.icard.jv.titre':     'Video games',
    'profil.icard.jv.desc':      'As an amateur coach in team and strategy games, I have learned to assert my own opinion and respect others\', helping me overcome my shyness.',

    /* Projects */
    'projets.consulter': 'View',
    'projets.avec':      'Built with:',
    'projets.wip':       'Work in progress',
    'projets.p1.titre':  'Securing a domain with PingCastle',
    'projets.p1.desc':   'A security audit tool, PingCastle is a data analysis software that allows us to identify vulnerabilities and strengthen the security of a Windows-based infrastructure.',
    'projets.p2.titre':  'Setting up a Samba server',
    'projets.p2.desc':   'Creation and management of an infrastructure including: AD DS and DHCP server; Samba file sharing server; Web server; Data backup server; Client workspace; PfSense router and firewall.',
    'projets.p3.titre':  'Team composition tester for 3/6 players in Wakfu',
    'projets.p3.desc':   'A website paired with a program that tests character compositions for 3 or 6-player teams in the game Wakfu.',

    /* E5 */
    'e5.download': '⬇ Download the summary table',

    /* Tech watch */
    'veille.lire':    'Read article ↗',
    'veille.v1.titre': 'The French state bans Microsoft and chooses open source',
    'veille.v1.desc':  'In order to no longer depend on US-imposed rules, the French government decides to secure French tax data by dropping the Microsoft ecosystem and replacing it with an open-source alternative: Libre.',
    'veille.v2.titre': 'France, Europe\'s data breach champion in 2026',
    'veille.v2.desc':  'Since January 2026, France has faced a wave of cyberattacks putting over 200 million citizens\' personal records at risk. The healthcare and finance sectors are the most exposed.',
    'veille.v3.titre': 'ANSSI\'s lack of responsiveness',
    'veille.v3.desc':  'As cyberattacks on public services and ministries continue to multiply, France\'s national cybersecurity agency struggles to demonstrate its capacity to act effectively.',

    /* Skills — subtitles */
    'comp.sub.programmation':  'Programming',
    'comp.sub.domaine':        'Domain controller',
    'comp.sub.editionWeb':     'Web page editing',
    'comp.sub.simReseau':      'Network Simulation',
    'comp.sub.os':             'Operating system',
    'comp.sub.virtualisation': 'Virtualisation',
    'comp.sub.audit':          'Security audit',
    'comp.sub.parefeu':        'Firewall',
    'comp.sub.automatisation': 'Automation',
    'comp.sub.supervision':    'Monitoring',
    'comp.sub.editeurCode':    'Code editor',
    'comp.sub.analyse':        'Data analysis',

    /* Skills — descriptions */
    'comp.desc.c':            'Programming and networking are closely linked in the digital world. Having development knowledge allows me to better coordinate my actions based on the needs at hand.',
    'comp.desc.ad':           'Active Directory on Windows is a service that manages server resources by assigning users a hierarchy and access conditions within a domain.',
    'comp.desc.css':          'CSS is an extension of HTML used to style web pages. It enables the creation of visual effects and animations that give HTML files a distinct personality.',
    'comp.desc.cisco':        'Network simulation allows us to design and test a digital network architecture in detail before deploying it on physical hardware.',
    'comp.desc.html':         'HTML is essential for building web pages, including the creation of this very portfolio.',
    'comp.desc.linux':        'Linux is an open system that supports a wide range of services: firewalls, monitoring tools, servers, and more.',
    'comp.desc.office':       'Software suite for creating and editing documents, spreadsheets, and presentations.',
    'comp.desc.virtualisation':'Virtualisation is at the heart of all network and workstation development, allowing multiple environments to be simulated from a single physical machine.',
    'comp.desc.pingcastle':   'PingCastle is a data analysis tool that provides its user with a vulnerability report for the domain being tested. It is an excellent tool for securing an IT infrastructure.',
    'comp.desc.pfsense':      'Knowing how to configure a firewall is essential for ensuring the security of our devices and networks.',
    'comp.desc.vagrant':      'Automating workstation deployment saves significant time and ensures a consistent configuration across all devices.',
    'comp.desc.windows':      'Whether for a server or a client workstation, knowing a system\'s operating environment is crucial to meeting user needs.',
    'comp.desc.zabbix':       'Monitoring a device enables the continuous detection of faults and vulnerabilities in its system before they become real operational obstacles.',
    'comp.desc.vscode':       'Visual Studio Code is an excellent tool for writing HTML and CSS files, as well as programming languages such as Python or C.',
    'comp.desc.wireshark':    'Data flow analysis is very useful for understanding which elements are visible on a network and for attack and defence simulations.',

    /* Contact */
    'contact.parMail':         'By email:',
    'contact.nom':             'Your name',
    'contact.nomPlaceholder':  'John Smith',
    'contact.email':           'Your email address',
    'contact.emailPlaceholder':'you@example.com',
    'contact.objet':           'Subject',
    'contact.objetPlaceholder':'Subject of your message',
    'contact.message':         'Message',
    'contact.messagePlaceholder':'Your message…',
    'contact.envoyer':         'Send',
    'contact.parTel':          'By phone:',
  },
};

/* ---- Langues disponibles ---- */
const LANGS = {
  fr: { flag: '🇫🇷', name: 'Français' },
  en: { flag: '🇬🇧', name: 'English'  },
};

/* ---- État courant ---- */
let currentLang = 'fr';

/* ---- Applique la traduction sur tous les éléments marqués ---- */
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  // Texte
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Attribut lang sur <html>
  document.documentElement.lang = lang;
}

/* ---- Met à jour l'affichage du bouton actif ---- */
function updateLangBtn(lang) {
  const { flag, name } = LANGS[lang];
  document.getElementById('langFlag').textContent = flag;
  document.getElementById('langName').textContent = name;
}

/* ---- Reconstruit la liste déroulante (options ≠ actif) ---- */
function buildDropdown(activeLang) {
  const dropdown = document.getElementById('langDropdown');
  dropdown.innerHTML = '';
  Object.entries(LANGS).forEach(([code, { flag, name }]) => {
    if (code === activeLang) return;
    const li = document.createElement('li');
    li.className   = 'lang-option';
    li.role        = 'option';
    li.dataset.lang = code;
    li.innerHTML   = `<span class="lang-flag">${flag}</span><span class="lang-name">${name}</span>`;
    li.addEventListener('click', () => switchLang(code));
    dropdown.appendChild(li);
  });
}

/* ---- Bascule vers une langue ---- */
function switchLang(lang) {
  currentLang = lang;
  applyTranslations(lang);
  updateLangBtn(lang);
  buildDropdown(lang);
  closeDropdown();

  // Mise à jour du label thème selon l'état courant
  const isLight = document.body.classList.contains('light-mode');
  const themeLabel = document.getElementById('themeLabel');
  if (themeLabel) {
    themeLabel.textContent = isLight
      ? TRANSLATIONS[lang]['accueil.modeClair']
      : TRANSLATIONS[lang]['accueil.modeSombre'];
  }
}

/* ---- Gestion du dropdown ---- */
function openDropdown() {
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  dropdown.classList.add('open');
  btn.setAttribute('aria-expanded', 'true');
}

function closeDropdown() {
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  dropdown.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}

function toggleDropdown() {
  const dropdown = document.getElementById('langDropdown');
  dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
}

/* ---- Init au chargement ---- */
document.addEventListener('DOMContentLoaded', () => {
  buildDropdown(currentLang);

  document.getElementById('langBtn').addEventListener('click', e => {
    e.stopPropagation();
    toggleDropdown();
  });

  // Fermeture au clic hors du widget
  document.addEventListener('click', e => {
    const switcher = document.getElementById('langSwitcher');
    if (switcher && !switcher.contains(e.target)) closeDropdown();
  });

  // Fermeture à la touche Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDropdown();
  });
});

/* ---- Export pour main.js (mise à jour du label thème) ---- */
window.i18n = { getCurrentLang: () => currentLang, TRANSLATIONS };
