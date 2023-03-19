import React from 'react';

import FeatImage01 from '../../../images/features-03-image-01.png';
import FeatImage02 from '../../../images/features-03-image-02.png';
import FeatImage03 from '../../../images/features-03-image-03.png';

function AboutProduct() {
  return (
    <section className="about-product" id="product">
        {/* <!-- About The Product Header --> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-content">
                <h2 className="header">
                  About The Product
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
        {/* <!-- About The Product Content --> */}
        <div className="container">
          <div className="row reverse justify-content-between">
            {/* <!-- About The Product Left Content --> */}
            <div className="col-lg-6 align-self-center">
              <div className="about-item">
                <div className="about-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <div className="about-text">
                  <h3 className="head-h3"> GPS System Tracking</h3>
                  <p className="text">For though result and talent add are parish valley. Songs in oh other avoid
                    it hours woman style. </p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-icon">
                  <i className="fas fa-wifi"></i>
                </div>
                <div className="about-text">
                  <h3 className="head-h3"> WiFi Data Sync</h3>
                  <p className="text">For though result and talent add are parish valley. Songs in oh other avoid
                    it hours woman style. </p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-icon">
                  <i className="fas fa-stethoscope"></i>
                </div>
                <div className="about-text">
                  <h3 className="head-h3">Blood Pressure Management</h3>
                  <p className="text">For though result and talent add are parish valley. Songs in oh other avoid
                    it hours woman style. </p>
                </div>
              </div>
              <div className="about-item m-0">
                <div className="about-icon">
                  <i className="fas fa-cloud-rain"></i>
                </div>
                <div className="about-text">
                  <h3 className="head-h3"> Weather Update</h3>
                  <p className="text">For though result and talent add are parish valley. Songs in oh other avoid
                    it hours woman style. </p>
                </div>
              </div>
            </div>
            {/* <!-- About The Product Right Image --> */}
            <div className="col-lg-5 align-self-center">
              <div className="about-product-img">
                <img src="../src/images/w2.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutProduct;