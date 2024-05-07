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
        <Link href="/">
        <Image 
        src="/NIClogo.png"
        alt="NIC Logo"
        height="100"
        width="300"
        bg-color="white"/>
        </Link>
      </div>
      <nav>
        <div className={styles['nav-container']}>
        <ul className={styles['nav-list']}>
          <li>
            {/* Link to homepage */}
            <Link href="/">
            Home
            </Link>
          </li>
          <li>
            {/*Link to the about me page that you have to create.*/}
            <Link href= "/app/About.tsx">
              About
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;