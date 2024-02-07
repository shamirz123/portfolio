import React from 'react'

function Services() {
    return (
        <>

            <div className='container'>
                <div className="services-main">
                    <p className='text-center'>Popular Services</p>
                    <h1 className='text-center'>
                        My <span>Special Service</span> For your
                        <h2> Business Development</h2>
                    </h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div class="d-flex flex-row services-detail">
                                <div class="p-3"><span>01.</span></div>
                                <div>
                                    <h4>Custom Website Development:</h4>
                                    <p>Offer custom website development services tailored to the specific needs and goals of businesses.</p>
                                </div>
                                <div class="p-3 mt-3">
                                    <a class="details-btn" href="/#"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div class="d-flex flex-row services-detail">
                                <div class="p-3"><span>02.</span></div>
                                <div>
                                    <h4>Mobile App Development:</h4>
                                    <p>Develop mobile applications to complement websites or offer standalone services.</p>
                                </div>
                                <div class="p-3 mt-3">
                                    <a class="details-btn" href="/#"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div class="d-flex flex-row services-detail">
                                <div class="p-3"><span>03.</span></div>
                                <div>
                                    <h4>Performance Optimization:</h4>
                                    <p>Optimize website and application performance to ensure fast loading times.</p>
                                </div>
                                <div class="p-3 mt-3">
                                    <a class="details-btn" href="/#"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div class="d-flex flex-row services-detail">
                                <div class="p-3"><span>04.</span></div>
                                <div>
                                    <h4>User Experience (UX) Design:</h4>
                                    <p>Focus on creating a positive and intuitive user experience for websites and applications.</p>
                                </div>
                                <div class="p-3 mt-3">
                                    <a class="details-btn" href="/#"><i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Services