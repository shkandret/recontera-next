import React, { useRef, useEffect, useState } from "react";

import CardBenefits from "@/components/CardBenefits";

import styles from "./Benefits.module.scss";

interface CardBenefitsItem {
  icon: any;
  text: string;
}

interface BenefitsItems {
  title: string;
  text: any;
  cardBenefits: CardBenefitsItem[];
}

interface BenefitsProps {
  data: BenefitsItems;
}

const Benefits: React.FC<BenefitsProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
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

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <section
      ref={targetRef}
      id="benefits"
      className={`${styles["benefits"]} ${isVisible ? "" : "hidden"}`}
    >
      <p
        className={`${styles["benefits__title"]} ${
          isVisible ? styles["benefits__title-active"] : "hidden"
        }`}
      >
        {data.title}
      </p>
      <p
        className={`${styles["benefits__text"]} ${
          isVisible ? styles["benefits__text-active"] : "hidden"
        }`}
      >
        {data.text}
      </p>
      <ul
        className={`${styles["benefits__cards"]} ${
          isVisible ? styles["benefits__cards-active"] : "hidden"
        }`}
      >
        {data.cardBenefits.map((cardContent, index) => (
          <li key={index}>
            <CardBenefits {...cardContent} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
