// Jess Breathe & Flow — image reveal.
// Each image/media block softly settles into view once, like a slow inhale.
// No JS framework, no dependency, respects prefers-reduced-motion via CSS.

(function () {
  var media = document.querySelectorAll('.split-media');
  if (!('IntersectionObserver' in window) || !media.length) {
    media.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
  );

  media.forEach(function (el) { observer.observe(el); });
})();
