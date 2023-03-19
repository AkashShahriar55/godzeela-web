import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css'




import AOS from 'aos';


import Home from './pages/LandingPage/Home';
import SignIn from './pages/SignInPage/SignIn';
import SignUp from './pages/SignUp';
import PublicProfile from './pages/PortfolioPages/Theme-drake/PublicProfile';
import ResetPassword from './pages/SignInPage/ResetPassword';

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
   
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<PublicProfile />} />
        <Route path="/signup" element={<PublicProfile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
