(function () {
  'use strict';

  function qa(s, c) { return (c || document).querySelectorAll(s) }

  var navBtns = qa('.menu-nav-btn');
  var panels = qa('.menu-panel');
  var activeCategory = null;

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
