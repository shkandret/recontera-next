import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";

import styles from "./RelevantToCompany.module.scss";

interface RelevantToCompanyItems {
  title: string;
  text: any;
  imgB2C: any;
  imgB2B: any;
  imgBackground: any;
}

interface RelevantToCompanyProps {
  data: RelevantToCompanyItems;
}

const RelevantToCompany: React.FC<RelevantToCompanyProps> = ({ data }) => {
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
      id="relevantToCompany"
      className={styles["relevantToCompany"]}
    >
      <p
        className={`${styles["relevantToCompany__title"]} ${
          isVisible ? styles["relevantToCompany__title-active"] : "hidden"
        }`}
      >
        {data.title}
      </p>
      <div className={styles["relevantToCompany__wrapper"]}>
        <div
          className={`${styles["relevantToCompany__sector-b2c"]} ${
            isVisible
              ? styles["relevantToCompany__sector-b2c-active"]
              : "hidden"
          }`}
        >
          <Image src={data.imgB2C} alt="b2c" width={64} height={64} />
          <p className={styles["relevantToCompany__sector-subtitle"]}>
            Для сектора
          </p>
          <p className={styles["relevantToCompany__sector-title"]}>B2C</p>
          <svg
            width="236"
            height="137"
            viewBox="0 0 236 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`hidden ${
              isVisible
                ? `${styles["relevantToCompany__b2c-line"]} ${styles["relevantToCompany__b2c-line-active"]}`
                : "hidden"
            }`}
          >
            <path
              d="M10 133.014C114 140 105 -26 226 4.56788"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2 4"
            />
            <circle cx="4" cy="132.464" r="3.5" stroke="white" />
            <circle cx="232" cy="8.46387" r="3.5" stroke="white" />
          </svg>
        </div>
        <p
          className={`${styles["relevantToCompany__text"]} ${
            isVisible ? styles["relevantToCompany__text-active"] : "hidden"
          }`}
        >
          {data.text}
        </p>
        <div
          className={`${styles["relevantToCompany__sector-b2b"]} ${
            isVisible
              ? styles["relevantToCompany__sector-b2b-active"]
              : "hidden"
          }`}
        >
          <Image src={data.imgB2B} alt="b2b" width={64} height={64} />
          <p className={styles["relevantToCompany__sector-subtitle"]}>
            Для сектора
          </p>
          <p className={styles["relevantToCompany__sector-title"]}>B2B</p>
          <svg
            width="279"
            height="161"
            viewBox="0 0 279 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`hidden ${
              isVisible
                ? `${styles["relevantToCompany__b2b-line"]} ${styles["relevantToCompany__b2b-line-active"]}`
                : "hidden"
            }`}
          >
            <path
              d="M10 140.526C140 194 252 130 274 12.5244"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2 4"
            />
            <circle cx="4" cy="136.988" r="3.5" stroke="white" />
            <circle cx="275" cy="4.98828" r="3.5" stroke="white" />
          </svg>
        </div>
        <Image
          src={data.imgBackground}
          alt="bg2"
          width={560}
          height={560}
          className={`${styles["relevantToCompany__background"]} ${
            isVisible
              ? styles["relevantToCompany__background-active"]
              : "hidden"
          }`}
        />
      </div>
    </section>
  );
};

export default RelevantToCompany;
