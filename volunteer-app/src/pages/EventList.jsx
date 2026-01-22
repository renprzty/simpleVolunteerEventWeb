// src/pages/EventList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../services/api";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Panggil API saat halaman dibuka
    getEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Tampilan saat Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Tampilan saat Error
  if (error) {
    return (
      <div className="text-center p-10 text-red-500">
        <p className="text-xl font-bold">Terjadi Kesalahan</p>
        <p>{error}</p>
      </div>
    );
  }

  // Tampilan Utama (Data Sukses)
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Volunteer Events 🤝
      </h1>
      
      {/* Grid Layout untuk Card */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h2>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <span className="mr-2">📅 {event.date}</span>
                <span>📍 {event.location}</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {event.description}
              </p>
              <Link 
                to={`/event/${event.id}`} 
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;