import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventDetail, joinEvent } from "../services/api";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joining, setJoining] = useState(false); // State untuk loading tombol join

  useEffect(() => {
    // Scroll ke atas saat halaman dibuka
    window.scrollTo(0, 0);
    
    getEventDetail(id)
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleJoin = async () => {
    // UX Logic: Cegah double click saat sedang loading
    if (joining) return;

    // UX Logic: Konfirmasi sebelum join
    if (!window.confirm("Apakah kamu yakin ingin mendaftar event ini?")) return;

    setJoining(true);
    try {
      const result = await joinEvent(id);
      alert(`✅ Sukses: ${result.message}`);
    } catch (err) {
      alert("❌ Gagal mendaftar, silakan coba lagi.");
    } finally {
      setJoining(false);
    }
  };

  // State Loading
  if (loading) return <div className="text-center p-10 mt-10">Mengambil data event...</div>;
  
  // State Error
  if (error) return (
    <div className="text-center p-10 mt-10 text-red-500">
      <h2 className="text-2xl font-bold">Event Tidak Ditemukan</h2>
      <button onClick={() => navigate("/")} className="mt-4 underline">Kembali ke Beranda</button>
    </div>
  );

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Tombol Back */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center text-gray-600 hover:text-blue-600 transition"
      >
        ⬅ Kembali
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Gambar Banner */}
        <div className="h-64 w-full overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-gray-600 my-4 text-sm font-medium">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
              📅 {event.date}
            </span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100">
              📍 {event.location}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {event.description}
          </p>

          {/* Bagian Tombol Join */}
          <div className="border-t pt-6">
            <button
              onClick={handleJoin}
              disabled={joining}
              className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-md transition-all transform active:scale-95 ${
                joining 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
              }`}
            >
              {joining ? "Sedang Mendaftar..." : "Gabung Event Sekarang"}
            </button>
            <p className="text-center text-gray-400 text-sm mt-3">
              *Kuota terbatas, segera daftarkan dirimu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;