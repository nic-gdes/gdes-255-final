import styles from "./header.module.css";
import logo from "../..niclogo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      {/*This navigation needs to be stuck to the top of the screen when you scroll.*/}
      {/*The header needs to be white and the links need to be in a row.*/}
      <div className={styles.logo}>
        {/* Image needs to be the NIC logo and needs to be linked to the home page of this app. */}

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
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;