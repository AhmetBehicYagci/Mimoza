/* ============================================
   Mimoza Kafe — Galeri Sayfası JavaScript
   Lightbox functionality
   ============================================ */

(function () {
  'use strict';

  function q(s, c) { return (c || document).querySelector(s) }
  function qa(s, c) { return (c || document).querySelectorAll(s) }

  var lightbox = q('#lightbox');
  if (!lightbox) return;

  var lightboxImg = q('#lightboxImg');
  var lightboxClose = q('#lightboxClose');
  var lightboxPrev = q('#lightboxPrev');
  var lightboxNext = q('#lightboxNext');
  var lightboxCounter = q('#lightboxCounter');
  var items = qa('.gallery-item');
  var currentIndex = 0;

  function openLightbox(i) {
    currentIndex = i;
    var item = items[i];
    lightboxImg.setAttribute('src', item.getAttribute('data-full'));
    var altImg = item.querySelector('img');
    if (altImg) lightboxImg.setAttribute('alt', altImg.getAttribute('alt'));
    lightboxCounter.textContent = (i + 1) + ' / ' + items.length;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigateLightbox(d) {
    var n = currentIndex + d;
    if (n < 0) n = items.length - 1;
    if (n >= items.length) n = 0;
    openLightbox(n);
  }

  items.forEach(function (item, i) {
    item.addEventListener('click', function () { openLightbox(i); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(i);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', function () { navigateLightbox(-1); });
  if (lightboxNext) lightboxNext.addEventListener('click', function () { navigateLightbox(1); });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

})();
