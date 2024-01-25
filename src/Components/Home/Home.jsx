import React, { useState, useEffect } from 'react';
import '../../Components/main.css'
import Navbar from '../Navbar/Navbar';
import { MdNavigateNext } from "react-icons/md";
import About from '../About/About';
import Services from '../Servics/Services';
import Skill from '../Skills/Skill';
import Testimonial from '../Testimonial/Testimonial';
import Project from '../Projects/Project';
function Home() {
    const Shahmeer = {
        developer: true,
        creator: true,
        companies: ['vercel', 'github', 'mlh'],
        technologies: ['js', 'react', 'node',],
    };
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
        }, 150); // Adjust the typing speed as needed

        return () => clearInterval(intervalId);
    }, []);


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
                                <button className='resume-btn'>
                                    <u>Download resume</u> <i className="icon"><MdNavigateNext /></i>
                                </button>
                            </div>
                            </div>
                          
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6">
                            {/* <div id="code-block" className="p-8 text-xl bg-[#282c34] rounded-md ">
                                <div className="fade-in" id="fade1">
                                    <pre className="astro-code one-dark-pro" style={{ backgroundColor: '#282c34', overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }} tabIndex="0">
                                        <code>
                                            {Object.entries(Shahmeer).map(([key, value]) => (
                                                <span key={key} className="line">
                                                    <span style={{ color: '#C678DD' }}>const&#123;</span>
                                                    <span style={{ color: '#ABB2BF' }}> </span>
                                                    <span style={{ color: '#E5C07B' }}>{key}</span>
                                                    <span style={{ color: '#ABB2BF' }}> </span>
                                                    <span style={{ color: '#56B6C2' }}>=</span>
                                                    <span style={{ color: '#ABB2BF' }}> {typeof value === 'string' ? `'${value}'` : JSON.stringify(value)}</span>
                                                    <span style={{ color: '#ABB2BF' }}>,</span>
                                                </span>
                                            ))}
                                        </code>
                                    </pre>
                                </div>
                            </div> */}
                            <img src="/assets/img/coder.png" style={{ width: '550px', zIndex: '9999', position: "relative" }} alt="" />
                        </div>
                      
                    </div>
                </section>
            </div>
            <div className='' style={{ height: "10px" }}></div>
            <section className='About-us-Section'>
                <About />
            </section>
            <section className='services-section' id='section'>
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

        </>
    )
}

export default Home