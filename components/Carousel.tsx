import * as React from "react";
import styled, { css } from "styled-components";
import styles from "../styles/css/carousel.module.css";

const SCarouselWrapper = styled.div`
  display: flex;
`;

interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

interface ICarouselProps {
  currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <div className={styles.container}>
      <div>
        <SCarouselWrapper>
          <SCarouselSlides currentSlide={currentSlide}>
            {activeSlide}
          </SCarouselSlides>
        </SCarouselWrapper>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.prevBtn}
          onClick={() => {
            setCurrentSlide(
              (currentSlide - 1 + activeSlide.length) % activeSlide.length
            );
          }}
        >
          Prev
        </button>
        <button
          className={styles.nextBtn}
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
