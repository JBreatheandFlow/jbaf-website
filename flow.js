// Jess Breathe & Flow — reveal on scroll.
// Images resolve out of a haze; hand-drawn annotations sketch themselves
// in. Each happens once, no repeat. No framework, no dependency, respects
// prefers-reduced-motion via CSS.

(function () {
  var targets = document.querySelectorAll('.split-media, .annotate');
  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach(function (el) { el.classList.add('in-view'); });
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

  targets.forEach(function (el) { observer.observe(el); });
})();
