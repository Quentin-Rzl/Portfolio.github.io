/* ============================================================
   main.js — Navigation, thème et formulaire de contact
   ============================================================ */

/* --- Constantes EmailJS --- */
const EMAILJS_PUBLIC_KEY   = 'jh_u1Env56JQFIn81';
const EMAILJS_SERVICE_ID   = 'service_9xiagl4';
const EMAILJS_TEMPLATE_ID  = 'template_78t6ljw';

/* --- Éléments DOM --- */
const burger      = document.getElementById('burger');
const mobileMenu  = document.getElementById('mobileMenu');
const themeToggle = document.getElementById('themeToggle');
const switchIcon  = document.getElementById('switchIcon');
const themeLabel  = document.getElementById('themeLabel');
const navLinks    = document.querySelectorAll('[data-page]');
const pages       = document.querySelectorAll('.page');
const contactForm = document.getElementById('contactForm');

/* ---- Navigation entre pages ---- */
function goTo(targetId) {
  // Mettre à jour les liens actifs
  navLinks.forEach(link => link.classList.remove('active'));
  document.querySelectorAll(`[data-page="${targetId}"]`).forEach(link => link.classList.add('active'));

  // Masquer toutes les pages, puis afficher la cible
  pages.forEach(page => {
    page.classList.remove('active');
    page.classList.remove('page-enter');
  });

  const targetPage = document.getElementById(targetId);
  targetPage.classList.add('active');

  // Remonter en haut de page
  window.scrollTo(0, 0);

  // Double rAF pour déclencher l'animation d'entrée
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      targetPage.classList.add('page-enter');
    });
  });
}

/* Boutons de navigation de l'accueil */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => goTo(btn.dataset.page));
});

/* Liens de la barre de navigation et du menu mobile (exclut les .nav-btn de l'accueil) */
navLinks.forEach(link => {
  if (link.tagName === 'BUTTON') return;
  link.addEventListener('click', e => {
    e.preventDefault();
    goTo(link.dataset.page);
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ---- Menu burger (mobile) ---- */
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

/* ---- Toggle thème clair / sombre ---- */
themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  switchIcon.textContent = isLight ? '☀️' : '🌙';
  // Label traduit selon la langue active
  const lang = window.i18n ? window.i18n.getCurrentLang() : 'fr';
  const dict = window.i18n ? window.i18n.TRANSLATIONS[lang] : {};
  themeLabel.textContent = isLight
    ? (dict['accueil.modeClair']  || 'Mode clair')
    : (dict['accueil.modeSombre'] || 'Mode sombre');
});

/* ---- Auto-resize des textareas ---- */
document.querySelectorAll('textarea').forEach(textarea => {
  textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
});

/* ---- Formulaire de contact (EmailJS) ---- */
emailjs.init(EMAILJS_PUBLIC_KEY);

if (contactForm) {
  const sendBtn = contactForm.querySelector('.send-btn');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    sendBtn.disabled    = true;
    sendBtn.textContent = 'Envoi…';

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  contactForm.name.value.trim(),
      from_email: contactForm.email.value.trim(),
      subject:    contactForm.subject.value.trim(),
      message:    contactForm.message.value.trim(),
    })
    .then(() => {
      sendBtn.textContent      = 'Envoyé ✓';
      sendBtn.style.background = 'var(--c3)';
      contactForm.reset();

      setTimeout(() => {
        sendBtn.disabled         = false;
        sendBtn.textContent      = 'Envoyer';
        sendBtn.style.background = 'var(--c6)';
      }, 4000);
    })
    .catch(err => {
      console.error('EmailJS error', err);
      sendBtn.textContent      = 'Erreur — réessayer';
      sendBtn.style.background = '#555';

      setTimeout(() => {
        sendBtn.disabled         = false;
        sendBtn.textContent      = 'Envoyer';
        sendBtn.style.background = 'var(--c6)';
      }, 4000);
    });
  });
}
