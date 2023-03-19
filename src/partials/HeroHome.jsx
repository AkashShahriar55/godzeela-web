import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image-01.jpg';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="flex h-screen flex-col mx-auto  relative bg-hero-image bg-no-repeat bg-cover bg-center " >
        {/* Illustration behind hero content */}

        <div className="flex  bg-black bg-opacity-50 h-full w-full">
        <div class="container">
            <div class="row align-items-center justify-content-between py-4">
                <div class="col-md-7 col-lg-6">
                    <div class="hero-content-left text-white">
                        <h1 class="text-white"><span>Colorful</span> Screen,
                            Smart interactions</h1>
                        <p class="lead">
                            Our design projects are fresh and simple and will <br/> benefit your business greatly. Learn
                            more
                            about our work!
                        </p>
                        <ul class="list-inline py-4 core-feature-list d-flex">
                            <li class="list-inline-item text-center">
                                <div class="icon-box mb-2 mx-auto gray-light-bg">
                                    <span class="ti-announcement color-secondary"></span>
                                </div>
                                App notifications
                            </li>
                            <li class="list-inline-item text-center">
                                <div class="icon-box mb-2 mx-auto gray-light-bg">
                                    <span class="ti-alarm-clock color-secondary"></span>
                                </div>
                                Alarms Clock
                            </li>
                            <li class="list-inline-item text-center">
                                <div class="icon-box mb-2 mx-auto gray-light-bg">
                                    <span class="ti-location-pin color-secondary"></span>
                                </div>
                                Location tracker
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5">
                    <div class="hero-animation-img">
                        <img src="img/watch.png" alt="app" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* Hero content */}
      </div>
    </section>
  );
}

export default HeroHome;
