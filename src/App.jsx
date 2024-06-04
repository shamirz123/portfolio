import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ReactWhatsapp from "react-whatsapp";
import Navbar from "./Components/Navbar/Navbar";
import MobileNav from "./Components/MobileNavbar/MobileNavbar";
import "./Components/main.css"

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    this.setState({
      scrolled: scrolled,
    });
  };

  const progressBarStyle = {
    width: this.state.scrolled,
  };
  return (
    <Router>
      <div>
        <div className="progress-container">
          <div className="progress-bar" style={progressBarStyle} />
        </div>
        {isMobile ? <MobileNav /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
