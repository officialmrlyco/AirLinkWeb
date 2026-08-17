// This tag-specific asset URL is permanent for the published release. Never
// point the public installer at the mutable "latest" redirect or a branch file.
const DOWNLOAD_URL = 'https://github.com/officialmrlyco/AirLinkWeb/releases/download/v1.0.2/AirLink.apk';

// One source of truth keeps every download call-to-action on the same release.
document.querySelectorAll('[data-download-link]').forEach((link) => {
  link.href = DOWNLOAD_URL;
});

// The footer remains current without adding a server dependency to this static site.
document.querySelector('#year').textContent = new Date().getFullYear();

// Sections fade up into place once, the first time they enter the viewport.
// Nothing runs (and nothing is ever hidden) if the visitor prefers reduced
// motion, so the page is fully usable without this script.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length && 'IntersectionObserver' in window) {
    revealEls.forEach((el) => el.classList.add('reveal-armed'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  }
}
