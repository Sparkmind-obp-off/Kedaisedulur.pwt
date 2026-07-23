# Kedai Sedulur Kalibener — Demo

## Project Overview

Demo landing page Editorial untuk Kedai Sedulur Kalibener. Situs menampilkan suasana kedai, menu representatif dengan harga yang terbaca dari sumber, rating Google 5.0 dari 139 review, alamat lengkap, jam operasional yang sudah tersedia, serta CTA WhatsApp publik.

## Completed Features

- Landing page Editorial responsif untuk desktop dan mobile
- Hero, cerita kedai, galeri suasana, pilihan menu, alamat lengkap, jam operasional, CTA Google Maps, dan CTA WhatsApp
- API metadata publik di `/api/site`
- Aset gambar lokal teroptimasi dalam format WebP
- Dukungan reduced motion dan semantic HTML
- Placeholder eksplisit untuk jam operasional hari Rabu yang masih perlu dikonfirmasi

## Functional URIs

- `/` — landing page utama
- `/api/site` — metadata dasar kedai dalam JSON
- `/static/style.css` — stylesheet utama
- `/static/app.js` — progressive reveal behavior
- `/static/images/*` — aset galeri teroptimasi
- `/favicon.ico` — respons kosong 204

## Data Architecture

- **Data model:** metadata kedai dan konten halaman disimpan sebagai source-controlled static content
- **Storage:** tidak menggunakan database; seluruh aset runtime dibundel saat build
- **Data flow:** Hono merender HTML/API di Cloudflare Pages Functions dan Cloudflare menyajikan aset statis

## User Guide

Buka halaman utama, gulir untuk melihat cerita, suasana, pilihan menu, alamat, dan jam operasional. Gunakan tombol WhatsApp untuk menghubungi kedai atau tautan Google Maps untuk membuka lokasi.

## Verification Pending / Not Yet Implemented

- Jam operasional hari Rabu perlu dikonfirmasi ulang; hari lain ditampilkan sesuai data terbaru
- Handle sosial `@kedaisedulur.pwt` perlu diverifikasi manual sebelum ditampilkan sebagai kanal kontak publik
- Event dan testimoni tertulis tidak ditampilkan sampai tersedia sumber asli
- Form booking atau kontak tidak termasuk ruang lingkup demo

## Recommended Next Steps

1. Konfirmasi jam operasional hari Rabu dengan pemilik.
2. Verifikasi handle sosial resmi.
3. Minta izin pemakaian foto bila demo akan dipublikasikan sebagai portofolio terbuka.

## URLs

- **Production:** https://kedai-sedulur-demo.pages.dev
- **Deployment snapshot:** https://14b42633.kedai-sedulur-demo.pages.dev
- **GitHub:** https://github.com/Sparkmind-obp-off/Kedaisedulur.pwt

## Deployment

- **Platform:** Cloudflare Pages (BYOK)
- **Project:** `kedai-sedulur-demo`
- **Production branch:** `main`
- **Stack:** Hono + TypeScript + Vite
- **Status:** aktif; endpoint dan regression check production lulus
- **Deployed:** 2026-07-23
- **Last updated:** 2026-07-23
