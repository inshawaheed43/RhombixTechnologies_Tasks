import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/cursor";

function App() {
  return (
   <>
   <Cursor/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects/>} />
        {/* <Route path="/navbar" element={<Navbar/>} /> */}
      </Routes>
    </>
  );
}

export default App;
