import React from 'react';
import { Link } from 'react-router-dom';


import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';

function PublicProfile() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* <div className="page-loader">
    <div className="bounceball"></div>
  </div> */}
      <span className="icon-menu">
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
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
      <ul className="menu scroll-nav d-flex">
        <li>
          <a className="scroll-to" href="#home">
            <span>Home</span> <i className="las la-home"></i>
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#about">
            <span>About</span> <i className="lar la-user"></i>
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#resume">
            <span>Resume</span> <i className="las la-briefcase"></i>
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#services">
            <span>Services</span> <i className="las la-stream"></i>
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#skills">
            <span>Skills</span> <i className="las la-shapes"></i>
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#portfolio">
            <span>Portfolios</span> <i className="las la-grip-vertical"></i>
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#testimonial">
            <span>Testimonial</span> <i className="lar la-comment"></i>
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#contact">
            <span>Contact</span> <i className="las la-envelope"></i>
          </a>
        </li>
      </ul>
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
      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="left-sidebar">
              <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src="../src/images/logo.png" alt="Logo" />
                <span className="designation">Framer Designer & Developer</span>
              </div>
              <img className="me" src="../src/images/me.jpg" alt="Me" />
              <h2 className="email"><a href="https://wordpressriverthemes.com/cdn-cgi/l/email-protection" className="__cf_email__"
                data-cfemail="88e0ede4e4e7c8ecfae9e3eda6ecedfbe1efe6">[email&#160;protected]</a></h2>
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
            <section className="hero-section page-section scroll-to-page" id="home">
              <div className="custom-container">
                <div className="hero-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-home"></i> Introduce
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Say Hi from <span>Drake</span>, Framer
                      Designer and Developer</h1>
                  </div>
                  <p className="scroll-animation" data-animation="fade_from_bottom">I design and code beautifully simple things
                    and i love what i do. Just simple like that!</p>
                  <a href="#portfolio" className="go-to-project-btn scroll-to scroll-animation" data-animation="rotate_up">
                    <img src="../src/images/round-text.png" alt="Rounded Text" />
                    <i className="las la-arrow-down"></i>
                  </a>
                  <div className="facts d-flex">
                    <div className="left scroll-animation" data-animation="fade_from_left">
                      <h1>10+</h1>
                      <p>Years of <br />Experience</p>
                    </div>
                    <div className="right scroll-animation" data-animation="fade_from_right">
                      <h1>182+</h1>
                      <p>projects completed on <br />15 countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="about-area page-section scroll-to-page" id="about">
              <div className="custom-container">
                <div className="about-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="lar la-user"></i> About
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Every great design begin with<br />
                      an even <span>better story</span></h1>
                  </div>
                  <p className="scroll-animation" data-animation="fade_from_bottom">Since beginning my journey as a freelance
                    designer nearly 8 years ago,
                    I've done remote work for agencies, consulted for startups, and collaborated with
                    talented people to create digital products for both business and consumer use.
                    I'm quietly confident, naturally curious, and perpetually working on improving my
                    chopsone design problem at a time.</p>
                </div>
              </div>
            </section>
            <section className="resume-area page-section scroll-to-page" id="resume">
              <div className="custom-container">
                <div className="resume-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Education & <span>Experience</span></h1>
                  </div>
                  <div className="resume-timeline">
                    <div className="item scroll-animation" data-animation="fade_from_right">
                      <span className="date">2020 - Present</span>
                      <h2>Framer Desinger & Developer</h2>
                      <p>Brunodee Agency</p>
                      <h2>Front-End WordPress Developer</h2>
                      <p>Envato Market</p>
                    </div>
                    <div className="item scroll-animation" data-animation="fade_from_right">
                      <span className="date">2013 - 2019</span>
                      <h2>Webflow Developer & Co-Founder</h2>
                      <p>Designflow Studio</p>
                      <h2>Web Designer</h2>
                      <p>Freelance</p>
                      <h2>Leader Team of Marketing</h2>
                      <p>AHA Marketing Agency</p>
                    </div>
                    <div className="item scroll-animation" data-animation="fade_from_right">
                      <span className="date">2010 - 2013</span>
                      <h2>Bachelor Degree of Information Technology</h2>
                      <p>US RMIT University</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="services-area page-section scroll-to-page" id="services">
              <div className="custom-container">
                <div className="services-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-stream"></i> Services
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Specializations</span></h1>
                  </div>
                  <div className="services-items">
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-bezier-curve"></i>
                      <h2>Website Design</h2>
                      <p>I created digital products with unique ideas use Figma & Framer</p>
                      <span className="projects">24 Projects</span>
                    </div>
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-code"></i>
                      <h2>Development</h2>
                      <p>I build website go live with Framer, Webflow or WordPress</p>
                      <span className="projects">126 Projects</span>
                    </div>
                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-bezier-curve"></i>
                      <h2>SEO/Marketing</h2>
                      <p>Increase the traffic for your website with SEO optimized</p>
                      <span className="projects">8 Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="skills-area page-section scroll-to-page" id="skills">
              <div className="custom-container">
                <div className="skills-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-shapes"></i> my skills
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Advantages</span></h1>
                  </div>
                  <div className="row skills text-center">
                    <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                      <div className="skill">
                        <div className="skill-inner">
                          <img src="../src/images/figma.png" alt="Figma" />
                          <h1 className="percent">92%</h1>
                        </div>
                        <p className="name">Figma</p>
                      </div>
                    </div>
                    <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                      <div className="skill">
                        <div className="skill-inner">
                          <img src="../src/images/framer.png" alt="Framer" />
                          <h1 className="percent">85%</h1>
                        </div>
                        <p className="name">Framer</p>
                      </div>
                    </div>
                    <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                      <div className="skill">
                        <div className="skill-inner">
                          <img src="../src/images/webflow.png" alt="Webflow" />
                          <h1 className="percent">80%</h1>
                        </div>
                        <p className="name">Webflow</p>
                      </div>
                    </div>
                    <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                      <div className="skill">
                        <div className="skill-inner">
                          <img src="../src/images/react.png" alt="React" />
                          <h1 className="percent">90%</h1>
                        </div>
                        <p className="name">React</p>
                      </div>
                    </div>
                    <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                      <div className="skill">
                        <div className="skill-inner">
                          <img src="../src/images/wordpress.png" alt="WordPress" />
                          <h1 className="percent">86%</h1>
                        </div>
                        <p className="name">WordPress</p>
                      </div>
                    </div>
                    <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                      <div className="skill">
                        <div className="skill-inner">
                          <img src="../src/images/laravel.png" alt="Laravel/PHP" />
                          <h1 className="percent">70%</h1>
                        </div>
                        <p className="name">Laravel/PHP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="portfolio-area page-section scroll-to-page" id="portfolio">
              <div className="custom-container">
                <div className="portfolio-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-grip-vertical"></i> portfolio
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Featured <span>Projects</span></h1>
                  </div>
                  <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                      <div className="portfolio-item portfolio-full">
                        <div className="portfolio-item-inner">
                          <a href="../src/images/portfolio1.jpg" data-lightbox="example-1">
                            <img src="../src/images/portfolio1.jpg" alt="Portfolio" />
                          </a>
                          <ul className="portfolio-categories">
                            <li>
                              <a href="#">Figma</a>
                            </li>
                            <li>
                              <a href="#">Framer</a>
                            </li>
                            <li>
                              <a href="#">WordPress</a>
                            </li>
                          </ul>
                        </div>
                        <h2><a href="#">Bureau - Architecture Studio Website</a></h2>
                      </div>
                    </div>
                    <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                      <div className="portfolio-item portfolio-half">
                        <div className="portfolio-item-inner">
                          <a href="../src/images/portfolio2.jpg" data-lightbox="example-1">
                            <img src="../src/images/portfolio2.jpg" alt="Portfolio" />
                          </a>
                          <img src="../src/images/portfolio2.jpg" alt="Portfolio" />
                          <ul className="portfolio-categories">
                            <li>
                              <a href="#">WordPress</a>
                            </li>
                            <li>
                              <a href="#">Larevel/PHP</a>
                            </li>
                          </ul>
                        </div>
                        <h2><a href="#">Moonex WordPress Theme</a></h2>
                      </div>
                    </div>
                    <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                      <div className="portfolio-item portfolio-half">
                        <div className="portfolio-item-inner">
                          <a href="../src/images/portfolio3.jpg" data-lightbox="example-1">
                            <img src="../src/images/portfolio3.jpg" alt="Portfolio" />
                          </a>
                          <ul className="portfolio-categories">
                            <li>
                              <a href="#">Figma</a>
                            </li>
                            <li>
                              <a href="#">Webflow</a>
                            </li>
                          </ul>
                        </div>
                        <h2><a href="#">Taskly Dashboard</a></h2>
                      </div>
                    </div>
                    <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                      <div className="portfolio-item portfolio-half">
                        <div className="portfolio-item-inner">
                          <a href="../src/images/portfolio4.jpg" data-lightbox="example-1">
                            <img src="../src/images/portfolio4.jpg" alt="portfolio" />
                          </a>
                          <ul className="portfolio-categories">
                            <li>
                              <a href="#">Figma</a>
                            </li>
                            <li>
                              <a href="#">React</a>
                            </li>
                          </ul>
                        </div>
                        <h2><a href="#">Hinterland - Real Estate Site Redesign</a></h2>
                      </div>
                    </div>
                    <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom">
                      <div className="portfolio-item portfolio-half">
                        <div className="portfolio-item-inner">
                          <a href="../src/images/portfolio5.jpg" data-lightbox="example-1">
                            <img src="../src/images/portfolio5.jpg" alt="portfolio" />
                          </a>
                          <ul className="portfolio-categories">
                            <li>
                              <a href="#">Framer</a>
                            </li>
                          </ul>
                        </div>
                        <h2><a href="#">Lewis Portfolio Framer Template</a></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonial-area page-section scroll-to-page" id="testimonial">
              <div className="custom-container">
                <div className="testimonial-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="lar la-comment"></i> testimonial
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Trusted by <span>Hundered Clients</span>
                    </h1>
                  </div>
                  <div className="testimonial-slider-wrap scroll-animation" data-animation="fade_from_bottom">
                    <div className="owl-carousel testimonial-slider owl-theme">
                      <div className="testimonial-item">
                        <div className="testimonial-item-inner">
                          <div className="author d-flex align-items-center">
                            <img src="../src/images/testimonial-1.jpg" alt="portfolio" />
                            <div className="right">
                              <h3>Paublo Dybala</h3>
                              <p className="designation">CEO of <span>IBM Global</span></p>
                            </div>
                          </div>
                          <p>“Drake - A Developer with the creativity, professional and
                            master of code. Much more than what i'm expect.
                            High quality product & flexiable price. Recommended!.”</p>
                          <a href="#" className="project-btn">Project</a>
                        </div>
                      </div>
                      <div className="testimonial-item">
                        <div className="testimonial-item-inner">
                          <div className="author d-flex align-items-center">
                            <img src="../src/images/testimonial-2.jpg" alt="portfolio" />
                            <div className="right">
                              <h3>Christina Morillo</h3>
                              <p className="designation">Product Management of <span>Invision App Inc</span></p>
                            </div>
                          </div>
                          <p>“Drake was a real pleasure to work with and we look
                            forward to working with him again. He's definitely the kind of
                            designer that you can trust with any project from A-Z.”</p>
                          <a href="#" className="project-btn">Project</a>
                        </div>
                      </div>
                      <div className="testimonial-item">
                        <div className="testimonial-item-inner">
                          <div className="author d-flex align-items-center">
                            <img src="../src/images/testimonial-3.jpg" alt="portfolio" />
                            <div className="right">
                              <h3>Phil Foden</h3>
                              <p className="designation">Director of <span>Envato LLC</span></p>
                            </div>
                          </div>
                          <p>“Extremely profressional and fast service!. Drake is a master
                            of code and he also very creative. We done 3 projects with
                            him and certain will continue.”</p>
                          <a href="#" className="project-btn">Project</a>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-footer-nav">
                      <div className="testimonial-nav d-flex align-items-center">
                        <button className="prev"><i className="las la-angle-left"></i></button>
                        <div id="testimonial-slide-count"></div>
                        <button className="next"><i className="las la-angle-right"></i></button>
                      </div>
                    </div>
                  </div>
                  <div className="clients-logos">
                    <h4 className="scroll-animation" data-animation="fade_from_bottom">work with 60+ brands worldwide</h4>
                    <div className="row align-items-center">
                      <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                        <img src="../src/images/client-1.png" alt="client" />
                      </div>
                      <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                        <img src="../src/images/client-2.png" alt="client" />
                      </div>
                      <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                        <img src="../src/images/client-3.png" alt="client" />
                      </div>
                      <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                        <img src="../src/images/client-4.png" alt="client" />
                      </div>
                      <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                        <img src="../src/images/client-5.png" alt="client" />
                      </div>
                      <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                        <img src="../src/images/client-6.png" alt="client" />
                      </div>
                      <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                        <img src="../src/images/client-7.png" alt="client" />
                      </div>
                      <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                        <img src="../src/images/client-8.png" alt="client" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pricing-area page-section scroll-to-page" id="pricing">
              <div className="custom-container">
                <div className="pricing-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-dollar-sign"></i> pricing
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Pricing</span></h1>
                  </div>
                  <div className="pricing-table-items">
                    <div className="row">
                      <div className="col-md-6 scroll-animation" data-animation="fade_from_left">
                        <div className="pricing-table">
                          <div className="pricing-table-header">
                            <div className="top d-flex justify-content-between align-items-start">
                              <h4>basic</h4>
                              <p className="text-right">Have design ready to build?<br />
                                or small budget</p>
                            </div>
                            <h1>$49 <span>/ hours</span></h1>
                          </div>
                          <ul className="feature-lists">
                            <li>Need your wireframe</li>
                            <li>Design with Figma, Framer</li>
                            <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                            <li>Remote/Online</li>
                            <li>Work in business days, no weekend.</li>
                            <li>Support 6 months</li>
                          </ul>
                          <a href="#" className="theme-btn">pick this package</a>
                        </div>
                      </div>
                      <div className="col-md-6 scroll-animation" data-animation="fade_from_right">
                        <div className="pricing-table">
                          <div className="pricing-table-header">
                            <div className="top d-flex justify-content-between align-items-start">
                              <h4>premium</h4>
                              <p className="text-right">Not have any design?<br />
                                Leave its for me</p>
                            </div>
                            <h1>$99 <span>/ hours</span></h1>
                          </div>
                          <ul className="feature-lists">
                            <li>Don't need wireframe or anything</li>
                            <li>Design with Figma, Framer from scratch</li>
                            <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                            <li>Remote/Online</li>
                            <li>Work with both weekend</li>
                            <li>Support 12 months</li>
                            <li>Your project alway be priority</li>
                            <li>Customer care gifts</li>
                          </ul>
                          <a href="#" className="theme-btn">pick this package</a>
                        </div>
                      </div>
                    </div>
                    <p className="info scroll-animation" data-animation="fade_from_bottom">
                      Don't find any package match with your plan!<br />
                      Want to setup a new tailor-made package for only you?. <a href="#">Contact Us</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="contact-area page-section scroll-content" id="contact">
              <div className="custom-container">
                <div className="contact-content content-width">
                  <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                      <i className="las la-dollar-sign"></i> contact
                    </h4>
                    <h1 className="scroll-animation" data-animation="fade_from_bottom">Let's Work <span>Together!</span></h1>
                  </div>
                  <h3 className="scroll-animation" data-animation="fade_from_bottom"><a
                    href="https://wordpressriverthemes.com/cdn-cgi/l/email-protection" className="__cf_email__"
                    data-cfemail="7018151c1c1f301402111b155e14150319171e">[email&#160;protected]</a></h3>
                  <p id="required-msg">* Marked fields are required to fill.</p>
                  <form className="contact-form scroll-animation" data-animation="fade_from_bottom" method="POST"
                    action="https://wordpressriverthemes.com/HTML/drake/mailer.php">
                    <div className="alert alert-success messenger-box-contact__msg" role="alert">
                      Your message was sent successfully.
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <label htmlFor="full-name">full Name <sup>*</sup></label>
                          <input type="text" name="full-name" id="full-name" placeholder="Your Full Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label htmlFor="email">Email <sup>*</sup></label>
                          <input type="email" name="email" id="email" placeholder="Your email adress" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label htmlFor="phone-number">phone <span>(optional)</span></label>
                          <input type="text" name="phone-number" id="phone-number" placeholder="Your number phone" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label htmlFor="subject">subject <sup>*</sup></label>
                          <select name="subject" id="subject">
                            <option value="">Select a subject</option>
                            <option value="subject1">Subject 1</option>
                            <option value="subject2">Subject 2</option>
                            <option value="subject3">Subject 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-group">
                          <label htmlFor="budget">your budget <span>(optional)</span></label>
                          <input type="number" name="budget" id="budget" placeholder="A range budget htmlFor your project" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-group">
                          <label htmlFor="message">message</label>
                          <textarea name="message" id="message" placeholder="Wrire your message here ..."></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-group upload-attachment">
                          <div>
                            <label htmlFor="upload-attachment">
                              <i className="las la-cloud-upload-alt"></i> add an attachment
                              <input type="file" name="file" id="upload-attachment" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-group submit-btn-wrap">
                          <button className="theme-btn" name="submit" type="submit" id="submit-form">send message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
  

    </div>
  );
}

export default PublicProfile;