const body = document.body;
const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

window.addEventListener('load', () => {
  window.setTimeout(() => body.classList.add('is-loaded'), 260);
});

const syncHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menu?.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

menu?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menu.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

revealItems.forEach((item) => revealObserver.observe(item));

const magneticButtons = document.querySelectorAll('.button');
magneticButtons.forEach((button) => {
  button.addEventListener('pointermove', (event) => {
    if (!(event.currentTarget instanceof HTMLElement)) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.14;
    event.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener('pointerleave', (event) => {
    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.style.transform = '';
    }
  });
});
