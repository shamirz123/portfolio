import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdNavigateNext } from "react-icons/md";
import resumePDF from '/assets/img/resume.pdf';

function Main() {
    const [text, setText] = useState('');

    useEffect(() => {
        const originalText = 'SHAHMEER ZUBAIR...';
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setText(originalText.substring(0, currentIndex));
            currentIndex++;
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

    const handleScrollToContact = () => {
        const contactForm = document.getElementById('contact-form');
        contactForm.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="container">
                <section className='introduction-section'>
                    <div className='row'>
                        <div className="col-lg-6 col-sm-12 col-md-12">
                            <div className='mt-5 pt-5'>
                                <h3 className='animated-text'>Hello 👋 I'm</h3>
                                <div className='typewriter'>
                                    <h1>{text}</h1>
                                </div>
                                <TypeAnimation
                                    sequence={[
                                        "I am a front-end developer...",
                                        1000,
                                        'I am a Reactjs developer...',
                                        1000,
                                        'I am a front-end designer...',
                                        1000,
                                        'I am a UI/UX designer...',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    // style={{ fontSize: '2em', display: 'inline-block' }}
                                    repeat={Infinity}
                                    className='Animation-text-wrapper'
                                />

                                <p>As a web developer, I am driven by a passion for creating innovative and user-friendly digital experiences. With a keen eye for detail and a commitment to excellence, I transform ideas into well-crafted, responsive websites that leave a lasting impression.</p>

                                <div className="d-flex hireme-btn">
                                    <div className="p-2">
                                        <button onClick={handleScrollToContact}>Hire me</button>
                                    </div>
                                    <div className="p-2 ">
                                        <button className='resume-btn' onClick={handleDownload}>
                                            <u>Download resume</u> <i className="icon"><MdNavigateNext /></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="hireme-btn">
                                    <button>Hire me</button>
                                    <button className='resume-btn' onClick={handleDownload}>
                                        <u>Download resume</u> <i className="icon"><MdNavigateNext /></i>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-6">
                            <div className='profile-image'>
                                <img src="/assets/img/coder.png" alt="" />
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Main;
