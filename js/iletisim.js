/* ============================================
   Mimoza Kafe — İletişim Sayfası JavaScript
   Form validation + Formspree submission
   ============================================ */

(function () {
  'use strict';

  function q(s, c) { return (c || document).querySelector(s) }

  var form = q('#contactForm');
  if (!form) return;

  var lang = localStorage.getItem('mimoza-lang') || 'tr';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;
    var name = q('#contactName');
    var email = q('#contactEmail');
    var message = q('#contactMessage');

    [name, email, message].forEach(function (f) { if (f) f.classList.remove('error'); });

    if (name && !name.value.trim()) { name.classList.add('error'); valid = false; }
    if (email && (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) { email.classList.add('error'); valid = false; }
    if (message && !message.value.trim()) { message.classList.add('error'); valid = false; }

    if (valid) {
      var fd = new FormData(form);
      var btn = form.querySelector('.form-submit');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (lang === 'tr' ? 'Gönderiliyor...' : 'Sending...');
      }

      fetch(form.getAttribute('action'), {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (d.ok || d.success) {
            var fields = q('#formFields');
            if (fields) fields.style.display = 'none';
            var success = q('#formSuccess');
            if (success) success.classList.add('active');
          } else {
            alert(lang === 'tr' ? 'Bir hata oluştu.' : 'An error occurred.');
          }
        })
        .catch(function () {
          var fields = q('#formFields');
          if (fields) fields.style.display = 'none';
          var success = q('#formSuccess');
          if (success) success.classList.add('active');
        })
        .finally(function () {
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + (lang === 'tr' ? 'Mesaj Gönder' : 'Send Message');
          }
        });
    }
  });

})();
