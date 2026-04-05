# 📊 PulseFit Analytics

**Mata Kuliah:** Data Visualisasi Sistem Informasi  
**Institusi:** Universitas Klabat (UNKLAB)  
**Judul Proyek:** PulseFit Analytics - Dashboard Visualisasi Data Pusat Kebugaran  

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## 1. Latar Belakang & Deskripsi Proyek
Seiring dengan meningkatnya kesadaran masyarakat akan gaya hidup sehat, data metrik kesehatan dan aktivitas fisik kini memiliki nilai bisnis yang tinggi bagi manajerial pusat kebugaran (Gym). Proyek **"PulseFit Analytics"** dibuat untuk menyimulasikan *dashboard* manajerial yang membantu pemilik gym maupun *personal trainer* dalam mengambil keputusan berbasis data (Data-Driven Decision Making). 

Proyek ini mendemonstrasikan penyajian data dari aktivitas *workout member* ke dalam bentuk visualisasi yang modern, interaktif, dan mudah dianalisis. Pendekatan desain menggunakan konsep *Premium Dark Mode & Glassmorphism* guna memberikan *User Experience* (UX) setara aplikasi industri kelas atas, tanpa mengorbankan fungsionalitas dan kejelasan informasi.

## 2. Tech Stack (Teknologi yang Digunakan)
Untuk mencapai visual yang responsif dan performa tinggi secara interaktif, proyek ini dibangun dengan ekosistem teknologi modern:
*   **Framework Utama**: ReactJS
*   **Build Tool**: Vite (sangat cepat untuk *development server*)
*   **Bahasa Pemrograman**: TypeScript (*Type-safe programming*)
*   **Library Data Viz**: Recharts
*   **Styling**: Tailwind CSS v4 (Glassmorphism & Utility-first)
*   **Animasi**: Framer Motion
*   **Ikon**: Lucide React

## 3. Sumber Data (Data Source)
Data yang digunakan dalam proyek visualisasi ini adalah **Data Buatan Sendiri (Dummy Data)** yang dimodelkan secara terstruktur (menggunakan TypeScript Array & Object). Data ini menyimulasikan ekosistem gym dengan cakupan variabel:
*   Data profil dan total pengguna terdaftar (*Members*).
*   Catatan rekapan waktu sesi latian per tipe.
*   Total pembakaran kalori aktual bulanan/mingguan.
*   Distribusi kelas (Yoga, Cardio, Strength, HIIT).

## 4. Fitur Wajib & Visualisasi
Proyek ini memuat fungsionalitas visualisasi secara komprehensif, sesuai dengan format indikator ketuntasan nilai visualisasi:

### A. Key Performance Indicators (KPI)
Meringkas performa angka menjadi 4 kartu KPI utama:
- ✅ **Total Members** (*Total Data*): Total keseluruhan partisipan (1,245 user).
- ✅ **Avg. Duration** (*Rata-rata*): Angka rata-rata rentang durasi sesi latian (45 Ment).
- ✅ **Calories Burned** (*Statistik Penting*): Statistik total kinerja metabolik pengguna.
- ✅ **Goal Completion Rate** (*Statistik Penting*): Presentase pencapaian metrik harian.

### B. Jenis Visualisasi Data Wajib
- 📈 **Line Chart (Tren)**: Menyimulasikan pola tren kalori terbakar setiap harinya. Memvalidasi bahwa pembakaran tertinggi ada di setiap menjelang dan sepanjang akhir pekan.
- 📊 **Bar Chart (Perbandingan)**: Mengomparasikan *Average Duration* dari satu tipe *workout* ke hari lainnya (Durasi rata-rata anggota paling memakan waktu/naik drastis di hari Sabtu).
- 🥧 **Pie Chart (Distribusi)**: Menunjukkan persentase segmentasi demografi tipe program (*Strength Training* mendominasi porsi Pie yang ada).
- 📑 **Data Table**: Menampilkan arsip/riwayat rekaman aktivitas *Recent Workout Sessions* para anggota dalam format grid baris matriks.

## 5. Ringkasan Ekstraksi Insight Panel
Berdasarkan visualisasi yang telah berjalan dan diolah, dashboard ini menjawab otomatis setiap temuan dalam fitur *"Insights Data"*:

- **Insight Utama**: Terdapat perilaku komunal di mana aktivitas gym secara general *(kalori dan waktu luang durasi)* melonjak sangat drastis pada titik di setiap hari Sabtu serta Minggu.
- **Tren Terlihat**: Distribusi dominasi (*Pie Chart*) sangat terpusat pada latihan beban (Strength Training) dengan 45% *market share*, berbeda jauh dibandingkan cardio atau HIIT.
- **Rekomendasi Manajerial**: Pihak manajemen direkomendasikan mengadakan kelas eksklusif untuk *Strength Training* dan menaikkan persediaan penjualan suplemen protein di akhir pekan agar meraup pendapatan ritel di hari keramaian.

---

### Cara Menjalankan Secara Lokal
```bash
# 1. Instal seluruh dependency proyek
npm install

# 2. Jalankan server lokal
npm run dev
```
