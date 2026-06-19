//tab switcher
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.gender-section');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    tabBtns.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(target).classList.add('active');

    //smooth scroll to content on mobile
    document.querySelector('.content').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

//back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//faq accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    btn.classList.toggle('open');
    answer.classList.toggle('open');
  });
});