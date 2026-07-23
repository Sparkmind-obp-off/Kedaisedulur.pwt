import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))
app.get('/favicon.ico', (c) => c.body(null, 204))

app.get('/api/site', (c) => c.json({
  name: 'Kedai Sedulur Kalibener',
  rating: 5.0,
  reviewCount: 139,
  address: 'Jl. Kalibener No.55, RT.005/RW.003, Kalibener, Kranji, Kec. Purwokerto Timur, Kabupaten Banyumas, Jawa Tengah 53116',
  hours: {
    monday: 'Tutup',
    tuesday: '11.00–24.00',
    wednesday: 'Perlu dikonfirmasi',
    thursdayToSunday: '11.00–24.00'
  },
  whatsapp: 'https://wa.me/6285385308852'
}))

app.get('/', (c) => c.html(`<!doctype html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Kedai Sedulur Kalibener — ruang hangat untuk makan dan berkumpul di Kalibener, Purwokerto.">
  <meta name="theme-color" content="#f5efe5">
  <title>Kedai Sedulur Kalibener — Demo Editorial</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="Kembali ke atas">
      <span class="brand-mark">KS</span>
      <span>Kedai Sedulur</span>
    </a>
    <nav class="main-nav" aria-label="Navigasi utama">
      <a href="#cerita">Cerita</a>
      <a href="#suasana">Suasana</a>
      <a href="#menu">Menu</a>
      <a href="#lokasi">Lokasi</a>
    </nav>
    <a class="header-cta" href="#lokasi">Temukan kedai <span aria-hidden="true">↘</span></a>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <p class="hero-kicker reveal">Kedai lokal · Kalibener, Purwokerto</p>
      <h1 id="hero-title" class="hero-title reveal">Ruang hangat<br>untuk para <em>sedulur.</em></h1>
      <div class="hero-foot reveal">
        <p class="hero-lede">Kayunya terbuka, lampunya temaram, dan mejanya selalu punya ruang untuk cerita yang baru.</p>
        <aside class="rating-card" aria-label="Rating Google">
          <span class="rating-score">5.0</span>
          <span class="rating-stars" aria-label="5 dari 5 bintang">★★★★★</span>
          <span class="rating-copy">dari 139 review Google</span>
        </aside>
      </div>
      <figure class="hero-image reveal">
        <img src="/static/images/night.webp" alt="Suasana malam Kedai Sedulur dengan lampu gantung yang hangat" width="1200" height="700">
        <figcaption><span>01</span> Hangat setelah matahari pulang.</figcaption>
      </figure>
    </section>

    <section class="story-section" id="cerita" aria-labelledby="story-title">
      <header class="section-heading reveal">
        <p class="section-number">01 / Cerita</p>
        <h2 id="story-title">Kenapa orang datang,<br><em>lalu kembali lagi.</em></h2>
      </header>
      <div class="story-grid">
        <article class="story-card reveal">
          <span class="story-index">A</span>
          <h3>Hangat tanpa dibuat-buat</h3>
          <p>Ruang kayu terbuka dan lampu gantung berwarna hangat membentuk suasana yang santai, baik siang maupun malam.</p>
        </article>
        <article class="story-card reveal">
          <span class="story-index">B</span>
          <h3>Meja untuk ramai-ramai</h3>
          <p>Foto-foto pengunjung menunjukkan kedai ini akrab dengan obrolan panjang dan kumpul bersama. Rating 5.0 dari 139 review menguatkan basis pelanggan yang loyal.</p>
        </article>
        <article class="story-card reveal">
          <span class="story-index">C</span>
          <h3>Lengkap, tetap terjangkau</h3>
          <p>Dari nasi goreng sampai cemilan, pilihannya cukup lengkap untuk satu meja dengan selera berbeda. Menu makanan dimulai dari Rp15.000.</p>
        </article>
      </div>
    </section>

    <section class="gallery-section" id="suasana" aria-labelledby="gallery-title">
      <header class="section-heading gallery-heading reveal">
        <p class="section-number">02 / Suasana</p>
        <h2 id="gallery-title">Satu kedai,<br><em>banyak cara berkumpul.</em></h2>
      </header>
      <div class="gallery-grid">
        <figure class="gallery-item gallery-primary reveal">
          <img src="/static/images/group.webp" alt="Sekelompok pengunjung berkumpul di meja Kedai Sedulur" loading="lazy">
          <figcaption>Kumpul rame-rame, tanpa perlu buru-buru pulang.</figcaption>
        </figure>
        <figure class="gallery-item reveal">
          <img src="/static/images/day.webp" alt="Interior siang Kedai Sedulur dengan meja kayu dan ruang terbuka" loading="lazy">
          <figcaption>Ruang terbuka yang nyaman di siang hari.</figcaption>
        </figure>
        <figure class="gallery-item reveal">
          <img src="/static/images/courtyard.webp" alt="Area halaman Kedai Sedulur dengan meja panjang dan kerikil" loading="lazy">
          <figcaption>Sudut luar untuk obrolan yang lebih santai.</figcaption>
        </figure>
        <figure class="gallery-item gallery-wide reveal">
          <img src="/static/images/sign.webp" alt="Dinding hijau dan papan nama Kedai Sedulur" loading="lazy">
          <figcaption>Dinding hijau, kayu lama, dan identitas yang terasa dekat.</figcaption>
        </figure>
      </div>
    </section>

    <section class="menu-section" id="menu" aria-labelledby="menu-title">
      <header class="section-heading reveal">
        <p class="section-number">03 / Pilihan menu</p>
        <h2 id="menu-title">Yang sederhana,<br><em>selalu punya tempat.</em></h2>
      </header>
      <div class="menu-layout">
        <aside class="menu-intro reveal">
          <p class="menu-quote">“Datang untuk makan, tinggal lebih lama karena suasana.”</p>
          <p>Empat pilihan berikut diambil dari foto daftar menu yang tersedia. Harga cemilan dan minuman tidak ditampilkan sampai sumbernya dapat dibaca dengan pasti.</p>
          <figure class="menu-photo">
            <img src="/static/images/food.webp" alt="Hidangan nasi dan lauk di Kedai Sedulur" loading="lazy">
            <figcaption>Salah satu sajian yang dibagikan pengunjung.</figcaption>
          </figure>
        </aside>
        <div class="menu-list" aria-label="Menu makanan terpilih">
          <article class="menu-item reveal">
            <div><span class="menu-no">01</span><h3>Nasi Goreng Telur</h3></div>
            <p>Rp15.000</p>
          </article>
          <article class="menu-item reveal">
            <div><span class="menu-no">02</span><h3>Ayam Geprek</h3></div>
            <p>Rp17.000</p>
          </article>
          <article class="menu-item reveal">
            <div><span class="menu-no">03</span><h3>Ricebowl Chicken Crispy</h3><small>Pilihan sambal matah, sambal bawang, atau BBQ.</small></div>
            <p>Rp18.000</p>
          </article>
          <article class="menu-item reveal">
            <div><span class="menu-no">04</span><h3>Nasi Goreng Spesial</h3></div>
            <p>Rp20.000</p>
          </article>
          <p class="menu-disclaimer">Harga berdasarkan foto menu yang tersedia dan dapat berubah. Konfirmasi langsung ke kedai sebelum memesan.</p>
        </div>
      </div>
    </section>

    <section class="location-section" id="lokasi" aria-labelledby="location-title">
      <header class="section-heading location-heading reveal">
        <p class="section-number">04 / Datang berkunjung</p>
        <h2 id="location-title">Sampai jumpa<br><em>di Kalibener.</em></h2>
      </header>
      <div class="location-grid">
        <article class="location-card reveal">
          <p class="location-label">Alamat</p>
          <h3>Kalibener,<br>Purwokerto Timur</h3>
          <p class="verification-note">Jl. Kalibener No.55, RT.005/RW.003, Kalibener, Kranji, Kec. Purwokerto Timur, Kabupaten Banyumas, Jawa Tengah 53116.</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Kalibener+No.55+Kalibener+Kranji+Purwokerto+Timur" target="_blank" rel="noreferrer">Buka di Google Maps <span aria-hidden="true">↗</span></a>
        </article>
        <article class="hours-card reveal">
          <p class="location-label">Jam operasional</p>
          <div class="pending-stamp">Rabu perlu dikonfirmasi</div>
          <p><strong>Selasa & Kamis–Minggu: 11.00–24.00</strong><br>Senin: Tutup</p>
        </article>
      </div>
    </section>

    <section class="closing-section" aria-labelledby="closing-title">
      <p class="closing-kicker reveal">Sedulur berarti keluarga</p>
      <h2 id="closing-title" class="reveal">Satu meja.<br><em>Banyak cerita.</em></h2>
      <p class="closing-copy reveal">Tanya menu, jam buka, atau rencana kedatangan langsung melalui WhatsApp Kedai Sedulur.</p>
      <a class="closing-link reveal" href="https://wa.me/6285385308852" target="_blank" rel="noreferrer">Chat via WhatsApp <span aria-hidden="true">↗</span></a>
    </section>
  </main>

  <footer class="site-footer">
    <p>Kedai Sedulur Kalibener</p>
    <p>Demo konsep oleh SparkStudioLab · 2026</p>
  </footer>

  <script src="/static/app.js" defer></script>
</body>
</html>`))

export default app
