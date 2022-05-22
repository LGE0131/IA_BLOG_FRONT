import React from "react";
import styles from "../styles/css/banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.bannerImg1}>
        <Image src="/last.png" alt="explanation" width={1080} height={540} />
      </li>
      <li className={styles.bannerImg2}>
        <Image src="/light.jpg" alt="explanation" width={300} height={400} />
      </li>
    </ul>
  );
};

export default Banner;
