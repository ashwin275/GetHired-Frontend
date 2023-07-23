import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import LandingPageTop from './LandingPageTop';

function Landingpage2() {
  return (
   <><div>
     <Carousel fade>
      <Carousel.Item interval={1000}>
      <LandingPageTop/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
     <div className='w-full h-96 bg-dark'>hello</div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <LandingPageTop/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
     <div className='w-full h-96 bg-dark'>hello</div>
      </Carousel.Item>
    </Carousel>
   </div>
   </>
  )
}

export default Landingpage2
