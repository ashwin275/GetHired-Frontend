import React, { useState, useEffect } from 'react';
import LandingPageTop from './LandingPageTop';

import Landingpage3 from './Landingpage3';
import Landingpage4 from './Landingpage4';
import Landingpage5 from './Landingpage5';
import Loading from '../LoadingSpinner/Loading';


import CarouselTop from './CarouselTop';
import LandingPageBanners2 from './LandingPageBanners2';

function Landingpage() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className='w-full bg-white'>
      {isLoading ? (
        <div className=''>
          <Loading/>
          {/* <InnerLoader/> */}
        </div>
      ) : (
        <div className='w-10/12 mx-auto'>
        
        <CarouselTop/>
        <LandingPageTop />
          <Landingpage3 />
         
          <Landingpage4 />
          <Landingpage5 />
        </div>
      )}
    </div>
  );
}

export default Landingpage;
