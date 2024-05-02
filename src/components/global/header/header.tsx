import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../../assets/logo.png"
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      {/*This navigation needs to be stuck to the top of the screen when you scroll.*/}
      {/*The header needs to be white and the links need to be in a row.*/}
      <div className={styles.logo}>
        {/* Image needs to be the NIC logo and needs to be linked to the home page of this app. */}
        <Image
          src={logo}
          width={200}
          height={100}
          alt="logo"
        />
      </div>
      <nav>
        <ul className={styles.links}>
          <li>
            {/*Link to the home page*/}
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