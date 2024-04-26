import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { IoMdPerson, IoMdCall } from "react-icons/io";
import { MdOutlineMail, MdNavigateNext } from "react-icons/md";
import { RxText } from "react-icons/rx";
import { useForm, ValidationError } from '@formspree/react';

function Contactform() {

    const [state, handleSubmit] = useForm("mwkgozgj");
    if (state.succeeded) {
        return <p className='form-alert-pra'>Your message is on its way to me! Expect a reply soon.</p>;
    }

    return (
        <>
            <div className="container">
                <div className="contact-form" id="contact-form">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-sm-12">
                            <div className="contact-form-detail">
                                <h5>Get In Touch</h5>
                                <h1>Let’s Talk For your</h1>
                                <h2>Website Projects</h2>
                                <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                            </div>
                            <div>
                                <div className='experience-detail mt-3'>
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
                            <form onSubmit={handleSubmit}>
                                <div className="row ">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className='mt-3'>
                                            <label htmlFor='name'>Full Name</label>
                                            <div className='input-with-icon' >
                                                <input
                                                    id='name'
                                                    type='name'
                                                    name='name'
                                                    placeholder="Please enter your name"
                                                />
                                                <ValidationError
                                                    prefix="Name"
                                                    field="name"
                                                    errors={state.errors}
                                                />

                                                <span className="icon">
                                                    <IoMdPerson />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className='mt-3'>
                                            <label htmlFor='email'>Email Address</label>
                                            <div className='input-with-icon'>

                                                <input
                                                    id='email'
                                                    type='email'
                                                    name='email'
                                                    placeholder="support@gmail.com"
                                                />
                                                <ValidationError
                                                    prefix="Email"
                                                    field="email"
                                                    errors={state.errors}
                                                />

                                                <span className="icon">
                                                    <MdOutlineMail />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className='mt-4'>
                                            <label htmlFor='number'>Phone Number</label>
                                            <div className='input-with-icon'>
                                                <input
                                                    type="text"
                                                    id='number'
                                                    name='number'
                                                    placeholder="+92"
                                                />
                                                <ValidationError
                                                    prefix="Number"
                                                    field="number"
                                                    errors={state.errors}
                                                />

                                                <span className="icon">
                                                    <IoMdCall />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className='mt-4'>
                                            <label htmlFor='subject'>Subject</label>
                                            <div className='input-with-icon'>
                                                <input
                                                    type="text"
                                                    name='subject'
                                                    id='subject'
                                                    placeholder="Subject"
                                                />

                                                <ValidationError
                                                    prefix="Subject"
                                                    field="subject"
                                                    errors={state.errors}
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
                                            <textarea
                                                placeholder="write message"
                                                id="message"
                                                name="message"
                                            ></textarea>
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="button-with-icon"
                                    type="submit" disabled={state.submitting}
                                >
                                    Send Me Message
                                    <span className="arrow-icon"><MdNavigateNext /></span></button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactform