import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";


function About() {
    return (
        <>
            <div id='about' className="container">
                <div className='about-me '>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-13">
                            <div className='p-4'>
                                <h3>About Me</h3>
                                <h1>Crafting Effective Solutions for Digital Challenges in <span>Web Development</span> </h1>
                                <p>Passionate web developer with a keen eye for detail. Transforming ideas into captivating digital experiences. Let's create something extraordinary together.</p>

                                <div className='about-exp d-flex'>
                                    <p><span><TiTick /></span>Web Development</p>
                                    <p className='ml-5 pl-5'><span><TiTick /></span>Detail-Oriented:</p>
                                </div>
                                <div className='about-exp d-flex'>
                                    <p><span><TiTick /></span>Client Satisfaction:</p>
                                    <p className='ml-5 pl-5'><span><TiTick /></span>Product Design</p>
                                    <div class="dot-shape ml-5 pl-5"><img src="assets/img/about-dot.png" alt="Shape"/></div>
                                </div>
                                <div className="contact-me-detil">
                                    <div className="about-info-box mt-5 wow fadeInUp delay-0-2s" style={{ visibility: 'visible' }}>
                                        <div className="info-box-item">
                                            <div className="icon">

                                                <IoMailOutline />
                                            </div>
                                            <div className="content">
                                                <span>Email Us</span>
                                                <br />
                                                <a href="mailto:support@gmail.com">rajashamir383@gmail.com</a>
                                            </div>
                                        </div>
                                        <div className="info-box-item">

                                            <div className="icon">
                                                <LuPhone />
                                            </div>
                                            <div className="content">
                                                <span>Make A Call</span>
                                                <br />
                                                <a href="tel:+000(123)45688">+92 3115386005</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="col-lg-6 col-md-12 col-sm-13">
                            <img className='coder-gif-img' alt="Coder GIF" src="https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/coding-freak.gif" />
                            
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default About