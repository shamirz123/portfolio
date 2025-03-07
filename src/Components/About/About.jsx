import React from "react";
import { TiTick } from "react-icons/ti";
import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

function About() {
  return (
    <>
      <div id="about" className="container fade-in-bottom js-scroll">
        <div className="about-me ">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-13">
              <div className="p-4">
                <h3>About Me</h3>
                <h1>
                  Building Scalable & Dynamic Solutions with{" "}
                  <span>MERN Stack Development</span>
                </h1>
                <p>
                  Passionate MERN Stack Developer with a strong foundation in{" "}
                  <b>MongoDB, Express.js, React.js, and Node.js</b>. I
                  specialize in creating high-performance, scalable, and
                  user-friendly web applications that solve real-world
                  challenges. Let's build something extraordinary together!
                </p>

                <div className="d-flex flex-row gap-3 about-exp">
                  <div className="p-2">
                    <span>
                      <FaCheck />
                    </span>
                  </div>
                  <div className="p-2">
                    <p className="m-0">Full-Stack Web Development</p>
                  </div>
                  <div className="p-2">
                    {" "}
                    <span>
                      <FaCheck />
                    </span>
                  </div>
                  <div className="p-2">
                    <p className="m-0">Performance Optimization</p>
                  </div>
                </div>
                <div className="d-flex flex-row gap-3 about-exp">
                  <div className="p-2">
                    <span>
                      <FaCheck />
                    </span>
                  </div>
                  <div className="p-2">
                    <p className="m-0">API Development & Integration</p>
                  </div>
                  <div className="p-2">
                    {" "}
                    <span>
                      <FaCheck />
                    </span>
                  </div>
                  <div className="p-2">
                    <p className="m-0">Scalable Architecture</p>
                  </div>
                </div>
                <div className="contact-me-detil">
                  <div
                    className="about-info-box "
                    style={{ visibility: "visible" }}
                  >
                    <div className="info-box-item">
                      <div className="icon">
                        <IoMailOutline />
                      </div>
                      <div className="content">
                        <span>Email Us</span>
                        <br />
                        <a href="mailto:support@gmail.com">
                          rajashamir383@gmail.com
                        </a>
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
              <img
                className="coder-gif-img"
                alt="Coder GIF"
                src="https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/coding-freak.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
