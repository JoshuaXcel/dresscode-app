// tab switcher
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.gender-section');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function showTab(btn, focus) {
  const target = document.getElementById(btn.dataset.target);

  tabBtns.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
    b.setAttribute('tabindex', '-1');
  });
  sections.forEach(s => s.classList.remove('active'));

  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  btn.removeAttribute('tabindex');
  target.classList.add('active');
  if (focus) btn.focus();

  // bring the new section's heading into view, just below the sticky bars
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}

tabBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => showTab(btn, false));

  // arrow keys move between tabs (standard tab keyboard behaviour)
  btn.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = tabBtns[(i + (e.key === 'ArrowRight' ? 1 : tabBtns.length - 1)) % tabBtns.length];
    showTab(next, true);
  });
});

// back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

// faq accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const open = btn.classList.toggle('open');
    answer.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
});
