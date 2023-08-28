import Image from "next/image";

import Button from "../Button";

import styles from "./CardAdvantages.module.scss"

interface ButtonItems {
  text: string;
}

interface CardAdvantagesProps {
  number: string;
  icon: any;
  textFirst: any;
  textSecond: any;
  button: ButtonItems;
}

const CardAdvantages: React.FC<CardAdvantagesProps> = ({
  number,
  icon,
  textFirst,
  textSecond,
  button
}) => (
  <div className={styles["advantages__card"]}>
    <div className={styles["advantages__card-text"]}>
      <p className={styles["advantages__card-text-first"]}>
        {textFirst}
      </p>
      <p className={styles["advantages__card-text-second"]}>
        {textSecond}
      </p>
      {/* button */}
      <Button text={button.text}/>
    </div>
    <Image src={icon} alt="logo" width={580} height={580} />
    <p className={styles["advantages__card-num"]}>
      {number}
    </p>
  </div>
);

export default CardAdvantages;
