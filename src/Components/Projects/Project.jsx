import React, { useEffect } from "react";
import "../main.css";

function Project() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="project-info-box">
          <h6>Latest Work</h6>
          <h1>
            Explore My Popular <span>Projects</span>
          </h1>
        </div>
        <section className="scroll-container">
          <div className="scroll-element js-scroll fade-in-bottom">
            <img src="/assets/img/mobile.png" alt="" />
          </div>
          <div className="scroll-caption">
            <div className="project-details">
              <h5>Product Design</h5>
              <h1>Mobile Application Development</h1>
              <p>
                Transforming ideas into user-friendly mobile interfaces for a
                connected world.
              </p>
            </div>
          </div>
        </section>
        <section className="scroll-container">
          <div className="scroll-element js-scroll slide-right">
            <img src="/assets/img/web.png" alt="" />
          </div>
          <div className="scroll-caption">
            <div className="project-details">
              <h5>Product Design</h5>
              <h1>Web Application Development</h1>
              <p>
                Crafting innovative web applications that elevate digital
                experiences and streamline functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-container">
          <div className="scroll-element js-scroll slide-left">
            <img src="/assets/img/ecommerce.png" alt="" />
          </div>
          <div className="scroll-caption">
            <div className="project-details">
              <h5>Product Design</h5>
              <h1>Web Application Development</h1>
              <p>
                Crafting innovative web applications that elevate digital
                experiences and streamline functionality.
              </p>
            </div>
          </div>
        </section>
        {/* <div className="project-info-box">
          <h6>Latest Work</h6>
          <h1>
            Explore My Popular <span>Projects</span>
          </h1>

          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 project-image wow fadeInLeft delay-0-2s">
              <img src="/assets/img/mobile.png" className="mt-5" alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="project-details">
                <h5>Product Design</h5>
                <h1>Mobile Application Development</h1>
                <p>
                  Transforming ideas into user-friendly mobile interfaces for a
                  connected world.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="project-details">
                <h5>Product Design</h5>
                <h1>Web Application Development</h1>
                <p>
                  Crafting innovative web applications that elevate digital
                  experiences and streamline functionality.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src="/assets/img/web.png" className="mt-5" alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src="/assets/img/ecommerce.png" className="mt-5" alt="" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="project-details">
                <h5>Product Design</h5>
                <h1>Online Store Development</h1>
                <p>
                  Building robust e-commerce websites that enhance online
                  businesses with seamless transactions and user-friendly
                  interfaces.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Project;
