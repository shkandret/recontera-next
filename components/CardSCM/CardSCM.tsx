import Image from "next/image";

import styles from "./CardSCM.module.scss";

interface CardSCMProps {
  icon: any;
  text: any;
}

const CardSCM: React.FC<CardSCMProps> = ({ icon, text }) => (
  <div className={styles["systemSCM__card"]}>
    <div className={styles["systemSCM__card-image"]}>
      <Image src={icon} alt="icon" width={32} height={32} />
    </div>
    <p className={styles["systemSCM__card-text"]}>{text}</p>
  </div>
);

export default CardSCM;
