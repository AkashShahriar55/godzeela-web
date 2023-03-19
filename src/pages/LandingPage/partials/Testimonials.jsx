import React from 'react';

import TestimonialImage01 from '../../../images/testimonial-01.jpg';
import TestimonialImage02 from '../../../images/testimonial-02.jpg';
import TestimonialImage03 from '../../../images/testimonial-03.jpg';

function Testimonials() {
  return (
    <section className="testimonial">
        {/* <!-- About The Product Header --> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-content">
                <h2 className="header">
                  Our Client Say
                </h2>
                <p className="text">
                  Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use
                  set
                  waiting pursuit nay you looking.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial Content --> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial-box owl-carousel owl-theme">
                <div className="testomonial-item">

                  <img src="../src/images/testomonial.jpg" alt="Image" />

                  <div className="clint-say align-self-center">
                    <h3>Hafizur Rahaman</h3>
                    <span>UI/UX Designer</span>
                    <p>
                      Lorem ipsum dolor sit amet
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className="testomonial-item">

                  <img src="../src/images/testomonial.jpg" alt="Image" />

                  <div className="clint-say align-self-center">
                    <h3>Hafizur Rahaman</h3>
                    <span>UI/UX Designer</span>
                    <p>
                      Lorem ipsum dolor sit amet
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className="testomonial-item">

                  <img src="../src/images/testomonial.jpg" alt="Image" />

                  <div className="clint-say align-self-center">
                    <h3>Hafizur Rahaman</h3>
                    <span>UI/UX Designer</span>
                    <p>
                      Lorem ipsum dolor sit amet
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Testimonials;
