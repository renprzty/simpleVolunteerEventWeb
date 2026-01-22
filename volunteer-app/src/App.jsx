import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from "./pages/EventList";
import EventDetail from "./pages/EventDetail"; // <-- Import ini

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Routes>
          {/* Route Utama */}
          <Route path="/" element={<EventList />} />
          
          {/* Route Detail (Dinamis berdasarkan ID) */}
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;