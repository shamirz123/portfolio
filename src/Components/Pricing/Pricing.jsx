import React, { useEffect } from 'react'
import { FaCheck } from "react-icons/fa6";


function Pricing() {

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.pricing-container');
            elements.forEach(element => {
                if (isInViewport(element)) {
                    element.classList.add('animate__fadeInLeft');
                }
            });
        };

        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className="container">
                <div className='price-wrapper'>
                    <h5 className='text-center'>Pricing Package</h5>
                    <h1 className='text-center'>Amazing <span>Pricing</span> For your Projects</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-sm-12">
                            <div className="pricing-container">
                                <div className="pricing-detail">
                                    <div className="container">
                                        <h2>Basic <strong>Plan</strong></h2>
                                        <p>Try Out Basic Plan Save <span>20%</span></p>
                                        <h2>$50 <span>/per month</span></h2>
                                    </div>
                                </div>
                                <div className='services-provided'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Website Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Mobile Apps Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Product Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <p>
                                        <FaCheck />
                                    </p>
                                    <h3 className=''>Digital Marketing</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <p>
                                        <FaCheck />
                                    </p>
                                    <h3 className=''>Custom Support</h3>
                                </div>
                                <button>Choose Package</button>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-12">

                            <div className="pricing-container " style={{ paddingBottom: "20px" }}>
                                <div className="pricing-detail">
                                    <div className="container">
                                        <h2>Standard  <strong>Plan</strong></h2>
                                        <p>Try Out Basic Plan Save <span>35%</span></p>
                                        <h2>$80 <span>/per month</span></h2>
                                    </div>
                                </div>
                                <div className='services-provided'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Website Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Mobile Apps Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Product Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Digital Marketing</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Custom Support</h3>
                                </div>
                                <button className='mt-4'>Choose Package</button>
                            </div>


                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-12">

                            <div className="pricing-container">
                                <div className="pricing-detail">
                                    <div className="container">
                                        <h2>Premium  <strong>Plan</strong></h2>
                                        <p>Try Out Basic Plan Save <span>35%</span></p>
                                        <h2>$100 <span>/per month</span></h2>
                                    </div>
                                </div>
                                <div className='services-provided'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Website Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Mobile Apps Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Product Design</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Digital Marketing</h3>
                                </div>
                                <div className='services-provided pt-0 mt-0'>
                                    <span>
                                        <FaCheck />
                                    </span>
                                    <h3 className=''>Custom Support</h3>
                                </div>
                                <button className='mt-4'>Choose Package</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing