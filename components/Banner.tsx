import React from "react";
import styles from "../styles/css/banner.module.css";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
