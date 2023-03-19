import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

function FeaturesBlocks() {
  return (
    <section className="product-features" id="features">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-content">
                <h2 className="header">
                  Product Features
                </h2>
                <p className="text">
                  Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use
                  set
                  waiting pursuit nay you looking.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- Product Features Left Image --> */}
            <div className="col-lg-6 align-self-center">
              <div className="product-image">
                <img src="../src/images/w3.png" alt="/" />
              </div>

            </div>
            {/* <!-- Product Features Right Content --> */}
            <div className="col-lg-6 align-self-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="features-item item-one text-center">
                      <div className="content">
                        <i className="fas fa-user-cog"></i>
                        <h3 className="head-h3">High <br /> Quality</h3>
                        <p className="text"> Is at purse tried jokes china ready decay an. downs power.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="features-item item-two text-center">
                      <div className="content">
                        <i className="fab fa-fort-awesome"></i>
                        <h3 className="head-h3">Awesome <br /> Design</h3>
                        <p className="text"> Is at purse tried jokes china ready decay an. downs power.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="features-item item-three text-center">
                      <div className="content">
                        <i className="far fa-lightbulb"></i>
                        <h3 className="head-h3">Latest <br /> Technology</h3>
                        <p className="text"> Is at purse tried jokes china ready decay an. downs power.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="features-item item-four text-center">
                      <div className="content">
                        <i className="fas fa-user-friends"></i>
                        <h3 className="head-h3">User <br /> Friendly</h3>
                        <p className="text"> Is at purse tried jokes china ready decay an. downs power.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default FeaturesBlocks;
