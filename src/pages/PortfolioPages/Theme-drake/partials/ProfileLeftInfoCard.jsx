import React, { useState } from 'react';

function ProfileLeftInfoCard() {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      <div className="left-sidebar">
        <div className="sidebar-header d-flex align-items-center justify-content-between">
          <img src="../src/images/logo.png" alt="Logo" />
          <span className="designation">Framer Designer & Developer</span>
        </div>
        <img className="me" src="../src/images/me.jpg" alt="Me" />
        <h2 className="email"><a href="https://wordpressriverthemes.com/cdn-cgi/l/email-protection" className="__cf_email__"
          data-cfemail="422a272e2e2d0226302329276c2627312b252c">[email&#160;protected]</a></h2>
        <h2 className="address">Base in Los Angeles, CA</h2>
        <p className="copyright">&copy; 2022 Drake. All Rights Reserved</p>
        <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
          <li>
            <a href="#"><i className="lab la-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i className="lab la-dribbble"></i></a>
          </li>
          <li>
            <a href="#"><i className="lab la-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i className="lab la-github"></i></a>
          </li>
        </ul>
        <a href="#" className="theme-btn">
          <i className="las la-envelope"></i> Hire Me!
        </a>
      </div>
    </>
  );
}

export default ProfileLeftInfoCard;