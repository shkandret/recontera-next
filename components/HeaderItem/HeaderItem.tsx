import Link from "next/link";

import styles from "./HeaderItem.module.scss";

interface HeaderItemProps {
  name: any;
  link: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ name = "", link }) => (
  <Link href={`${link}`}>{name}</Link>
);

export default HeaderItem;
