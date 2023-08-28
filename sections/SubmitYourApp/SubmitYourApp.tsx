import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";

import Button from "@/components/Button";
import styles from "./SubmitYourApp.module.scss";

interface ButtonItems {
  text: string;
}

interface ConsentItems {
  text: JSX.Element;
  link: JSX.Element;
}

interface SubmitYourAppItems {
  title: string;
  subtitle: string;
  button: ButtonItems;
  consent: ConsentItems;
}

interface SubmitYourAppProps {
  data: SubmitYourAppItems;
}

const SubmitYourApp: React.FC<SubmitYourAppProps> = ({ data }) => {
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
      id="submitYourApp"
      className={styles["submitYourApp"]}
    >
      <div className={styles["submitYourApp__wrapper"]}>
        <div
          className={`${styles["submitYourApp__text"]} ${
            isVisible ? styles["submitYourApp__text-active"] : "hidden"
          }`}
        >
          <p className={styles["submitYourApp__title"]}>{data.title}</p>
          <p className={styles["submitYourApp__subtitle"]}>{data.subtitle}</p>
        </div>

        <form
          className={
            isVisible ? styles["submitYourApp__form-active"] : "hidden"
          }
          action=""
          method="post"
        >
          <div className={styles["submitYourApp__form-wrapper"]}>
            <input
              type="text"
              placeholder="Имя"
              className={styles["submitYourApp__form-input"]}
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              className={styles["submitYourApp__form-input"]}
              required
            />
            <input
              type="comment"
              placeholder="Комментарий"
              className={styles["submitYourApp__form-input"]}
            />
            <label className={styles["submitYourApp__form-consent"]}>
              {data.consent.text}
              <Link href="/" className="text-primary-orange">
                {data.consent.link}
              </Link>
            </label>
          </div>
          <Button text={data.button.text} />
        </form>
      </div>
    </section>
  );
};

export default SubmitYourApp;
