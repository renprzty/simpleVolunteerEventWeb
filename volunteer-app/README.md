# Volunteer Event App

Aplikasi frontend sederhana untuk melihat dan mendaftar event volunteer.

## Tech Stack
- React.js (Vite)
- Tailwind CSS
- React Router DOM

## Cara Menjalankan Project
1. Clone repository ini.
2. Buka terminal, jalankan `npm install`.
3. Jalankan `npm run dev`.
4. Buka `http://localhost:5173`.

## Struktur Folder
- `src/components`: Komponen UI reusable (Button, Card, dll).
- `src/pages`: Halaman utama aplikasi (List & Detail).
- `src/services`: Logika fetch API terpusat.

## Jawaban Pertanyaan Wajib
**1. Bagian tersulit apa dari sisi frontend?**
 Menangani state manajemen yang asinkron, seperti memastikan user mendapat feedback (loading/error) yang tepat saat API sedang dipanggil atau mengalami kegagalan, serta menjaga layout tetap responsif di berbagai ukuran layar.

**2. Jika diberi waktu 1 minggu, apa yang akan kamu tingkatkan?**
 Saya akan mengimplementasikan TypeScript untuk keamanan tipe data, menambahkan Unit Testing (Vitest/Jest) untuk memastikan fitur berjalan benar, serta membuat custom hook (useFetch) agar kode di komponen lebih bersih.

**3. Asumsi UX apa yang kamu ambil?**
 Saya berasumsi bahwa user membutuhkan feedback visual instan. Oleh karena itu, saya menonaktifkan tombol "Join" saat proses sedang berjalan (loading state) untuk mencegah double-submit, dan memberikan notifikasi alert sederhana sebagai konfirmasi status.