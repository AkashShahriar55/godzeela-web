import React from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';




function Loader() {
    return (
        <div className="loader loader-1">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
      </div>
    );
  }
  
  export default Loader;