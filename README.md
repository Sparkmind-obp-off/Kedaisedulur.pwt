# Kedai Sedulur Kalibener — Demo

## Project Overview

Demo landing page Editorial untuk Kedai Sedulur Kalibener. Situs menampilkan suasana kedai, menu representatif dengan harga yang terbaca dari sumber, rating Google 5.0 dari 139 review, serta informasi lokasi yang belum diklaim melebihi data terverifikasi.

## Completed Features

- Landing page Editorial responsif untuk desktop dan mobile
- Hero, cerita kedai, galeri suasana, pilihan menu, lokasi, dan CTA Google Maps
- API metadata publik di `/api/site`
- Aset gambar lokal teroptimasi dalam format WebP
- Dukungan reduced motion dan semantic HTML
- Placeholder eksplisit untuk informasi yang belum terverifikasi

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

Buka halaman utama, gulir untuk melihat cerita, suasana, pilihan menu, dan lokasi. Gunakan tautan Google Maps untuk mencari listing terbaru sebelum berkunjung.

## Verification Pending / Not Yet Implemented

- Jam operasional perlu dikonfirmasi langsung
- Alamat detail dan kecamatan perlu dikonfirmasi karena sumber yang tersedia berbeda
- Handle sosial `@kedaisedulur.pwt` perlu diverifikasi manual sebelum ditampilkan sebagai kanal kontak publik
- Event dan testimoni tertulis tidak ditampilkan sampai tersedia sumber asli
- Form booking atau kontak tidak termasuk ruang lingkup demo

## Recommended Next Steps

1. Konfirmasi jam operasional dengan pemilik.
2. Konfirmasi alamat lengkap dan kecamatan.
3. Verifikasi handle sosial resmi.
4. Minta izin pemakaian foto bila demo akan dipublikasikan sebagai portofolio terbuka.

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
