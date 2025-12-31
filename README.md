# Nova Holistic Hub 🌿
> **Innovative Clinics: Blending Creativity and Technology for Quality Healthcare.**
> *Dikembangkan untuk Lomba Desain Web UNIPRO 2025*

## 📋 Executive Summary
**Nova Holistic Hub** adalah platform kesehatan digital berbasis web (Web-Based App) yang dirancang untuk merevolusi pengalaman pasien di klinik modern. Aplikasi ini memecahkan masalah antrean konvensional dan diagnosis satu dimensi dengan pendekatan **Holistic Health**—mengintegrasikan data medis fisik dengan kondisi psikologis pasien.

Dibangun dengan arsitektur **Single Page Application (SPA)** murni tanpa reload, aplikasi ini menawarkan performa tinggi dengan logika bisnis yang dijalankan sepenuhnya di sisi klien (*Client-Side Processing*).

## 🚀 Fitur Unggulan & Inovasi

### 1. 🧬 Interactive Body Map (Edu-Tech)
**[New Feature]** Visualisasi anatomi tubuh manusia berbasis **Advanced SVG Manipulation**.
- **Fitur:** Pengguna dapat berinteraksi dengan titik vital tubuh (Kepala, Jantung, Lambung) untuk mendapatkan edukasi medis.
- **Inovasi:** Mengubah data medis statis menjadi pengalaman visual interaktif yang menghubungkan gejala fisik dengan akar masalah mental (*Mind-Body Connection*).

### 2. ⏳ Auto-Locking Queue System (Smart Logic)
**[New Feature]** Sistem manajemen antrean mandiri dengan algoritma **System-Based Locking**.
- **Mekanisme:** Menggunakan `LocalStorage` untuk mengunci sesi pengguna. Saat pengguna mengambil antrean, sistem otomatis mengaktifkan "Mode Terapi".
- **Anti-Spam:** Mencegah pengambilan antrean ganda (Double Booking) dengan mematikan akses tombol hingga durasi terapi selesai, bahkan jika browser di-refresh.

### 3. 🛒 Multi-Select Service Calculator
**[New Feature]** Kalkulator estimasi biaya cerdas dengan sistem seleksi kartu (*Card Selection*).
- **Fleksibilitas:** Memungkinkan pengguna memilih kombinasi layanan majemuk (Multi-services) sekaligus.
- **Logika Bisnis:** Otomatis menghitung diskon kompleks berdasarkan metode bayar:
  - **BPJS:** Otomatis kalkulasi biaya admin (15% dari total).
  - **Asuransi Swasta:** Cover 50% biaya.
  - **Tunai/QRIS:** Harga normal.

### 4. 🧠 AI Symptom Analysis (Triage Simulation)
Algoritma triase yang mensimulasikan diagnosa dokter umum.
- **Input:** Menganalisis korelasi antara keluhan fisik (e.g., *Gigi Gemeretak*) dengan kondisi mental (e.g., *Stres Kerja*).
- **Output:** Memberikan rekomendasi poli spesialis yang tepat (e.g., Dokter Gigi Spesialis TMJ) dan tingkat urgensi penanganan.

### 5. 💨 Digital Breathing Therapy
Modul relaksasi digital terintegrasi.
- **Fungsi:** Membantu menurunkan tingkat kortisol pasien saat menunggu antrean.
- **Teknologi:** Animasi CSS Keyframes presisi untuk memandu ritme napas 4-4 detik.

## 🛠️ Stack Teknologi
Dikembangkan dengan pendekatan **Native First**:

- **Core:** HTML5 Semantic & Vanilla JavaScript (ES6+).
- **Styling:** Tailwind CSS (via CDN) untuk Utility-First Design yang responsif.
- **Persistence:** Browser LocalStorage API (sebagai pengganti Database Backend untuk persistensi data antrean).
- **Assets:** FontAwesome 6 (Icons) & Google Maps Embed API.

## 📂 Struktur Proyek
```text
/
├── index.html          # Struktur SPA & Layout Utama
├── script.js           # Core Logic (Queue Locking, Triage Algo, Calculator)
├── style.css           # Custom Animations & Glassmorphism Effects
├── nafas-manual.mp3    # Aset Audio Terapi Pernapasan
└── README.md           # Dokumentasi Teknis
```

## 👨‍💻 Tim Pengembang
**Team Smartone Care** - SMKS ANTARTIKA 1 SIDOARJO
1. **Rayhan Alif Pratama**
2. **Moch Fajri Harianto** 
3. **Restu Candra Novianto** 

---
*© 2025 Nova Holistic Hub. All Rights Reserved.*
