import React, { useRef, useState, useEffect } from "react";
import styles from "./Slider.module.scss";

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollAmount: number) => {
    if (sliderRef.current) {
      const newScrollLeft = scrollLeft + scrollAmount;
      sliderRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      setScrollLeft(newScrollLeft);
    }
  };

  return (
    <div className={styles["horizontal-slider"]}>
      <div className={styles["slider-container"]} ref={sliderRef}>
        <div className={styles["slider"]}>
          <div className={styles["slider-item"]}>Слайд 1</div>
          <div className={styles["slider-item"]}>Слайд 2</div>
          <div className={styles["slider-item"]}>Слайд 3</div>
          <div className={styles["slider-item"]}>Слайд 4</div>
          <div className={styles["slider-item"]}>Слайд 4</div>
          <div className={styles["slider-item"]}>Слайд 4</div>
          <div className={styles["slider-item"]}>Слайд 4</div>
          <div className={styles["slider-item"]}>Слайд 4</div>
          <div className={styles["slider-item"]}>Слайд 4</div>
          <div className={styles["slider-item"]}>Слайд 4</div>
          <div className={styles["slider-item"]}>Слайд 4</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
