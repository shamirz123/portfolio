import React, { useState, useEffect } from 'react';
import '../../Components/main.css'
import Navbar from '../Navbar/Navbar';
import { MdNavigateNext } from "react-icons/md";
import About from '../About/About';
import Services from '../Servics/Services';
import Skill from '../Skills/Skill';
import Testimonial from '../Testimonial/Testimonial';
import Project from '../Projects/Project';
import Pricing from '../Pricing/Pricing';
import Contactform from '../ContactForm/Contactform';
import resumePDF from '/assets/img/resume.pdf'; 
import Footer from '../Footer/Footer';
import Sociallinks from '../SocialLinks/Sociallinks';

function Home() {
   
    const [text, setText] = useState('');

    useEffect(() => {
        const originalText = 'SHAHMEER ZUBAIR';
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setText(originalText.substring(0, currentIndex));
            currentIndex++;

            if (currentIndex > originalText.length) {
                clearInterval(intervalId);
            }
        }, 150); 

        return () => clearInterval(intervalId);
    }, []);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


    return (
        <>
            <Navbar />

            <div className="container">
                <section className='introduction-section'>
                    <div className='row'>
                        <div className="col-lg-6 col-sm-12 col-md-12">
                            <div className='mt-5 pt-5'>
                            <h3 className='animated-text'>Hello, I'm</h3>
                            <div className='typewriter'>
                                <h1>{text}</h1>
                            </div>
                            <h4 className=''>Web Developer</h4>
                            <p>As a web developer, I am driven by a passion for creating innovative and user-friendly digital experiences. With a keen eye for detail and a commitment to excellence, I transform ideas into well-crafted, responsive websites that leave a lasting impression.</p>
                            <div className="hireme-btn">
                                <button>Hire me</button>
                                <button className='resume-btn' onClick={handleDownload}>
                                    <u>Download resume</u> <i className="icon"><MdNavigateNext /></i>
                                </button>
                            </div>
                            </div>
                          
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6">
                           
                            <img src="/assets/img/coder.png" style={{ width: '550px', zIndex: '9999', position: "relative", marginLeft:'50px' }} alt="" />
                        </div>
                      
                    </div>
                </section>
            </div>
            <section className='About-us-Section'>
                <About />
            </section>
            <section className='services-section' id='services'>
                <Services />
            </section>

            <section className='skill-section' id='skills'>
                <Skill />
            </section>
            <section className='testimonial-section' id='testimonial'>
                <Testimonial/>
            </section>
            <section className='project-sections' id='projects'> 
                <Project/>
            </section>
            <section className='price-section' id='pricing'>
                <Pricing/>
            </section>
            <section className='contact-form-section'>
                <Contactform/>
            </section>
            <section className='footer-section'>
                <Footer/>
            </section>
            <section className='social-link-section'>
            <Sociallinks/>
            </section>
            

        </>
    )
}

export default Home