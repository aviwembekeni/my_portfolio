import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Preloader from "./components/preloader/preloader.components";
import Navbar from "./components/navbar/navbar.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume";
// import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} />  */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
