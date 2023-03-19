import React from 'react';

import FeatImage01 from '../../../images/features-03-image-01.png';
import FeatImage02 from '../../../images/features-03-image-02.png';
import FeatImage03 from '../../../images/features-03-image-03.png';

function ImportantFeature() {
  return (
    <section className="important-features" >
        <div className="container">
          <div className="row  ">
            <div className="col-lg-3 mr-30 col-md-6">
              <div className="important-features-item">
                <h3 className="head-h3">
                  1GB
                  <span>Ram</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 mr-30 col-md-6">
              <div className="important-features-item">
                <h3 className="head-h3">
                  16GB
                  <span>Internal Memory</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 mr-30 col-md-6">
              <div className="important-features-item">
                <h3 className="head-h3">
                  1.3 Inches
                  <span> Display Size</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="important-features-item">
                <h3 className="head-h3">
                  18 Hours
                  <span>Stand by Battery</span>
                </h3>
              </div>
            </div>

          </div>
        </div>

      </section>
  );
}

export default ImportantFeature;