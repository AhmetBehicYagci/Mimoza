(function () {
  'use strict';

  function q(s, c) { return (c || document).querySelector(s) }
  function qa(s, c) { return (c || document).querySelectorAll(s) }

  var navBtns = qa('.menu-nav-btn');
  var panels = qa('.menu-panel');

  function activate(category) {
    navBtns.forEach(function (btn) {
      var isActive = btn.getAttribute('data-category') === category;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    panels.forEach(function (panel) {
      var isActive = panel.getAttribute('data-category') === category;
      panel.classList.toggle('active', isActive);
    });
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
