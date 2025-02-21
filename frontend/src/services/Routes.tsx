import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Experience from "../pages/Experience";
// import Skills from "../pages/Skills";
// import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
// const Contact = lazy(() => import('./pages/Contact'));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
