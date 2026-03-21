const revealElements = document.querySelectorAll('.reveal');
const pageBg = document.querySelector('.page-bg');
const yearNode = document.querySelector('#year');

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((el, idx) => {
  el.style.transitionDelay = `${Math.min(idx * 70, 420)}ms`;
  observer.observe(el);
});

window.addEventListener(
  'scroll',
  () => {
    if (!pageBg) {
      return;
    }

    const offset = window.scrollY * 0.03;
    pageBg.style.transform = `translate3d(0, ${offset}px, 0)`;
  },
  { passive: true }
);
