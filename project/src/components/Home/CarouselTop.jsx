import React from "react";
import Carousel from "react-bootstrap/Carousel";
import LandingPageBanners from "./LandingPageBanners";
import LandingPageTop from "./LandingPageTop";
import Landingpage3 from "./Landingpage3";
import LandingPageBanners1 from "./LandingPageBanners1";
import LandingPageBanners2 from "./LandingPageBanners2";

function CarouselTop() {
  return (
    <div className="mb-6">
      <Carousel interval>
        <Carousel.Item interval={2500}>
        
          <LandingPageBanners1 />
        
        </Carousel.Item>
        <Carousel.Item interval={2500}>
      
          <LandingPageBanners />
         
        </Carousel.Item>
        <Carousel.Item interval={2500}>
       
          <LandingPageBanners2 />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselTop;
