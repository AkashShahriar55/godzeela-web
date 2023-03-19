import React, { useEffect, useState } from "react";
import  { Component } from 'react';
import { Helmet } from 'react-helmet';


import HeroHome from './partials/HeroHome';
import FeaturesBlocks from './partials/FeaturesBlocks';
import AboutProduct from './partials/AboutProduct';
import ProductListing from './partials/Newsletter';
import ProductDesign from './partials/ProductDesign';
import ImportantFeature from './partials/ImportantFeature';
import FAQ from './partials/FAQ';
import Testimonials from './partials/Testimonials';
import Contact from './partials/Contact';
import Loader from '../../partials/Loader'


import $ from 'jquery';

 /*Testing GIT*/


class Home extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }


  

  componentDidMount() {
    this.init();
 setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  init() {
    "use strict";


    // Navbar collapse on click
    $('.mainmenu-area #navbarNav .nav-link').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

    // link will target id and scroll
    $(".mainmenu-area #navbarNav .nav-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate({
          scrollTop: $($anchor.attr("href")).offset().top - 80,
        },
          1000
        );
      event.preventDefault();
    });




    //  //scrollspy menu
    //  $('body').scrollspy({
    //   target: '#navbarNav',
    //   offset: 100
    // });


    /*back to top-*/
    $(document).on("click", "#scrollUp", function () {
      $("html,body").animate({
        scrollTop: 0,
      },
        2000
      );
    });


    // sticky navigation menu
    var lastScrollTop = "";
    $(window).on("scroll", function () {
      var $window = $(window);
      if ($window.scrollTop() > 400) {
        $(".mainmenu-area").addClass("nav-fixed");
      } else {
        $(".mainmenu-area").removeClass("nav-fixed");
      }

      /*---------------------------
         back to top show / hide
     ---------------------------*/
      var st = $(this).scrollTop();
      if ($(window).scrollTop() > 1000) {
        $("#scrollUp").fadeIn();
      } else {
        $("#scrollUp").fadeOut();
      }
      lastScrollTop = st;
    });

    // //   Magnific Popup Activation Probucket
    // $(".youtube-video").magnificPopup({
    //   type: "video",
    // });
    $(window).on("load", function () {
      /*Preloader*/
      var preLoder = $("#preloader");
      preLoder.addClass("hide");
    });
  }

  render() {
    const { loading } = this.state;
    return (

      <div className="home2 flex flex-col min-h-screen ">
        <Helmet>

          {/* <!--=== Reset Css ===--> */}
          <link rel="stylesheet" href="src/pages/LandingPage/css/normalize.css" />
          {/* <!--=== Bootstrap ===--> */}
          <link rel="stylesheet" href="src/pages/LandingPage/css/bootstrap-v4.5.3.min.css" />
          {/* <!--=== Fontawesome icon ===--> */}
          <link rel="stylesheet" href="src/pages/LandingPage/css/font-awesome-5.10.2.min.css" />
          {/* <!--=== Owl carousel ===--> */}
          <link rel="stylesheet" href="src/pages/LandingPage/css/owl.carousel.min.css" />
          {/* <!--=== Magnific PopUp ===--> */}
          <link rel="stylesheet" href="src/pages/LandingPage/css/magnific-popup.css" />
          {/* <!--=== Main Css ===--> */}
          <link rel="stylesheet" href="src/pages/LandingPage/css/style.css" />
          {/* <!--=== Responsive Css ===--> */}
          <link rel="stylesheet" href="src/pages/LandingPage/css/responsive.css" />

          {/* <!--==================================================================--> */}
          <script src="src/pages/LandingPage/js/jquery-v2.1.1.min.js"></script>

          {/* <!--=== All Plugin ===--> */}
          <script src="src/pages/LandingPage/js/bootstrap.v4.5.3.min.js"></script>
          <script src="src/pages/LandingPage/js/proper-min.js"></script>
          <script src="src/pages/LandingPage/js/wow.min.js"></script>
          <script src="src/pages/LandingPage/js/owl.carousel.min.js"></script>
          <script src="src/pages/LandingPage/js/jquery.magnific-popup.min.js"></script>

          {/* <!--=== All Active ===--> */}
          <script src="src/pages/LandingPage/js/main.js"></script>
        </Helmet>

        {loading ? (
       <div className="preloader" id="preloader">
       <div className="loader loader-1">
         <div className="loader-outter"></div>
         <div className="loader-inner"></div>
       </div>
     </div>
      ) :(
        <div></div>
      )}
        {/* <div className="preloader" id="preloader">
          <div className="loader loader-1">
            <div className="loader-outter"></div>
            <div className="loader-inner"></div>
          </div>
        </div> */}

        <div className="mainmenu-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="#">
                    <img src="../src/images/logo.png" alt="Logo" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#product">Products</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#pricing">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#faq">Faq</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                      </li>
                      <li className="nav-item bg-purple-600">
                        <a className="nav-link" href="signin">Sign In</a>
                      </li>

                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <HeroHome />

        <FeaturesBlocks />
        {/* <!--====== Product Features End======--> */}

        {/* <!--====== About The Product Start ======--> */}
        <AboutProduct />
        {/* <!--====== About The Product End ======--> */}

        {/* <!--====== How It Stacks Up Start ======--> */}
        <ProductListing />
        {/* <!--====== How It Stacks Up End ======--> */}

        {/* <!--====== Design DNA Start ======--> */}
        <ProductDesign />
        {/* <!--====== Design DNA End ======--> */}

        {/* <!--====== Important-Features Start ======--> */}
        <ImportantFeature />
        {/* <!--====== Important-Features End ======--> */}

        {/* <!--====== FAQ Start ======--> */}
        <FAQ />
        {/* <!--====== FAQ End ======--> */}

        {/* <!--====== Testimonial Start ======--> */}
        <Testimonials />
        {/* <!--====== Testimonial End ======--> */}

        {/* <!--====== Contact Start ======--> */}
        <Contact />
        {/* <!--====== Contact End ======--> */}

        {/* <!--====== Google Maps ======--> */}
        <div className="our-office-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.36624637789!2d90.37193843389441!3d23.7971419424998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cd7313eb1d%3A0x1b8b8fc444fa23eb!2sKazipara%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1606306681112!5m2!1sen!2sbd"
            allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
        {/* <!--====== Google End ======--> */}

        {/* <!--====== Footer Start ======--> */}
        <div className="footer" style={{ backgroundImage: 'url("../src/images/Hero-area-bg.png")' }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-content">
                  <div className="footer-icon">
                    <img src="../src/images/logo.png" alt="" />
                  </div>

                  <div className="footer-link">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Features</a></li>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Faq</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--====== Footer End ======--> */}

        {/* <!--====== Scroll To Top Start ======--> */}
        <div id="scrollUp" title="Scroll To Top">
          <i className="fas fa-arrow-up"></i>
        </div>
        {/* <!--====== Scroll To Top End ======--> */}


      </div>
    );
  }


}







export default Home;