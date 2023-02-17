import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About/About";
import About1 from "./pages/About/About1";
import About2 from "./pages/About/About2";
import About3 from "./pages/About/About3";
import About4 from "./pages/About/About4";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Routes>
        <Route index exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about1" element={<About1 />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about3" element={<About3 />} />
        <Route path="/about4" element={<About4 />} />
      </Routes>
    </div>
  );
}

export default App;
