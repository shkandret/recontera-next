import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";

import CardTech from "@/components/CardTech";

import imgCircles from "@/images/circles.svg";

import styles from "./SymbiosisTech.module.scss";

interface CardTechItem {
  number: any;
  icon: any;
  text: any;
}

interface SymbiosisTechItems {
  title: any;
  cardTech: CardTechItem[];
}
interface SymbiosisTechProps {
  data: SymbiosisTechItems;
  sliderData: any;
}

let lastScrollTime = 0;

const SymbiosisTech: React.FC<SymbiosisTechProps> = ({ data, sliderData }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    if (sliderRef.current) {
      sliderData(sliderRef);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [sliderData]);

  return (
    <section
      ref={targetRef}
      id="symbiosisTech"
      className={styles["symbiosisTech"]}
    >
      <div className={styles["symbiosisTech__wrapper"]}>
        <Image
          src={imgCircles}
          alt="circles"
          width={112}
          height={97}
          className={`${styles["symbiosisTech__image"]} ${
            isVisible ? styles["symbiosisTech__image-active"] : "hidden"
          }`}
        />
        <h1
          className={`${styles["symbiosisTech__title"]} ${
            isVisible ? styles["symbiosisTech__title-active"] : "hidden"
          }`}
        >
          {data.title}
        </h1>
      </div>
      <div
        ref={sliderRef}
        id="horizontalSlider"
        className={styles["swiper__wrapper"]}
      >
        <div className={styles["swiper__container"]}>
          {data.cardTech.map((cardContent, index) => (
            <CardTech {...cardContent} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymbiosisTech;
