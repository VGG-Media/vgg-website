// VGG – Vincenzo German Gruppe

// ---- NAV scroll ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- Burger menu ----
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---- Reveal on scroll ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// stagger service cards
document.querySelectorAll('.service-card').forEach((el, i) => {
  el.dataset.delay = i * 80;
});
document.querySelectorAll('.value-item').forEach((el, i) => {
  el.dataset.delay = i * 60;
});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Contact form ----
// Form submits natively to Formspree — no preventDefault

// ---- Smooth active nav highlight ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id ? 'var(--orange)' : '';
      });
    }
  });
}, { threshold: 0.5 });
sections.forEach(s => observer.observe(s));
