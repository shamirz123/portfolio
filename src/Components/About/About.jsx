import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";


function About() {
    return (
        <>
            <div className="container">
                <div className='about-me '>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-13">
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
                            </div>
                            <div className="contact-me-detil">
                                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s" style={{ visibility: 'visible' }}>
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
                                {/* <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <img src="/assets/phone.png" alt="" />
                                            </div>
                                            <div className="col-lg-9">
                                                <p>Email Me:</p>
                                                <span>rajashamir383@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className='contacts d-flex'>
                                    <img src="/assets/email.png" alt="" />
                                    <div>
                                        <h6 >Email Us</h6>
                                        <p className='mt-0 mb-0'>rajashamir383@gmail.com</p>
                                    </div>
                                    <img src="/assets/phone.png" alt="" className='ml-5' />
                                    <div>
                                        <h6 >Email Us</h6>
                                        <p className='mt-0 mb-0'>+92 3115386005</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-13"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About