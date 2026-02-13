import { Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Degree from "./pages/Degree";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <TopNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/degree" element={<Degree />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
