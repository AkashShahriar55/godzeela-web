import React from 'react';

import TestimonialImage01 from '../../../images/testimonial-01.jpg';
import TestimonialImage02 from '../../../images/testimonial-02.jpg';
import TestimonialImage03 from '../../../images/testimonial-03.jpg';

function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="container">
          <div className="row reverse">
            {/* <!-- Contact Form --> */}
            <div className="col-lg-6 align-self-center">
              <div className="contact-input-box">
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Name" className="form-control" />
                  </div>
                  <div className="input-box">
                    <input type="email" placeholder="Email address" className="form-control" />
                  </div>
                  <div className="input-box">
                    <input type="number" placeholder="Phone number" className="form-control" />
                  </div>
                  <div className="input-box">
                    <textarea placeholder="Message" className="form-control"></textarea>
                  </div>
                  <div className="input-box">
                    <button type="submit">Send Message</button>
                  </div>

                </form>
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <div className="section-content">
                <h2 className="header">
                  Contact with us
                </h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore consectetur adipiscing elit, magna aliqua.
                </p>
                <h4>
                  Head Office
                </h4>
                <ul>
                  <li> <i className="fas fa-home"></i> Amsterdam, NY 12010 </li>
                  <li> <i className="fas fa-phone-volume"></i> Phone:+8801728714927 </li>
                  <li> <i className="far fa-envelope"></i> Email:random@random.com </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Contact;
