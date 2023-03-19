import React, { useState } from 'react';

function ProfileSideMenuBar() {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      <div className="responsive-sidebar-menu">
        <div className="overlay"></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className="menu scroll-nav-responsive d-flex">
              <li>
                <a className="scroll-to" href="#home">
                  <i className="las la-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#about">
                  <i className="lar la-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#resume">
                  <i className="las la-briefcase"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#services">
                  <i className="las la-stream"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#skills">
                  <i className="las la-shapes"></i> <span>Skills</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#portfolio">
                  <i className="las la-grip-vertical"></i> <span>Portfolios</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#testimonial">
                  <i className="lar la-comment"></i> <span>Testimonial</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#contact">
                  <i className="las la-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-social">
            <p>Social</p>
            <ul className="social-links d-flex align-items-center">
              <li>
                <a href="#"><i className="lab la-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="lab la-dribbble"></i></a>
              </li>
              <li>
                <a href="#"><i className="lab la-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSideMenuBar;