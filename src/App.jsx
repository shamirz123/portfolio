import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ReactWhatsapp from 'react-whatsapp';

function App() {
  return (
    <Router>
      <div>
      <ReactWhatsapp number="+92 3115386005" message="Hello World!!!" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
