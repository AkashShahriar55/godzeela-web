import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';
import './css/owl.carousel.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/animate.min.css';
import './css/smooth-scrollbar.css';
import './css/lightbox.min.css';
import './css/responsive.css';
import './css/animate.min.css';
import './css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.css'




import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PublicProfile from './pages/PublicProfile';
import ResetPassword from './pages/ResetPassword';

import { Helmet } from 'react-helmet';

function App() {

  const location = useLocation();


  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>

    <Helmet>
      
    </Helmet>
    <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com/"/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"/>
        <link rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<PublicProfile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
