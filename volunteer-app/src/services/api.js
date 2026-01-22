// src/services/api.js

// Simulasi delay agar terasa seperti fetch API beneran
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Data Mock (Pura-pura dari database)
// src/services/api.js (Bagian MOCK_EVENTS saja)

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Bersih Pantai Ancol",
    date: "2023-12-10",
    location: "Pantai Ancol, Jakarta",
    description: "Bergabunglah bersama kami untuk membersihkan sampah plastik di area pantai. Tersedia snack dan sertifikat.",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    title: "Mengajar Anak Jalanan",
    date: "2023-12-15",
    location: "Kota Tua, Jakarta",
    description: "Berbagi ilmu matematika dasar dan bahasa Inggris untuk anak-anak kurang mampu. Materi sudah disiapkan.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    // LINK GAMBAR BARU DI BAWAH INI
    title: "Penanaman 1000 Pohon",
    date: "2023-12-20",
    location: "Hutan Kota Srengseng",
    description: "Aksi penghijauan kota untuk mengurangi polusi udara. Bawa botol minum sendiri ya!",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=500"
  }
];

// (Sisanya fungsi getEvents, getEventDetail, joinEvent di bawahnya biarkan saja)0

export const getEvents = async () => {
  await delay(1000); // Tunggu 1 detik (Loading state)
  // Simulasi jika error (bisa di-uncomment untuk tes error state)
  // if (Math.random() < 0.1) throw new Error("Gagal mengambil data server");
  
  return MOCK_EVENTS;
};

export const getEventDetail = async (id) => {
  await delay(800);
  const event = MOCK_EVENTS.find((e) => e.id === Number(id));
  if (!event) throw new Error("Event tidak ditemukan");
  return event;
};

export const joinEvent = async (id) => {
  await delay(1500); // Simulasi proses daftar
  return { success: true, message: "Berhasil mendaftar!" };
};