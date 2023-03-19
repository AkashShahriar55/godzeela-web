import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Header from '../../../partials/Header';
import PageIllustration from '../../../partials/PageIllustration';
import Banner from '../../../partials/Banner';
import ProfileSetting from './partials/ProfileSetting';
import ProfileSideMenuBar from './partials/ProfileSideMenuBar';
import ProfileSideNavBar from './partials/ProfileSideNavBar';
import ProfileLeftInfoCard from './partials/ProfileLeftInfoCard';
import ProfileHeroPage from './partials/ProfileHeroPage';
import ProfileAbout from './partials/ProfileAbout';
import ProfileResume from './partials/ProfileResume';
import ProfileService from './partials/ProfileService';
import ProfileSkills from './partials/ProfileSkills';
import ProfilePortfolio from './partials/ProfilePortfolio';
import ProfileTestimonial from './partials/ProfileTestimonial';
import ProfilePricing from './partials/ProfilePricing';
import ProfileContact from './partials/ProfileContact';
import Helmet from 'react-helmet';



class PublicProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }


  componentDidMount() {

 setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }


  render() {
    const { loading } = this.state;
    return (


      <div className="flex flex-col min-h-screen overflow-hidden">

        <Helmet>

          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            rel="stylesheet" />

          <link rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
          <link href="src/pages/PortfolioPages/Theme-drake/css/bootstrap.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="src/pages/PortfolioPages/Theme-drake/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="src/pages/PortfolioPages/Theme-drake/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="src/pages/PortfolioPages/Theme-drake/css/animate.min.css" />
          <link rel="stylesheet" href="src/pages/PortfolioPages/Theme-drake/css/smooth-scrollbar.css" />
          <link rel="stylesheet" href="src/pages/PortfolioPages/Theme-drake/css/lightbox.min.css" />
          <link rel="stylesheet" href="src/pages/PortfolioPages/Theme-drake/css/style.css" />
          <link rel="stylesheet" href="src/pages/PortfolioPages/Theme-drake/css/responsive.css"></link>
          <script data-cfasync="false"
            src="https://wordpressriverthemes.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/jquery.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/bootstrap.bundle.min.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/owl.carousel.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/gsap.min.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/ScrollTrigger.min.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/ScrollToPlugin.min.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/lightbox.min.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/main.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/ajax-form.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="src/pages/PortfolioPages/Theme-drake/js/color.js" type="9643b6383ce551c474a45d25-text/javascript"></script>
          <script src="https://wordpressriverthemes.com/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
            data-cf-settings="9643b6383ce551c474a45d25-|49" defer=""></script>
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993"
            integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA=="
            data-cf-beacon='{"rayId":"7a21cf1759b24486","version":"2023.2.0","r":1,"token":"52ad871770524b3e8ca1e53094efe67a","si":100}'
            crossorigin="anonymous"></script>
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
        {/* <div className="page-loader">
          <div className="bounceball">
  
          </div>
        </div> */}
        <span className="icon-menu">
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        <ProfileSetting />
        <ProfileSideMenuBar />
        <ProfileSideNavBar />
        <ProfileLeftInfoCard />
        <main className="drake-main">
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <ProfileLeftInfoCard />
              <ProfileHeroPage />
              <ProfileAbout />
              <ProfileResume />
              <ProfileService />
              <ProfileSkills />
              <ProfilePortfolio />
              <ProfileTestimonial />
              <ProfilePricing />
              <ProfileContact />
            </div>
          </div>
        </main>


      </div>
    );
  }

}

export default PublicProfile;