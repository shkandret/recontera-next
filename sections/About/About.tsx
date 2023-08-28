import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import VideoPlayer from "@/components/VideoPlayer";

import scroll from "@/images/scroll.svg";
import styles from "./About.module.scss";

interface AboutItems {
  title: string;
  subtitle: string;
  text: any;
}

interface AboutProps {
  data: AboutItems;
}

const About: React.FC<AboutProps> = ({ data }) => {
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
    <section ref={targetRef} id="about" className={styles["about"]}>
      <VideoPlayer
        src={"/background1.mp4"}
        className={styles["about__background-video"]}
      />
      <div className={styles["about__background-gradient"]} />
      <div className={styles["about__wrapper"]}>
        <div>
          <p
            className={`${styles["about__subtitle"]} ${
              isVisible ? styles["about__subtitle-active"] : "hidden"
            }`}
          >
            {data.subtitle}
          </p>
          <p
            className={`${styles["about__title"]} ${
              isVisible ? styles["about__title-active"] : "hidden"
            }`}
          >
            {data.title}
          </p>
        </div>
        <div className={`${isVisible ? styles["graphic"] : "hidden"}`}>
          <svg
            width="244"
            height="83"
            viewBox="0 0 244 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${styles["graphic__curve"]} ${
                isVisible ? styles["animate-graphic-curve"] : "hidden"
              }`}
              d="M 7 73 C 50 -3 148 -24 235 33"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2 4"
            ></path>
            <circle
              className={`${
                isVisible ? styles["graphic__point-start"] : "hidden"
              }`}
              cx="4"
              cy="79"
              r="3.5"
              stroke="white"
            />
            <circle
              className={`${
                isVisible ? styles["graphic__point-end"] : "hidden"
              }`}
              cx="240"
              cy="37"
              r="3.5"
              stroke="white"
            />
          </svg>
        </div>
        <div
          className={`${styles["about__text-container"]} ${
            isVisible ? styles["about__text-container-active"] : "hidden"
          }`}
        >
          <p className={styles["about__text"]}>{data.text}</p>
        </div>
      </div>
      <Link
        href="/"
        className={`${styles["scroll-down__btn"]} ${
          isVisible ? styles["scroll-down__btn-active"] : "hidden"
        }`}
      >
        <Image src={scroll} alt="scroll-down" width={24} height={56} />
      </Link>
    </section>
  );
};

export default About;
