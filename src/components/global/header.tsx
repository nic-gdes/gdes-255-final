import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import NIClogo from "../NIClogo.svg";


const Header = () => {
  return (
    <header className={styles.header}>
      {/*CHECK: This navigation needs to be stuck to the top of the screen when you scroll.*/}
      {/*CHECK: The header needs to be white and the links need to be in a row.*/}
      <a href="/">
          <div className={styles.logo}>
            {/* CHECK: Image needs to be the NIC logo and needs to be linked to the home page of this app. */}
            <Image 
              src={NIClogo}
              alt="North Idaho College Logo"
              />
          </div>
      </a>
      <nav>
        <ul>
          <li>
            <Link href="/">
            {/*Link to the home page*/}
            Home
            </Link>
          </li>
          <li>
            <Link href="/pages/about">
            {/*Link to the about me page that you have to create.*/}
            About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;