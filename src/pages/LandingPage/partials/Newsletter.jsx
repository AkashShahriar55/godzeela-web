import React from 'react';

function ProductListing() {
  return (
    <section className="how-it" id="pricing">
        {/* <!-- How It Stacks Up Header --> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-content">
                <h2 className="header">
                  How It Stacks Up
                </h2>
                <p className="text">
                  Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use
                  set waiting pursuit nay you looking.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!--  How It Stacks Up Content --> */}
        <div className="container">
          <div className="row">
            <div className="how-it-owl owl-carousel owl-theme">
              <div className="how-it-owl-item">
                <div className="owl-image">
                  <img src="../src/images/w3.png" alt="" />
                </div>
                <div className="how-owl-content">
                  <h3 className="head-h3"> Smart Watch One</h3>
                  <div className="price-box">
                    <p>Price</p>
                    <p>$435.99</p>
                  </div>

                  <a className="base-btn2 how-btn">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div className="how-it-owl-item">
                <div className="owl-image">
                  <img src="../src/images/w1.png" alt="" />
                </div>
                <div className="how-owl-content">
                  <h3 className="head-h3"> Smart Watch Two</h3>
                  <div className="price-box">
                    <p>Price</p>
                    <p>$435.99</p>
                  </div>

                  <a className="base-btn2 how-btn">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div className="how-it-owl-item">
                <div className="owl-image">
                  <img src="../src/images/w2.png" alt="" />
                </div>
                <div className="how-owl-content">
                  <h3 className="head-h3"> Smart Watch Three</h3>
                  <div className="price-box">
                    <p>Price</p>
                    <p>$435.99</p>
                  </div>
                  <a className="base-btn2 how-btn">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div className="how-it-owl-item">
                <div className="owl-image">
                  <img src="../src/images/w4.png" alt="" />
                </div>
                <div className="how-owl-content">
                  <h3 className="head-h3"> Smart Watch Four</h3>
                  <div className="price-box">
                    <p>Price</p>
                    <p>$435.99</p>
                  </div>

                  <a className="base-btn2 how-btn">
                    Add to Cart
                  </a>
                </div>
              </div>

              <div className="how-it-owl-item">
                <div className="owl-image">
                  <img src="../src/images/w2.png" alt="" />
                </div>
                <div className="how-owl-content">
                  <h3 className="head-h3"> Smart Watch Five</h3>
                  <div className="price-box">
                    <p>Price</p>
                    <p>$435.99</p>
                  </div>

                  <a className="base-btn2 how-btn">
                    Add to Cart
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
  );
}

export default ProductListing;
