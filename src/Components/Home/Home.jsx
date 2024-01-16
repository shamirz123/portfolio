import React from 'react';
import '../../Components/main.css'
import Navbar from '../Navbar/Navbar';
function Home() {
    return (
        <>
        <Navbar/>
        <div className="video-container">
                <video autoPlay loop muted>
                    <source src="/assets/bgvideo/bg-mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="main">
            </div>
        </>
    )
}

export default Home