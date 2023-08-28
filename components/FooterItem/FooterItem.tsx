import Link from "next/link";

import styles from "./FooterItem.module.scss";

interface HeaderItemProps {
  name: any;
  link: string;
}

const FooterItem: React.FC<HeaderItemProps> = ({ name = "", link }) => (
  <Link href={`${link}`}>{name}</Link>
);

export default FooterItem;
