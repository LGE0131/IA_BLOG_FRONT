import React from "react";
import styles from "../styles/css/banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.bannerImg1}>
        <Image src="/last.png" alt="explanation" width={960} height={480} />
      </li>
      <li className={styles.bannerImg2}>
        <Image src="/light.jpg" alt="explanation" width={360} height={500} />
      </li>
    </ul>
  );
};

export default Banner;
