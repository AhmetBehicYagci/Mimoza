/* ============================================
   Mimoza Kafe — Ortak (Shared) JavaScript
   ============================================ */

(function () {
  'use strict';

  function q(s, c) { return (c || document).querySelector(s) }
  function qa(s, c) { return (c || document).querySelectorAll(s) }

  var lang = 'tr';
  var theme = localStorage.getItem('mimoza-theme') || 'light';

  /* ---------- Translations ---------- */
  var langs = {};

  langs.tr = {
    skipLink: 'Ana içeriğe geç',
    navHome: 'Anasayfa',
    navAbout: 'Kurumsal',
    navMenu: 'Menü',
    navGallery: 'Galeri',
    navContact: 'İletişim',
    heroBadge: 'Kampüsün Kalbi',
    heroTitle1: 'Sıcak Bir Mola',
    heroTitle2: "Mimoza'da Sizi Bekliyor",
    heroDesc: 'Uludağ Üniversitesi kampüsünde, ders aralarında sıcacık içecekler ve lezzetli atıştırmalıklarla dolu bir mola. Samimi atmosferimizle sizi ağırlamaktan mutluluk duyuyoruz.',
    heroMenu: 'Menümüzü Keşfedin',
    heroContact: 'Bize Ulaşın',
    heroFloatTitle: '4.8 ★',
    heroFloatDesc: 'Öğrenci Memnuniyeti',
    aboutLabel: 'Hakkımızda',
    aboutTitle: "Mimoza Kafe'nin Hikayesi",
    aboutText1: 'Uludağ Üniversitesi kampüsünde açılan Mimoza Kafe, öğrencilere kaliteli ve uygun fiyatlı yiyecek-içecek hizmeti sunmak amacıyla kuruldu. Adını kampüsün simgesi haline gelen mimoza çiçeklerinden alıyor.',
    aboutText2: 'Misyonumuz, kampüsün yoğun temposunda öğrencilere ve akademisyenlere sıcak bir mola alanı sunmak. Tüm ürünlerimizi taze ve kaliteli malzemelerle hazırlıyor, her gün güler yüzlü hizmet anlayışımızla sizleri ağırlıyoruz.',
    feature1: 'Taze & Doğal Ürünler',
    feature2: 'Ücretsiz WiFi',
    feature3: 'Sessiz Çalışma Alanı',
    feature4: 'Öğrenci Dostu Fiyatlar',
    heroAbout: 'Daha Fazla Bilgi',
    ctaTitle: 'Sizi Kafemizde Görmekten Mutluluk Duyarız',
    ctaDesc: 'Ders aralarında sıcacık bir mola, arkadaşlarınızla keyifli sohbetler için Mimoza Kafe sizi bekliyor.',
    ctaBtn: 'Bize Ulaşın',
    aboutDesc: 'Kampüsün gri günlerine sarı bir mola. Kalite ve samimiyetin buluştuğu nokta.',
    storyLabel: 'Hikayemiz',
    storyTitle: 'Başlangıçtan Bugüne',
    storyText1: 'Uludağ Üniversitesi Eğitim Fakültesi yerleşkesinde kapılarını açan Mimoza Kafe, öğrencilere kaliteli ve uygun fiyatlı yiyecek-içecek hizmeti sunmak amacıyla doğdu. Adını kampüsün dört bir yanını süsleyen mimoza çiçeklerinden alan kafemiz, kısa sürede öğrencilerin ve akademisyenlerin gözde buluşma noktası haline geldi.',
    storyText2: 'Kurulduğumuz günden bu yana temel prensibimiz, kampüsün yoğun temposunda öğrencilere sıcak bir mola alanı sunmak. Tüm ürünlerimizi taze ve kaliteli malzemelerle hazırlıyor, her gün güler yüzlü hizmet anlayışımızla sizleri ağırlıyoruz.',
    storyText3: 'Vizyonumuz; kalitenin bir tesadüf değil, sürekli ve sürdürülebilir bir standart olduğu, kampüs kültürüne değer katan öncü bir marka olmaktır.',
    valuesLabel: 'Değerlerimiz',
    valuesTitle: 'Bizi Farklı Kılan Değerler',
    valuesDesc: 'Her gün daha iyiye ulaşmak için çalışıyor, misafirlerimizin memnuniyetini her şeyin önünde tutuyoruz.',
    val1Title: 'Taze & Doğal',
    val1Desc: 'Tüm ürünlerimizde taze ve doğal malzemeler kullanıyor, her gün taze demlenmiş kahve ve taze pişmiş atıştırmalıklar sunuyoruz.',
    val2Title: 'Öğrenci Dostu',
    val2Desc: 'Öğrenci bütçesine uygun fiyat politikamızla kaliteli hizmeti herkes için erişilebilir kılıyoruz.',
    val3Title: 'Samimi Hizmet',
    val3Desc: 'Güler yüzlü ekibimizle her misafirimizi evinde hissettiren sıcak bir atmosfer yaratıyor, kişisel ilgiyle hizmet veriyoruz.',
    val4Title: 'Sürdürülebilirlik',
    val4Desc: 'Geri dönüştürülebilir ambalajlar kullanıyor, israfı en aza indiriyor ve çevre dostu uygulamalarla geleceğimize katkıda bulunuyoruz.',
    val5Title: 'Topluluk Ruhu',
    val5Desc: 'Kampüs etkinliklerine ev sahipliği yapıyor, öğrenci kulüplerini destekliyor ve üniversite yaşamına aktif katkı sağlıyoruz.',
    val6Title: 'Kalite Odaklı',
    val6Desc: 'Tedarikten sunuma her aşamada kalite standartlarımızı koruyor, en iyi ürünleri en iyi şekilde sunmak için çalışıyoruz.',
    menuPageTitle: 'Menümüz',
    menuPageDesc: 'Her damak tadına uygun lezzetler. Kampüsün en sevilen menüsü.',
    catHotCoffee: 'Sıcak Kahveler',
    catColdCoffee: 'Soğuk Kahveler',
    catHotDrinks: 'Sıcak İçecekler',
    catDesserts: 'Tatlılar',
    catPastry: 'Unlu Mamuller',
    catColdDrinks: 'Soğuk İçecekler',
    catMeals: 'Yemek Çeşitleri',
    catSandwiches: 'Ekmek Arası Çeşitleri',
    miEspresso: 'Espresso',
    miMachiatto: 'Espresso Machiato',
    miAmericano: 'Americano',
    miFilter: 'Filtre Kahve',
    miLatte: 'Latte',
    miSyrupLatte: 'Şuruplu Latteler',
    miCappuccino: 'Cappuccino',
    miTurkish: 'Türk Kahvesi',
    miFlatWhite: 'Flat White',
    miCortado: 'Cortado',
    miIcedAmericano: 'Iced Americano',
    miIcedLatte: 'Iced Latte',
    miIcedMocha: 'Iced Mocha',
    miColdBrew: 'Cold Brew',
    miFrappe: 'Frappe',
    miTea: 'Çay',
    miPackedTea: 'Paket Çaylar',
    miNescafe: 'Nescafe',
    miHotChoc: 'Sıcak Çikolata',
    miSahlep: 'Sahlep',
    miTrilece: 'Trileçe',
    miEclair: 'Ekler',
    miCheesecake: 'Orman Meyveli Cheesecake',
    miBrownie: 'Çikolatalı Browni',
    miWhiteBrownie: 'Beyaz Çikolatalı Browni',
    miPistachioCake: 'Fıstıklı Çikolatalı Pasta',
    miRaspRoll: 'Frambuazlı Rulo Pasta',
    miBlackForest: 'Karaorman Pasta',
    miMosaic: 'Mozaik Pasta',
    miCroquant: 'Krokanlı Pasta',
    miPogaca: 'Poğaça',
    miBorek: 'Börek',
    miPlainSoda: 'Sade Soda',
    miFruitSoda: 'Meyveli Soda',
    miCannedDrinks: 'Kutu İçecekler',
    miGazoz: 'Gazoz',
    miLemonade: 'Limonata',
    miAyran: 'Ayran',
    miWater: 'Su',
    miSoup: 'Çorba Çeşitleri',
    miChickenRice: 'Tavuklu Pilav + Ayran',
    miPasta: 'Soslu Makarna',
    miDoner: 'Tavuk Döner Porsiyon',
    miFries: 'Patates Porsiyon',
    miConeFries: 'Patates Külah',
    miSalad: 'Salata Çeşitleri',
    miDonerBread: 'Ekmek Arası Döner + Ayran',
    miKofteBread: 'Ekmek Arası Köfte + Ayran',
    miNuggetBread: 'Ekmek Arası Nugget + Ayran',
    miPatso: 'Patso + Ayran',
    miKumru: 'Kumru + Ayran',
    miSandwich: 'Sandviç + Ayran',
    miToast: 'Tost + Ayran',
    galleryPageTitle: 'Galeri',
    galleryPageDesc: 'Kafemizden sıcak kareler. Fotoğraflara tıklayarak büyütebilirsiniz.',
    contactPageTitle: 'İletişim',
    contactPageDesc: 'Sorularınız, önerileriniz veya siparişleriniz için bize ulaşmaktan çekinmeyin.',
    formNamePlace: 'Adınız Soyadınız',
    formEmailPlace: 'ornek@email.com',
    formSubjectPlace: 'Konu başlığı',
    formMessagePlace: 'Mesajınızı yazın...',
    formNameError: 'Lütfen adınızı girin.',
    formEmailError: 'Lütfen geçerli bir e-posta girin.',
    formSubject: 'Konu',
    formMessageError: 'Lütfen mesajınızı girin.',
    formSubmit: 'Mesaj Gönder',
    formSuccessTitle: 'Mesajınız Alındı!',
    formSuccessText: 'En kısa sürede size dönüş yapacağız. Teşekkür ederiz.',
    contactAddressTitle: 'Adres',
    contactPhoneTitle: 'Telefon',
    contactEmailTitle: 'E-posta',
    contactHoursTitle: 'Çalışma Saatleri',
    contactHours: 'Hafta İçi Her Gün 07.30 - 19.00',
    socialTitle: 'Sosyal Medyada Biz',
    footerDesc: "Kampüsün gri günlerine sarı bir mola.",
    footerQuick: 'Hızlı Linkler',
    footerContact: 'İletişim',
    footerHours: 'Çalışma Saatleri',
    footerWeekdays: 'Hafta İçi: 07.30 - 19.00',
    footerWeekend: 'Cumartesi: 09.00 - 17.00',
    footerSunday: 'Pazar: Kapalı',
    footerRights: 'Tüm hakları saklıdır.',
    footerPrivacy: 'Gizlilik Politikası',
    footerTerms: 'Kullanım Koşulları'
  };

  langs.en = {
    skipLink: 'Skip to main content',
    navHome: 'Home',
    navAbout: 'About',
    navMenu: 'Menu',
    navGallery: 'Gallery',
    navContact: 'Contact',
    heroBadge: 'Heart of Campus',
    heroTitle1: 'A Warm Break',
    heroTitle2: 'Awaits You at Mimoza',
    heroDesc: 'On Uludağ University campus, a cozy break between classes with hot drinks and delicious snacks. We are happy to welcome you in our friendly atmosphere.',
    heroMenu: 'Explore Menu',
    heroContact: 'Contact Us',
    heroFloatTitle: '4.8 ★',
    heroFloatDesc: 'Student Satisfaction',
    aboutLabel: 'About Us',
    aboutTitle: 'The Story of Mimoza Cafe',
    aboutText1: 'Uludağ University campus, Mimoza Cafe was founded to offer students quality and affordable food & beverage service. Its name is inspired by the mimosa flowers that have become a symbol of the campus.',
    aboutText2: 'Our mission is to provide a warm break space for students and academics amidst the busy campus life. We prepare all our products with fresh, quality ingredients and serve you with a smile every day.',
    feature1: 'Fresh & Natural Products',
    feature2: 'Free WiFi',
    feature3: 'Quiet Study Area',
    feature4: 'Student-Friendly Prices',
    heroAbout: 'Learn More',
    ctaTitle: 'We Would Love to See You at Our Cafe',
    ctaDesc: 'A warm break between classes, pleasant conversations with friends — Mimoza Cafe awaits you.',
    ctaBtn: 'Contact Us',
    aboutDesc: 'A yellow break for gray campus days. Where quality meets warmth.',
    storyLabel: 'Our Story',
    storyTitle: 'From Beginning to Today',
    storyText1: 'Uludağ University Faculty of Education campus, Mimoza Cafe was born to offer students quality and affordable food & beverage service. Named after the mimosa flowers that adorn the campus, our cafe quickly became a favorite meeting point for students and academics.',
    storyText2: 'Since our founding, our core principle has been to offer students a warm break space amidst the busy campus life. We prepare all our products with fresh, quality ingredients and serve you with a smile every day.',
    storyText3: 'Our vision is to be a pioneering brand where quality is not a coincidence but a continuous and sustainable standard, adding value to campus culture.',
    valuesLabel: 'Our Values',
    valuesTitle: 'What Makes Us Different',
    valuesDesc: 'We work to improve every day and prioritize our guests\' satisfaction above all else.',
    val1Title: 'Fresh & Natural',
    val1Desc: 'We use fresh and natural ingredients in all our products, serving freshly brewed coffee and freshly baked snacks daily.',
    val2Title: 'Student Friendly',
    val2Desc: 'We make quality service accessible to everyone with our student-budget-friendly pricing policy.',
    val3Title: 'Warm Service',
    val3Desc: 'Our friendly team creates a warm atmosphere where every guest feels at home, with personalized attention.',
    val4Title: 'Sustainability',
    val4Desc: 'We use recyclable packaging, minimize waste, and contribute to our future with environmentally friendly practices.',
    val5Title: 'Community Spirit',
    val5Desc: 'We host campus events, support student clubs, and actively contribute to university life.',
    val6Title: 'Quality Focused',
    val6Desc: 'We maintain our quality standards at every stage from supply to service, striving to offer the best products in the best way.',
    menuPageTitle: 'Our Menu',
    menuPageDesc: 'Flavors for every taste. The most beloved menu on campus.',
    catHotCoffee: 'Hot Coffees',
    catColdCoffee: 'Cold Coffees',
    catHotDrinks: 'Hot Drinks',
    catDesserts: 'Desserts',
    catPastry: 'Pastry',
    catColdDrinks: 'Cold Drinks',
    catMeals: 'Meals',
    catSandwiches: 'Sandwiches',
    miEspresso: 'Espresso',
    miMachiatto: 'Espresso Machiato',
    miAmericano: 'Americano',
    miFilter: 'Filter Coffee',
    miLatte: 'Latte',
    miSyrupLatte: 'Syrup Lattes',
    miCappuccino: 'Cappuccino',
    miTurkish: 'Turkish Coffee',
    miFlatWhite: 'Flat White',
    miCortado: 'Cortado',
    miIcedAmericano: 'Iced Americano',
    miIcedLatte: 'Iced Latte',
    miIcedMocha: 'Iced Mocha',
    miColdBrew: 'Cold Brew',
    miFrappe: 'Frappe',
    miTea: 'Tea',
    miPackedTea: 'Packed Teas',
    miNescafe: 'Nescafe',
    miHotChoc: 'Hot Chocolate',
    miSahlep: 'Sahlep',
    miTrilece: 'Trilece',
    miEclair: 'Eclair',
    miCheesecake: 'Forest Fruit Cheesecake',
    miBrownie: 'Chocolate Brownie',
    miWhiteBrownie: 'White Chocolate Brownie',
    miPistachioCake: 'Pistachio Chocolate Cake',
    miRaspRoll: 'Raspberry Roll Cake',
    miBlackForest: 'Black Forest Cake',
    miMosaic: 'Mosaic Cake',
    miCroquant: 'Croquant Cake',
    miPogaca: 'Pastry',
    miBorek: 'Borek',
    miPlainSoda: 'Plain Soda',
    miFruitSoda: 'Fruit Soda',
    miCannedDrinks: 'Canned Drinks',
    miGazoz: 'Gazoz',
    miLemonade: 'Lemonade',
    miAyran: 'Ayran',
    miWater: 'Water',
    miSoup: 'Soup',
    miChickenRice: 'Chicken Rice + Ayran',
    miPasta: 'Pasta with Sauce',
    miDoner: 'Chicken Doner Plate',
    miFries: 'French Fries Plate',
    miConeFries: 'French Fries Cone',
    miSalad: 'Salads',
    miDonerBread: 'Doner Bread + Ayran',
    miKofteBread: 'Meatball Bread + Ayran',
    miNuggetBread: 'Nugget Bread + Ayran',
    miPatso: 'Patso + Ayran',
    miKumru: 'Kumru + Ayran',
    miSandwich: 'Sandwich + Ayran',
    miToast: 'Toast + Ayran',
    galleryPageTitle: 'Gallery',
    galleryPageDesc: 'Warm moments from our cafe. Click on photos to enlarge.',
    contactPageTitle: 'Contact Us',
    contactPageDesc: 'Feel free to reach out with your questions, suggestions or orders.',
    formNamePlace: 'Your Full Name',
    formEmailPlace: 'example@email.com',
    formSubjectPlace: 'Subject',
    formMessagePlace: 'Write your message...',
    formNameError: 'Please enter your name.',
    formEmailError: 'Please enter a valid email.',
    formSubject: 'Subject',
    formMessageError: 'Please enter your message.',
    formSubmit: 'Send Message',
    formSuccessTitle: 'Message Received!',
    formSuccessText: 'We will get back to you as soon as possible. Thank you.',
    contactAddressTitle: 'Address',
    contactPhoneTitle: 'Phone',
    contactEmailTitle: 'Email',
    contactHoursTitle: 'Working Hours',
    contactHours: 'Weekdays 07:30 - 19:00',
    socialTitle: 'Follow Us',
    footerDesc: 'A yellow break for gray campus days.',
    footerQuick: 'Quick Links',
    footerContact: 'Contact',
    footerHours: 'Working Hours',
    footerWeekdays: 'Weekdays: 07:30 - 19:00',
    footerWeekend: 'Saturday: 09:00 - 17:00',
    footerSunday: 'Sunday: Closed',
    footerRights: 'All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service'
  };

  /* ---------- Language + Theme helpers ---------- */
  function applyLang(l) {
    lang = l;
    var label = q('#langLabel');
    if (label) label.textContent = l.toUpperCase();
    q('html').setAttribute('lang', l === 'tr' ? 'tr' : 'en');
    var ogLocale = q('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', l === 'tr' ? 'tr_TR' : 'en_US');
    qa('[data-i18n]').forEach(function (e) {
      var k = e.getAttribute('data-i18n');
      if (langs[l] && langs[l][k]) e.textContent = langs[l][k];
    });
    qa('[data-i18n-placeholder]').forEach(function (e) {
      var k = e.getAttribute('data-i18n-placeholder');
      if (langs[l] && langs[l][k]) e.setAttribute('placeholder', langs[l][k]);
    });
    localStorage.setItem('mimoza-lang', l);
  }

  function applyTheme(t) {
    theme = t;
    q('html').setAttribute('data-theme', t);
    var icon = q('#themeIcon');
    if (icon) icon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('mimoza-theme', t);
  }

  /* ---------- Hamburger menu ---------- */
  var hamburgerBtn = q('#hamburgerBtn');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
      var nav = q('#mainNav');
      var isActive = nav.classList.toggle('active');
      this.setAttribute('aria-expanded', isActive);
      var icon = q('#hamburgerIcon');
      if (icon) icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
    });
  }

  qa('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        var nav = q('#mainNav');
        if (nav) nav.classList.remove('active');
        var btn = q('#hamburgerBtn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        var icon = q('#hamburgerIcon');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 768 && !e.target.closest('.header')) {
      var nav = q('#mainNav');
      if (nav) nav.classList.remove('active');
      var btn = q('#hamburgerBtn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      var icon = q('#hamburgerIcon');
      if (icon) icon.className = 'fas fa-bars';
    }
  });

  /* ---------- Theme toggle ---------- */
  var themeBtn = q('#themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      applyTheme(theme === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---------- Language toggle ---------- */
  var langBtn = q('#langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(lang === 'tr' ? 'en' : 'tr');
    });
  }

  /* ---------- Scroll reveal ---------- */
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          ro.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    qa('.sr-reveal').forEach(function (el) { ro.observe(el); });
  } else {
    qa('.sr-reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Scroll to top ---------- */
  var toTop = q('#toTopBtn');
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Restore preferences ---------- */
  var savedLang = localStorage.getItem('mimoza-lang') || 'tr';
  var savedTheme = localStorage.getItem('mimoza-theme') || 'light';
  applyLang(savedLang);
  applyTheme(savedTheme);

  if (!localStorage.getItem('mimoza-theme') && window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
    applyTheme('dark');
  }

})();
