import React from "react";
import { Link } from "react-scroll";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Footer() {
  const whatsappProps = {
    accountName: "Shahmeer Zubair",
    phoneNumber: "+92 3115386005",
    darkMode: true,
    avatar: "/assets/img/profile.JPEG",
    notification: true,
  };
  return (
    <div>
      <div className="container">
        <div className="footer-section-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="/assets/img/logo.svg" alt="" />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="quick-link">
                <h5>Quick Link</h5>
                <div className="">
                  <ul className="">
                    <li>
                      <Link to="services" smooth={true} duration={500}>
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link to="projects" smooth={true} duration={500}>
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="pricing" smooth={true} duration={500}>
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" smooth={true} duration={500}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-contact">
                <h5>Contact</h5>
                <div className="d-flex">
                  <span>
                    <MdOutlineMail />
                  </span>
                  <p className="ml-3">rajashamir383@gmail.com</p>
                </div>
                <div className="d-flex">
                  <span>
                    <IoMdCall />
                  </span>
                  <p className="ml-3">+92 3115386005</p>
                </div>
              </div>
            </div>
          </div>
          <FloatingWhatsApp {...whatsappProps} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
