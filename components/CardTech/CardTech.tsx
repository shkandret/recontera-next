import Image from "next/image";
import styles from "./CardTech.module.scss";

interface CardTechProps {
  number: string;
  icon: any;
  text: JSX.Element;
}

const CardTech: React.FC<CardTechProps> = ({ number, icon, text }) => (
  <div className={styles["cardTech__wrapper"]}>
    <div className={styles["cardTech__number"]}>{number}</div>
    <Image
      src={icon}
      alt="figure"
      width={250}
      height={250}
      className={styles["cardTech__image"]}
    />
    <p className={styles["cardTech__text"]}>{text}</p>
  </div>
);

export default CardTech;
