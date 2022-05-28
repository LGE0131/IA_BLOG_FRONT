import React from "react";
import styles from "../styles/css/recomendedMenu.module.css";
import Card from "./Card";
import Carousel from "../components/Carousel";
import SlideOne from "../components/carouselSlides/SlideOne";
import SlideTwo from "../components/carouselSlides/SlideTwo";
import SlideThree from "../components/carouselSlides/SlideThree";
import SlideFour from "../components/carouselSlides/SlideFour";

const RecomendedMenu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Recomended Menu</h1>
      <div className={styles.carousel}>
        <Carousel>
          <SlideOne />
          <SlideTwo />
          <SlideThree />
          <SlideFour />
        </Carousel>
      </div>
    </div>
  );
};

export default RecomendedMenu;
