import React, { useRef, useEffect, useState } from "react";

import CardAdvantages from "@/components/CardAdvantages";

import styles from "./Advantages.module.scss";

interface ButtonItems {
  text: string;
}

interface CardAdvantagesItem {
  number: string;
  icon: any;
  textFirst: any;
  textSecond: any;
  button: ButtonItems;
}

interface AdvantagesItems {
  title: string;
  cardAdvantages: CardAdvantagesItem[];
}

interface AdvantagesProps {
  data: AdvantagesItems;
}

const Advantages: React.FC<AdvantagesProps> = ({ data }) => {
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
    <section ref={targetRef} id="advantages" className={styles["advantages"]}>
      <p
        className={`${styles["advantages__title"]} ${
          isVisible ? styles["advantages__title-active"] : "hidden"
        }`}
      >
        {data.title}
      </p>
      <ul
        id="verticalSlider"
        className={`${styles["advantages__cards"]} ${
          isVisible ? styles["advantages__cards-active"] : "hidden"
        }`}
      >
        {data.cardAdvantages.map((cardContent, index) => (
          <li key={index}>
            <CardAdvantages {...cardContent} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Advantages;
