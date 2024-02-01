import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { IoMdPerson, IoMdCall } from "react-icons/io";
import { MdOutlineMail, MdNavigateNext } from "react-icons/md";
import { RxText } from "react-icons/rx";

function Contactform() {
    const [focusedInput, setFocusedInput] = useState(null);

    const handleInputFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleInputBlur = () => {
        setFocusedInput(null);
    };

    return (
        <>
            <div className="container">
                <div className="contact-form">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-sm-12">
                            <div className="contact-form-detail">
                                <h5>Get In Touch</h5>
                                <h1>Let’s Talk For your</h1>
                                <h2>Next Projects</h2>
                                <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                            </div>
                            <div>
                                <div className='experience-detail mt-5'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h5>3+ Years Of Experience</h5>
                                </div>
                                <div className='experience-detail'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h5>Professional Web Developer</h5>
                                </div>
                                <div className='experience-detail'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h5>Fast Delivery</h5>
                                </div>
                                <div className='experience-detail'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h5>100% Satisfaction</h5>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 col-sm-12 col-md-12">
                            <div className="row pt-5">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className='mt-5'>
                                        <label>Full Name</label>
                                        <div className='input-with-icon' >
                                            <input
                                                type="text"
                                                placeholder="Please enter your name"
                                            />
                                            <span className="icon">
                                                <IoMdPerson />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className='mt-5'>
                                        <label>Email Address</label>
                                        <div className='input-with-icon'>
                                            <input type="text"
                                                placeholder="support@gmail.com"
                                            />
                                            <span className="icon">
                                                <MdOutlineMail />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className='mt-5'>
                                        <label>Phone Number</label>
                                        <div className='input-with-icon'>
                                            <input type="text"
                                                placeholder="+92 3115386005"
                                            />
                                            <span className="icon">
                                                <IoMdCall />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className='mt-5'>
                                        <label>Subject</label>
                                        <div className='input-with-icon'>
                                            <input type="text"
                                                placeholder="Subject"
                                            />
                                            <span className="icon">
                                                <RxText />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <label>Message</label>
                                    <div>
                                        <textarea placeholder="write message" ></textarea>
                                    </div>
                                </div>

                            </div>
                            <button className="button-with-icon">Send Me Message <span className="arrow-icon"><MdNavigateNext /></span></button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactform