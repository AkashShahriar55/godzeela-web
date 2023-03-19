import React from 'react';

import FeatImage01 from '../../../images/features-03-image-01.png';
import FeatImage02 from '../../../images/features-03-image-02.png';
import FeatImage03 from '../../../images/features-03-image-03.png';

function ProductDesign() {
  return (
    <section className="design-dna">
        {/* <!-- About The Product Header --> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-content">
                <h2 className="header">
                  Design DNA
                </h2>
                <p className="text">
                  Do play they miss give so up. Words to up style of since world. We leaf to snug on no need.
                  Way own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar
                  admiration so terminated no in contrasted
                  it. Limits far yet turned highly repair parish talked six. Draw fond rank form nor the day
                  eat.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="video" >
                <div className="overlay"></div>

                <a className="youtube-video mfp-iframe video-play-btn video-icon"
                  href="https://www.youtube.com/watch?v=4DCTTrGjGU4">
                  Play</a>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ProductDesign;