import React from 'react';
import '../../Components/main.css'
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Services from '../Servics/Services';
import Skill from '../Skills/Skill';
import Testimonial from '../Testimonial/Testimonial';
import Project from '../Projects/Project';
import Pricing from '../Pricing/Pricing';
import Contactform from '../ContactForm/Contactform';
import Footer from '../Footer/Footer';
import Sociallinks from '../SocialLinks/Sociallinks';
import Main from '../Main/Main';
import ProjectGallery from '../ProjectGallery/ProjectGallery';

function Home() {

    return (
        <>
            <section className='home-section'>
                <Main/>
            </section>
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
                <Testimonial />
            </section>
            <section className='project-sections' id='projects'>
                <Project />
            </section>
            <section className='project-gallery-section' id='projects-gallery'>
                <ProjectGallery />
            </section>
            <section className='price-section' id='pricing'>
                <Pricing />
            </section>
            <section className='contact-form-section' id='contact-us'>
                <Contactform />
            </section>
            <section className='footer-section'>
                <Footer />
            </section>
            <section className='social-link-section'>
                <Sociallinks />
            </section>


        </>
    )
}

export default Home