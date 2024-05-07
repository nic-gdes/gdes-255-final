import styles from "./header.module.css";
import logo from "@/assets/logoStacked.png"
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
            src={logo} 
            alt="logo"
            width={80} 
            height={40} 
          />

      </div>
      <nav>
        <ul className={styles.links} id="links">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;