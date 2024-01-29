import React from 'react'

function Project() {
  return (
    <>
        <div className="container">
            <div className="project-section-wrapper">
                <h6>Latest Work</h6>
                <h1>Explore My Popular <span>Projects</span></h1>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 project-image wow fadeInLeft delay-0-2s">
                        <img src="/assets/img/mobile.png" className='mt-5' alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className='project-details'>
                            <h5>Product Design</h5>
                            <h1>Mobile Application Development</h1>
                            <p>Transforming ideas into user-friendly mobile interfaces for a connected world.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className='project-details'>
                            <h5>Product Design</h5>
                            <h1>Web Application Development</h1>
                            <p>Crafting innovative web applications that elevate digital experiences and streamline functionality.</p>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src="/assets/img/web.png" className='mt-5' alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src="/assets/img/ecommerce.png" className='mt-5' alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className='project-details'>
                            <h5>Product Design</h5>
                            <h1>Online Store Development</h1>
                            <p>Building robust e-commerce websites that enhance online businesses with seamless transactions and user-friendly interfaces.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Project