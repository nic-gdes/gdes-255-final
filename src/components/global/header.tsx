import styles from "@/app/page.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      {/*This navigation needs to be stuck to the top of the screen when you scroll.*/}
      {/*The header needs to be white and the links need to be in a row.*/}
      <div className={styles.logo}>
        {/* Image needs to be the NIC logo and needs to be linked to the home page of this app. */}
        <Image
          src="/niclogo.svg"
          width={182.59}
          height={101.9}
          alt="niclogo"
        />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.home}>
            {/*Link to the home page*/}
            <a href="/">Home</a>
          </li>
          <li className={styles.about}>
            {/*Link to the about me page that you have to create.*/}
            <a href="/pages">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;