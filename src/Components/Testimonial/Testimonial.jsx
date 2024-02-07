import React from 'react'
import TestimonialCarousel from '../Carousel/TestimonailCarousel'

function Testimonial() {
    return (
        <>
        
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className='p-4 mt-5 client-testimonial'>
                            <p>Clients Testimonials</p>
                            <h1>I’ve 500+ Clients </h1>
                            <h1><span>Feedback</span></h1>
                            <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className='mt-5'>
                            <TestimonialCarousel />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial