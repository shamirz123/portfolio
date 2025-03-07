import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { MdNavigateNext } from "react-icons/md";
import resumePDF from "/assets/img/shahmeer-zubair-frontend-developer.pdf";

function Main() {
  const [text, setText] = useState("");

  useEffect(() => {
    const originalText = "SHAHMEER ZUBAIR...";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(originalText.substring(0, currentIndex));
      currentIndex++;
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "shahmeer-mern-dev-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    contactForm.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="container">
        <section className="introduction-section pb-4">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="mt-5 pt-5">
                <h3 className="animated-text">Hello 👋 I'm</h3>
                <div className="typewriter">
                  <h1>{text}</h1>
                </div>
                <TypeAnimation
                  sequence={[
                    "I am a MERN Stack Developer...",
                    1000,
                    "I build scalable web applications...",
                    1000,
                    "I am a React & Next.js expert...",
                    1000,
                    "I craft seamless user experiences...",
                    1000,
                    "I solve complex problems with clean code...",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="Animation-text-wrapper"
                />

                <p>
                  As a MERN Stack Developer, I am passionate about building
                  dynamic, scalable, and user-friendly web applications. With a
                  strong focus on performance, responsiveness, and clean code, I
                  transform ideas into seamless digital experiences that leave a
                  lasting impact.
                </p>

                <div className="d-flex hireme-btn">
                  <div className="p-2">
                    <button onClick={handleScrollToContact}>Hire me</button>
                  </div>
                  <div className="p-2 ">
                    <button className="resume-btn" onClick={handleDownload}>
                      <u>Download resume</u>{" "}
                      <i className="icon">
                        <MdNavigateNext />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6">
              <div className="profile-image">
                <img src="/assets/img/coder.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
