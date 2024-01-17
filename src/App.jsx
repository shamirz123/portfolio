import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
// import VideoBackground from './Components/backgroundvideo/Background-video';

function App() {
  return (
    <Router>
      <div>
        {/* <VideoBackground/> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
