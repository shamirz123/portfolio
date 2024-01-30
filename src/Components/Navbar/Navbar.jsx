import React, {useState} from 'react'
import "../../Components/main.css";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


function Navbar() {
    const [isHamburgerActive, setHamburgerActive] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerActive(!isHamburgerActive);
    };

    return (
        <header className='navbar-header'>
            <div className="container">
                <nav>
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        className="navbar-brand"
                    >
                        <img src="/assets/img/logo.svg" alt="" />
                    </ScrollLink>
                    <ul className={`nav-list ${isHamburgerActive ? 'active' : ''}`}>
                        <li className="nav-item">
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                home
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                about
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Contact
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Services
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="skills"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Skills
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="pricing"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Pricing
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        
                    </ul>
                    <div className="hamburger" onClick={handleHamburgerClick}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
}


export default Navbar