import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faPerson } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/css/nav.module.css";
import Image from "next/image";

const Nav = () => {
  const [show, setShow] = useState<boolean>(false);
  const windowY = () => {
    if (window.scrollY > 2200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", windowY);
    return () => window.removeEventListener("scroll", windowY);
  }, []);
  return (
    <>
      {show ? (
        <nav className={styles.whiteContainer}>
          <div className={styles.navLogo}>
            <Image src="/logo1.png" alt="white logo" width={80} height={80} />
          </div>
          <ul className={styles.menu}>
            <li className={styles.home}>홈</li>
            <li className={styles.newMenu}>신메뉴</li>
            <li className={styles.recommendedMenu}>추천 메뉴</li>
            <li className={styles.setMenu}>세트 메뉴</li>
            <li className={styles.category}>
              카테고리
              <ul className={styles.submenu}>
                <li className={styles.appetizer}>전채 요리</li>
                <li className={styles.sashimi}>생선회</li>
                <li className={styles.grilledSteamedAndFried}>
                  구이, 찜, 튀김 요리
                </li>
                <li className={styles.riceAndNoodle}>밥, 면류</li>
                <li className={styles.drink}>주류, 음료</li>
              </ul>
            </li>
          </ul>

          <ul className={styles.navIcons}>
            <li className={styles.navIconSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li className={styles.navIconBell}>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li className={styles.navIconPerson}>
              <FontAwesomeIcon icon={faPerson} />
              이름
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={styles.blackContainer}>
          <div className={styles.navLogo}>
            <Image src="/logo2.png" alt="black logo" width={80} height={80} />
          </div>
          <ul className={styles.menu}>
            <li className={styles.home}>홈</li>
            <li className={styles.newMenu}>신메뉴</li>
            <li className={styles.recommendedMenu}>추천 메뉴</li>
            <li className={styles.setMenu}>세트 메뉴</li>
            <li className={styles.category}>
              카테고리
              <ul className={styles.submenu}>
                <li className={styles.appetizer}>전채 요리</li>
                <li className={styles.sashimi}>생선회</li>
                <li className={styles.grilledSteamedAndFried}>
                  구이, 찜, 튀김 요리
                </li>
                <li className={styles.riceAndNoodle}>밥, 면류</li>
                <li className={styles.drink}>주류, 음료</li>
              </ul>
            </li>
          </ul>

          <ul className={styles.navIcons}>
            <li className={styles.navIconSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li className={styles.navIconBell}>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li className={styles.navIconPerson}>
              <FontAwesomeIcon icon={faPerson} />
              이름
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
