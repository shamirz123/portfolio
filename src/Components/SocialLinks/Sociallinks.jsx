import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sociallinks() {
    const [isvisible, setVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: '2000',
        });
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className='copyright-section'>
                        <p>Copyright <span>@2024</span> , All Rights Reserved</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <span
                            className={`cs_scrollup upside-scroll-arrow ${isvisible ? "visible" : ""
                                }`}
                            onClick={scrollToTop}
                        >
                            <i className='fas fa-angle-double-up'></i>
                        </span>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <div className='social-handle'>
                            <ul>
                                <a href="https://www.linkedin.com/in/shahmeer-zubair-3590a0273/" className='link-wrapper' target="_blank" rel="noopener noreferrer">
                                    <li>LinkedIn</li>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <li>Instagram</li>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <li>Facebook</li>
                                </a>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Sociallinks