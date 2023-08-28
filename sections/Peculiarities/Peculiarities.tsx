import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";

import styles from "./Peculiarities.module.scss";

interface PeculiaritiesItems {
  title: string;
  textFirst: any;
  textSecond: any;
  background: any;
}

interface PeculiaritiesProps {
  data: PeculiaritiesItems;
}

const Peculiarities: React.FC<PeculiaritiesProps> = ({ data }) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isVisibleFirst, setIsVisibleFirst] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);

  useEffect(() => {
    const observedElements = [
      document.getElementById("peculiarities-first"),
      document.getElementById("peculiarities-second"),
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const observedElement = observedElements.find(
          (item) => item === entry.target
        );
        if (
          entry.isIntersecting &&
          observedElement?.id === "peculiarities-first"
        ) {
          setIsVisibleFirst(true);
        } else if (
          entry.isIntersecting &&
          observedElement?.id === "peculiarities-second"
        ) {
          setIsVisibleSecond(true);
        }
      });
    }, options);

    observedElements.forEach((item) => {
      if (item) {
        observer.current?.observe(item);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <section id="peculiarities" className={styles["peculiarities"]}>
      <div
        id="peculiarities-first"
        className={`${styles["peculiarities__first"]} ${
          isVisibleFirst ? "" : "hidden"
        }`}
      >
        <p
          className={`${styles["peculiarities__first-title"]} ${
            isVisibleFirst
              ? styles["peculiarities__first-title-active"]
              : "hidden"
          }`}
        >
          {data.title}
        </p>
        <p
          className={`${styles["peculiarities__first-text"]} ${
            isVisibleFirst
              ? styles["peculiarities__first-text-active"]
              : "hidden"
          }`}
        >
          {data.textFirst}
        </p>
      </div>
      <Image
        src={data.background}
        alt="bg3"
        width={3600}
        height={1105}
        className={styles["peculiarities__background"]}
      />
      <div
        id="peculiarities-second"
        className={`${styles["peculiarities__second"]} ${
          isVisibleSecond ? "" : "hidden"
        }`}
      >
        <svg
          width="350"
          height="350"
          viewBox="0 0 350 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles["peculiarities__image"]} ${
            isVisibleSecond ? styles["peculiarities__image-active"] : "hidden"
          }`}
        >
          <g clipPath="url(#clip0_1_360)">
            <path
              className={`${
                isVisibleSecond
                  ? styles["peculiarities__image-animation"]
                  : "hidden"
              }`}
              d="M62.1 312.9C32.1 282.9 15.5 242.9 15.5 200.5C15.5 158.1 32 118.1 62.1 88.1C92.1 58.1 132.1 41.5 174.5 41.5V40.5C86.1 40.5 14.5 112.1 14.5 200.5C14.5 288.9 86.1 360.5 174.5 360.5V359.5C132 359.5 92.1 343 62.1 312.9Z"
              fill="#FF563F"
            />
            <path
              className={`${
                isVisibleSecond
                  ? styles["peculiarities__image-animation"]
                  : "hidden"
              }`}
              d="M174.5 0.5V1.5C217 1.5 256.9 18 286.9 48.1C316.9 78.2 333.5 118.1 333.5 160.5C333.5 202.9 317 242.9 286.9 272.9C256.8 302.9 216.9 319.5 174.5 319.5V320.5C262.9 320.5 334.5 248.9 334.5 160.5C334.5 72.1 262.9 0.5 174.5 0.5Z"
              fill="#9DDCFF"
            />
            <path
              className={`${
                isVisibleSecond
                  ? styles["peculiarities__image-animation"]
                  : "hidden"
              }`}
              d="M1.40001 194.6C1.40001 152.1 17.9 112.2 48 82.2C78.1 52.2 118 35.6 160.4 35.6C202.9 35.6 242.8 52.1 272.8 82.2L273.5 81.5C211 19 109.7 19 47.2 81.5C-15.3 144 -15.3 245.3 47.2 307.8L47.9 307.1C17.9 277 1.40001 237.1 1.40001 194.6Z"
              fill="#FF563F"
            />
            <path
              className={`${
                isVisibleSecond
                  ? styles["peculiarities__image-animation"]
                  : "hidden"
              }`}
              d="M301.8 53.2L301.1 53.9C331.1 83.9 347.7 123.9 347.7 166.3C347.7 208.7 331.2 248.7 301.1 278.7C271 308.7 231.1 325.3 188.7 325.3C146.3 325.3 106.3 308.8 76.3 278.7L75.6 279.4C138.1 341.9 239.4 341.9 301.9 279.4C364.4 216.9 364.3 115.7 301.8 53.2Z"
              fill="#9DDCFF"
            />
            <g opacity="0.2">
              <path
                d="M152.5 131L183.6 120.3H186.2V240.7H182.8V124L153.4 134L152.5 131Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_382">
              <rect width="350" height="360" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p
          className={`${styles["peculiarities__second-text"]} ${
            isVisibleSecond
              ? styles["peculiarities__second-text-active"]
              : "hidden"
          }`}
        >
          {data.textSecond}
        </p>
      </div>
    </section>
  );
};

export default Peculiarities;
