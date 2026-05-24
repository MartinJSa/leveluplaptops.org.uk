/* Level Up Laptop Appeal - small enhancements */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close menu when a link is clicked
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (links.classList.contains('open')) {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
    // close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!links.classList.contains('open')) return;
      if (toggle.contains(e.target) || links.contains(e.target)) return;
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Simple slideshow
  var slideshow = document.querySelector('.slideshow');
  if (slideshow) {
    var slides = slideshow.querySelectorAll('.slide');
    var dots   = slideshow.querySelectorAll('.slideshow-dot');
    var idx = 0;
    var interval;

    function show(i) {
      slides.forEach(function (s, k) { s.classList.toggle('active', k === i); });
      dots.forEach(function (d, k) { d.classList.toggle('active', k === i); });
      idx = i;
    }
    function next() { show((idx + 1) % slides.length); }
    function start() { interval = setInterval(next, 5000); }
    function stop()  { clearInterval(interval); }

    dots.forEach(function (d, k) {
      d.addEventListener('click', function () {
        stop(); show(k); start();
      });
    });

    // pause on hover (desktop)
    slideshow.addEventListener('mouseenter', stop);
    slideshow.addEventListener('mouseleave', start);

    start();
  }
})();
