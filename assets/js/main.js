document.addEventListener('DOMContentLoaded', function() {
  /* ===== Mobile Menu Toggle ===== */
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-navigation');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);

      const bars = menuToggle.querySelectorAll('.menu-icon-bar');
      if (isOpen) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const bars = menuToggle.querySelectorAll('.menu-icon-bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });
  }

  /* ===== Mobile Dropdown Toggle ===== */
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = toggle.closest('.dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');
        const isOpen = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen);
      }
    });
  });

  /* ===== Smooth scroll ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ===== Header scroll effect ===== */
  let lastScroll = 0;
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,.08)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  /* ===== Scroll to Top with Progress Circle ===== */
  var svgNS = 'http://www.w3.org/2000/svg';

  var scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.setAttribute('aria-label', 'Kembali ke atas');
  scrollBtn.style.display = 'none';

  var svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 48 48');
  svg.setAttribute('width', '48');
  svg.setAttribute('height', '48');

  var bgCircle = document.createElementNS(svgNS, 'circle');
  bgCircle.setAttribute('cx', '24');
  bgCircle.setAttribute('cy', '24');
  bgCircle.setAttribute('r', '22');
  bgCircle.setAttribute('fill', 'none');
  bgCircle.setAttribute('stroke', 'rgba(255,255,255,.2)');
  bgCircle.setAttribute('stroke-width', '2.5');

  var progressCircle = document.createElementNS(svgNS, 'circle');
  progressCircle.setAttribute('cx', '24');
  progressCircle.setAttribute('cy', '24');
  progressCircle.setAttribute('r', '22');
  progressCircle.setAttribute('fill', 'none');
  progressCircle.setAttribute('stroke', '#fff');
  progressCircle.setAttribute('stroke-width', '2.5');
  progressCircle.setAttribute('stroke-linecap', 'round');
  progressCircle.setAttribute('stroke-dasharray', '138.23');
  progressCircle.setAttribute('stroke-dashoffset', '138.23');
  progressCircle.setAttribute('transform', 'rotate(-90 24 24)');

  var arrow = document.createElementNS(svgNS, 'line');
  arrow.setAttribute('x1', '24');
  arrow.setAttribute('y1', '30');
  arrow.setAttribute('x2', '24');
  arrow.setAttribute('y2', '18');
  arrow.setAttribute('stroke', '#fff');
  arrow.setAttribute('stroke-width', '2.5');
  arrow.setAttribute('stroke-linecap', 'round');

  var arrowLeft = document.createElementNS(svgNS, 'line');
  arrowLeft.setAttribute('x1', '18');
  arrowLeft.setAttribute('y1', '24');
  arrowLeft.setAttribute('x2', '24');
  arrowLeft.setAttribute('y2', '18');
  arrowLeft.setAttribute('stroke', '#fff');
  arrowLeft.setAttribute('stroke-width', '2.5');
  arrowLeft.setAttribute('stroke-linecap', 'round');

  var arrowRight = document.createElementNS(svgNS, 'line');
  arrowRight.setAttribute('x1', '30');
  arrowRight.setAttribute('y1', '24');
  arrowRight.setAttribute('x2', '24');
  arrowRight.setAttribute('y2', '18');
  arrowRight.setAttribute('stroke', '#fff');
  arrowRight.setAttribute('stroke-width', '2.5');
  arrowRight.setAttribute('stroke-linecap', 'round');

  svg.appendChild(bgCircle);
  svg.appendChild(progressCircle);
  svg.appendChild(arrow);
  svg.appendChild(arrowLeft);
  svg.appendChild(arrowRight);
  scrollBtn.appendChild(svg);
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function updateScrollProgress() {
    var scrollY = window.pageYOffset;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? scrollY / docHeight : 0;
    var circumference = 138.23;
    var offset = circumference - (progress * circumference);
    progressCircle.setAttribute('stroke-dashoffset', offset);

    if (scrollY > 400) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  }

  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();
});
