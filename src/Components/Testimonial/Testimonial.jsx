import React from "react";
import TestimonialCarousel from "../Carousel/TestimonailCarousel";
import CountUp from "react-countup";

function Testimonial() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="p-4 mt-5 client-testimonial">
              <p className="text-lg font-semibold">What My Clients Say</p>
              <h1>
                Proudly Served <CountUp end={100} /><span>+ Clients</span>
              </h1>

              <p>
                "Delivering high-quality, scalable web solutions that exceed
                expectations. Here’s what my clients have to say about working
                with me."
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="mt-5">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
