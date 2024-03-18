import React from 'react';
import { FaAsterisk } from "react-icons/fa";


function Skill() {
    return (
        <>
            <div className="container">
                <div className="skill-wrapper">
                    <div className="row">
                        <div className="col-lg-4  col-md-8 col-sm-6 mt-2">
                            <h5 > <i><FaAsterisk /></i> professional skill of me</h5>
                            <h1 className='m-0'>Let’s Explore Popular <br /><span>Skills & Experience</span></h1>
                            <p className='mt-3'>With a solid foundation in languages like JavaScript and proficiency in frameworks such as React and Node.js, I've honed my skills to create dynamic and responsive web solutions. Over the past three years, I've successfully completed over 50 projects, gaining invaluable experience and a keen eye for detail.</p>

                            <div className="d-flex p-3 skills-arrow-img-section">
                                <div className="">
                                    <img className='d-inline' src="/assets/img/skill-arrow.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                    <div className="language-section">
                                        <div className='d-flex justify-content-center'>
                                            <img src="/assets/img/html.png" alt="" />
                                        </div>
                                        <p className='text-center text-white fw-bold mt-2'>HTML</p>
                                        <button>97%</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                    <div className="language-section">
                                        <div className='d-flex justify-content-center'>
                                            <img src="/assets/img/css.png" alt="" />
                                        </div>
                                        <p className='text-center text-white fw-bold mt-2'>CSS</p>
                                        <button>88%</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                    <div className="language-section">
                                        <div className='d-flex justify-content-center'>
                                            <img src="/assets/img/bootstrap.png" alt="" />
                                        </div>
                                        <p className='text-center text-white fw-bold mt-0'>BOOTSTRAP</p>
                                        <button className=''>85%</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                    <div className="language-section mt-0">
                                        <div className='d-flex justify-content-center'>
                                            <img src="/assets/img/js.png" alt="" />
                                        </div>
                                        <p className='text-center text-white fw-bold mt-3 fs-5'>JS</p>
                                        <button>80%</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                    <div className="language-section mt-3">
                                        <div className='d-flex justify-content-center'>
                                            <img src="/assets/img/jquery.png" alt="" />
                                        </div>
                                        <p className='text-center text-white fw-bold mt-2'>JQUERY</p>
                                        <button>80%</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                    <div className="language-section mt-3">
                                        <div className='d-flex justify-content-center'>
                                            <img src="/assets/img/react.png" alt="" />
                                        </div>
                                        <p className='text-center text-white fw-bold mt-2'>REACT</p>
                                        <button>90%</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                    <div className="language-section mt-3">
                                        <div className='d-flex justify-content-center'>
                                            <img src="/assets/img/php.png" style={{ width: '67px' }} alt="" />
                                        </div>
                                        <p className='text-center text-white fw-bold mt-2'>PHP</p>
                                        <button>70%</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                                    <div className="language-section mt-3">
                                        <div className='d-flex justify-content-center'>
                                            <img className='figma-img' style={{ width: '32px' }} src="/assets/img/figma.png" alt="" />
                                        </div>
                                        <p className='text-center text-white fw-bold mt-0'>FIGMA</p>
                                        <button>67%</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skill