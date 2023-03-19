import React, { useState } from 'react';

function ProfileSetting() {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      <div className="global-color">
        <span className="setting-toggle">
          <i className="las la-cog"></i>
        </span>
        <div className="inner">
          <div className="overlay"></div>
          <div className="global-color-option">
            <span className="close-settings">
              <i className="las la-times"></i>
            </span>
            <h2>Configuration</h2>
            <div className="global-color-option-inner">
              <p>Colors</p>
              <div className="color-boxed">
                <a href="#" className="clr-active"
                  data-cf-modified-9643b6383ce551c474a45d25-=""></a>
                <a href="#"
                  data-cf-modified-9643b6383ce551c474a45d25-=""></a>
                <a href="#"
                  data-cf-modified-9643b6383ce551c474a45d25-=""></a>
                <a href="#"
                  data-cf-modified-9643b6383ce551c474a45d25-=""></a>
                <a href="#"
                  data-cf-modified-9643b6383ce551c474a45d25-=""></a>
                <a href="#"
                  data-cf-modified-9643b6383ce551c474a45d25-=""></a>
                <a href="#"
                  data-cf-modified-9643b6383ce551c474a45d25-=""></a>
                <a href="#"
                  data-cf-modified-9643b6383ce551c474a45d25-=""></a>
              </div>
              <p>THREE DIMENSIONAL SHAPES</p>
              <ul className="themes">
                <li><a href="home1.html">Earth Lines Sphere</a></li>
                <li><a href="home2.html">3D Abstract Ball</a></li>
                <li><a href="home3.html">Water Waves</a></li>
                <li><a href="home4.html">Liquids Wavy</a></li>
                <li><a href="home6.html">Solid Color</a></li>
                <li><a href="home5.html">Simple Strings</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSetting;