import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
