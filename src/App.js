import { Routes, Route } from "react-router-dom";
import Appointment from "./pages/Home/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
