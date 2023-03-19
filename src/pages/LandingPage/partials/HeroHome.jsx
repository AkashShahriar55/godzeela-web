import React, { useState } from 'react';
import Modal from '../../../utils/Modal';

import HeroImage from '../../../images/hero-image-01.jpg';



function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="hero-area" id="home">
        <div className="item" style={{backgroundImage: 'url("../src/images/02_index.jpg")'}}>
          <div className="container">
            <div className="row reverse justify-content-between">
              <div className="col-lg-6 align-self-center">

                <div className="content">
                  <h1 className="title">All New
                    For a Better You</h1>
                  <p className="text">
                    From they fine john he give of rich he. They age and draw mrs like. Improving end
                    distrusts may instantly was
                    household applauded incommode.
                  </p>
                  <a href="#" className="base-btn1 hero-btn">Order now</a>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">

                <div className="hero-area-image">
                  <p className="discunt">
                    %50
                    <span>off</span>
                  </p>
                  <img src="../src/images/w1.png" alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
