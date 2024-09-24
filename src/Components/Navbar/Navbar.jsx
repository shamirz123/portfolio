import React, { useEffect, useState } from "react";
import "../../Components/main.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  console.log("isHamburgerActive",isHamburgerActive)
  const [isVisible, setVisible] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 2000,
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <header
      className={`navbar navbar-header ${hasBackground ? "background" : ""}`}
    >
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
          <ul className={`nav-list ${isHamburgerActive ? "active" : ""}`}>
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

export default Navbar;
