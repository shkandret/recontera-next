import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";

import styles from "./ComparisonCRM.module.scss";

interface ComparisonCRMProps {
  data: any;
}

const ComparisonCRM: React.FC<ComparisonCRMProps> = ({ data }) => {
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
      id="comparisonCRM"
      className={`${styles["comparisonCRM"]} ${
        isVisible ? styles["comparisonCRM-active"] : "hidden"
      }`}
    >
      <p className={styles["comparisonCRM__title"]}>Сравнение с обычными CRM</p>
      <div id="comparisonCRMTable" className={styles["comparisonCRM__table"]}>
        <div className={styles["comparisonCRM__table-header"]}>
          <div style={{ marginRight: "703px" }}>Описание</div>
          <div style={{ marginRight: "229px" }}>Реконтера</div>
          <div className="">Обычная CRM</div>
        </div>
        <div className={styles["comparisonCRM__table-content"]}>
          <div className={styles["comparisonCRM__table-row"]}>
            <div className={styles["comparisonCRM__table-title"]}>
              Возможность контроля эффективности всех средств продвижения b2b- и
              b2c-компаний{" "}
              <p className={styles["comparisonCRM__table-subtitle"]}>
                Эффективность работы подразделений с потоками обращений на всём
                их пути от контакта с клиентом (лидогенерации) до покупки
                (конверсии)
              </p>
            </div>
            <div className={styles["comparisonCRM__table-yes"]}>Есть</div>
            <div className={styles["comparisonCRM__table-no"]}>Нет</div>
          </div>
          <div className={styles["comparisonCRM__table-row"]}>
            <div className={styles["comparisonCRM__table-title"]}>
              Возможность контроля эффективности работы системы продвижения в
              рамках каждого вида деятельности
            </div>
            <div className={styles["comparisonCRM__table-yes"]}>Есть</div>
            <div className={styles["comparisonCRM__table-no"]}>Нет</div>
          </div>
          <div className={styles["comparisonCRM__table-row"]}>
            <div className={styles["comparisonCRM__table-title"]}>
              Возможность контроля эффективности каждого средства продвижения в
              рамках каждого направления деятельности
            </div>
            <div className={styles["comparisonCRM__table-yes"]}>Есть</div>
            <div className={styles["comparisonCRM__table-no"]}>Нет</div>
          </div>
          <div className={styles["comparisonCRM__table-row"]}>
            <div className={styles["comparisonCRM__table-title"]}>
              Возможность эффективного управления лидогенерацией и конверсией{" "}
              <p className={styles["comparisonCRM__table-subtitle"]}>
                (управление лидогенерацией по показателям конверсии инаоборот в
                рамках каждого контура)
              </p>
            </div>
            <div className={styles["comparisonCRM__table-yes"]}>Есть</div>
            <div className={styles["comparisonCRM__table-no"]}>Нет</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCRM;
