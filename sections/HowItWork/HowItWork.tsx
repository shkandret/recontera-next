import React, { useRef, useEffect, useState } from "react";

import VideoPlayer from "@/components/VideoPlayer";

import styles from "./HowItWork.module.scss";

interface HowItWorkItems {
  title: string;
  text: any;
}

interface HowItWorkProps {
  data: HowItWorkItems;
}

const HowItWork: React.FC<HowItWorkProps> = ({ data }) => {
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
    <section ref={targetRef} id="howItWork" className={styles["howItWork"]}>
      <VideoPlayer
        src={"/video.mp4"}
        className={`${styles["howItWork__video"]}  ${
          isVisible ? styles["howItWork__video-active"] : "hidden"
        }`}
      />
      <div className={styles["howItWork__container"]}>
        <p
          className={`${styles["howItWork__title"]} ${
            isVisible ? styles["howItWork__title-active"] : "hidden"
          }`}
        >
          {data.title}
        </p>
        <p
          className={`${styles["howItWork__text"]} ${
            isVisible ? styles["howItWork__text-active"] : "hidden"
          }`}
        >
          {data.text}
        </p>
      </div>
    </section>
  );
};

export default HowItWork;
