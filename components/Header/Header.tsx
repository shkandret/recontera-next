import Image from "next/image";
import Link from "next/link";

import HeaderItem from "../HeaderItem";

import styles from "./Header.module.scss";

interface MenuItem {
  name: any;
  link: string;
}

interface HeaderItems {
  logo: any;
  burger: any;
  menu: MenuItem[];
}

interface HeaderProps {
  data: HeaderItems;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ data, phone }) => (
  <header className={`${styles["header"]} ${styles["headerDown"]}`}>
    <nav className={styles["header__nav"]}>
      <Link href="/" className={styles["header__logo"]}>
        <Image src={data.logo} alt="logo" width={160} height={56} />
      </Link>

      <ul
        className={`${styles["header__menu"]} ${styles["header__menu-semibold"]}`}
      >
        {data.menu.map((item, index) => (
          <li key={index}>
            <HeaderItem name={item.name} link={item.link} />
          </li>
        ))}
      </ul>

      <ul
        className={`${styles["header__menu"]} ${styles["header__menu-medium"]}`}
      >
        <li key={101}>
          <HeaderItem name={phone} link={"tel:" + phone} />
        </li>
        <li key={102}>
          <HeaderItem
            link="/"
            name={
              <Image src={data.burger} alt="burger" width={40} height={24} />
            }
          />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
