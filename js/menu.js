(function () {
  'use strict';

  function qa(s, c) { return (c || document).querySelectorAll(s) }

  var navBtns = qa('.menu-nav-btn');
  var panels = qa('.menu-panel');
  var activeCategory = null;

  // Mobilde hiçbir kategori açık başlamasın
  if (window.innerWidth <= 1024) {
    navBtns.forEach(function (btn) { btn.classList.remove('active'); btn.setAttribute('aria-selected', 'false'); });
    panels.forEach(function (panel) { panel.classList.remove('active'); });
    activeCategory = null;
  } else {
    // Masaüstünde ilk açık kategoriyi activeCategory olarak işaretle
    var firstActive = document.querySelector('.menu-nav-btn.active');
    if (firstActive) activeCategory = firstActive.getAttribute('data-category');
  }

  function activate(category) {
    var isSame = activeCategory === category;
    var newCat = isSame ? null : category;
    navBtns.forEach(function (btn) {
      var isActive = btn.getAttribute('data-category') === newCat;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    panels.forEach(function (panel) {
      var isActive = panel.getAttribute('data-category') === newCat;
      panel.classList.toggle('active', isActive);
    });
    activeCategory = newCat;
  }

  navBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      activate(this.getAttribute('data-category'));
    });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

})();
