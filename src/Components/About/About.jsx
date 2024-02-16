import React from 'react'
import { TiTick } from "react-icons/ti";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaCheck  } from "react-icons/fa";


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

                                <div className="d-flex flex-row gap-3 about-exp">
                                    <div className="p-2">
                                        <span><FaCheck  /></span>
                                    </div>
                                    <div className="p-2"><p className='m-0'>Web Development</p></div>
                                    <div className="p-2"> <span><FaCheck  /></span></div>
                                    <div className="p-2"><p className='m-0'>Detail-Oriented:</p></div>
                                </div>
                                <div className="d-flex flex-row gap-3 about-exp">
                                    <div className="p-2">
                                        <span><FaCheck  /></span>
                                    </div>
                                    <div className="p-2"><p className='m-0'>Client Satisfaction</p></div>
                                    <div className="p-2"> <span><FaCheck  /></span></div>
                                    <div className="p-2"><p className='m-0'>Product Design:</p></div>
                                </div>
                                <div className="contact-me-detil">
                                    <div className="about-info-box " style={{ visibility: 'visible' }}>
                                        <div className="info-box-item">
                                            <div className="icon">
                                                <IoMailOutline />
                                            </div>
                                            <div className="content">
                                                <span>Email Us</span>
                                                <br />
                                                <a href="mailto:support@gmail.com">shahmeerzubair299@gmail.com</a>
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