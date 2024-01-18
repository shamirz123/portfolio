import React from 'react';
import '../../Components/main.css'
import Navbar from '../Navbar/Navbar';
import { MdNavigateNext } from "react-icons/md";
import About from '../About/About';
function Home() {
    return (
        <>
            <Navbar />

            <div className="container">
                <section className='introduction-section mb-3'>
                    <div className='row'>
                        <div className="col-lg-4 col-sm-12 col-md-12">
                            <h3 className='animated-text'>Hello, i'm</h3>
                            <h1 className='animated-text'>SHAHMEER ZUBAIR</h1>
                            <h4 className=''>Web Developer</h4>
                            <p>As a web developer, I am driven by a passion for creating innovative and user-friendly digital experiences. With a keen eye for detail and a commitment to excellence, I transform ideas into well-crafted, responsive websites that leave a lasting impression.</p>
                            <div className="hireme-btn">
                                <button>Hire me</button>
                                <button className='resume-btn'>
                                    <u>Download resume</u> <i className="icon"><MdNavigateNext /></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-md-6">
                            {/* <img src="/assets/img/profile-img.png" style={{ width: '550px', zIndex: '9999', position: "relative" }} alt="" /> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="">
                                <div className='experience-section'>
                                    <h2>3+</h2>
                                    <p>Years Of Experience</p>
                                    <hr style={{ width: '210px', opacity: "1", color: "#FFF" }} />
                                    <h2>50+</h2>
                                    <p>Project Complete</p>
                                    <hr style={{ width: '210px', opacity: "1", color: "#FFF" }} />
                                    <h2>99% +</h2>
                                    <p>Client Satisfactions</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className='About-us-Section'>
                <About />
            </section>

        </>
    )
}

export default Home