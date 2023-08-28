import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button type="submit" className={styles["button"]}>
    {text}
  </button>
);

export default Button;
