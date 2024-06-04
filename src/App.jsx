import React, { useEffect, useState  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ReactWhatsapp from 'react-whatsapp';
import Navbar from './Components/Navbar/Navbar';
import MobileNav from './Components/MobileNavbar/MobileNavbar';

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
  return (
    <Router>
      <div>
        {isMobile ? <MobileNav /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
