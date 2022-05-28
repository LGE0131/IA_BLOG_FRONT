import React from "react";
import styled from "styled-components";

import Carousel from "../components/Carousel";
import SlideOne from "../components/carouselSlides/SlideOne";
import SlideTwo from "../components/carouselSlides/SlideTwo";
import SlideThree from "../components/carouselSlides/SlideThree";
import SlideFour from "../components/carouselSlides/SlideFour";

const App: React.FC = () => {
  return (
    <div>
      <Carousel>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
        <SlideFour />
      </Carousel>
    </div>
  );
};
export default App;
