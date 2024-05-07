import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>

      {/*This navigation needs to be stuck to the top of the screen when you scroll.*/}
      {/*The header needs to be white and the links need to be in a row.*/}
      <div className={styles.logo}>
        {/* Image needs to be the NIC logo and needs to be linked to the home page of this app. */}
        <Image 
        src="./NIClogo.png"
        alt="NIC Logo"
        height="100"
        width="400"/>
        <Link href="/">
          <img src="./NIClogo.png" alt="Homepage" />
    </Link>
      </div>
      <nav>
        <ul>
          <li>
            {/* Link to homepage */}
    <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            {/*Link to the about me page that you have to create.*/}
            About
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;