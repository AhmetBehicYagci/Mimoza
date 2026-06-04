# Mimoza Kafe — Kampüsün Sarı Molası 🌼

Uludağ Üniversitesi kampüsünde hizmet veren Mimoza Kafe'nin kurumsal web sitesi.

**Canlı Site:** [resonant-frangollo-cd8391.netlify.app](https://resonant-frangollo-cd8391.netlify.app)

---

## Özellikler

| Özellik | Açıklama |
|---------|----------|
| 5 Sayfa | Anasayfa, Kurumsal, Menü, Galeri, İletişim |
| Duyarlı Tasarım | Mobil, tablet, masaüstü (Flexbox + Grid) |
| Çift Dil | Türkçe / İngilizce (JS ile dinamik çeviri) |
| Karanlık Mod | Sistem tercihine göre otomatik veya manuel |
| Formspree | Çalışan iletişim formu |
| Google Analytics | Site trafik takibi (GA4) |
| Galeri Lightbox | Fotoğrafları büyütme, klavye navigasyonu |
| Menü Kategorileri | Sidebar sekmelerle ürün grupları |
| Scroll Animasyonu | IntersectionObserver ile görünürlük efektleri |
| Erişilebilirlik | Skip link, ARIA etiketleri, klavye desteği |
| SEO | Open Graph, Twitter Card, semantic HTML5 |

## Performans

- **Lighthouse Mobil:** 99
- **Lighthouse Masaüstü:** 96

## Kullanılan Teknolojiler

- **HTML5** — Semantic markup, ARIA accessibility
- **CSS3** — Custom properties, CSS Grid, Flexbox, responsive design
- **JavaScript (Vanilla)** — DOM manipulation, IntersectionObserver, localStorage
- **Formspree** — Form backend
- **Google Analytics 4** — Site analytics
- **Netlify** — Deployment & hosting
- **Font Awesome** — Icons
- **Google Fonts** — Playfair Display & Inter
- **Sharp** — Image optimization

## Proje Yapısı

```
mimoza-kafe/
├── index.html          # Anasayfa
├── kurumsal.html       # Kurumsal / Hakkımızda
├── menu.html           # Menü sayfası
├── galeri.html         # Fotoğraf galerisi
├── iletisim.html       # İletişim formu
├── css/
│   ├── ortak.css       # Ortak stiller (header, footer, vb.)
│   ├── anasayfa.css    # Anasayfa stilleri
│   ├── menu.css        # Menü stilleri
│   ├── galeri.css      # Galeri stilleri
│   ├── iletisim.css    # İletişim stilleri
│   └── kurumsal.css    # Kurumsal stilleri
├── js/
│   ├── ortak.js        # Ortak JS (dil, tema, navigasyon)
│   ├── menu.js         # Menü kategori geçişi
│   ├── galeri.js       # Lightbox işlemleri
│   └── iletisim.js     # Form doğrulama + gönderme
├── images/             # WebP formatında görseller
├── netlify.toml        # Netlify yapılandırması
└── README.md
```

## Kurulum

Projeyi yerelde çalıştırmak için:

```bash
git clone https://github.com/AhmetBehicYagci/Mimoza.git
cd Mimoza
# Doğrudan index.html'i tarayıcıda açın
```

## Canlıya Alma

Site [Netlify](https://www.netlify.com/) üzerinden otomatik deploy edilmektedir. `main` branch'ine push yapıldığında Netlify otomatik olarak günceller.

---

**Geliştirici:** Ahmet Behiç Yağcı
**Dönem:** 2025-2026
