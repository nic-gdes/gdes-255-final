import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../../assets/logo.png"
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={logo}
            width={200}
            height={100}
            alt="logo"
          />
        </Link>
      </div>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;