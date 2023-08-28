import Image from "next/image";

import styles from "./CardBenefits.module.scss";

interface CardBenefitsProps {
  icon: any;
  text: string;
}

const CardBenefits: React.FC<CardBenefitsProps> = ({ icon, text }) => (
  <div className={styles["benefits__card"]}>
    <Image src={icon} alt="logo" width={64} height={64} />
    <p className={styles["benefits__card-text"]}>{text}</p>
  </div>
);

export default CardBenefits;
