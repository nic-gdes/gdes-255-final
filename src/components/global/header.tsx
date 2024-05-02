import styles from "@/app/page.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png"

const Header = () => {
  return (
    <header className={styles.header}>
      {/*This navigation needs to be stuck to the top of the screen when you scroll.*/}
      {/*The header needs to be white and the links need to be in a row.*/}
      <div className={styles.logo}>
        {/* Image needs to be the NIC logo and needs to be linked to the home page of this app. */}
        <a className={styles.logo} href="/"><Image
        src= {logo} 
        alt={'logo'} 
        width={250}
        height={130}></Image></a>
      </div>
      <nav className={styles.nav}>
        <ul>
          {/*Link to the home page*/}
        <li className={styles.navLi}><a href="/">Home</a></li>
            {/*Link to the about me page that you have to create.*/}
         <li className={styles.navLi}><a href="/aboutme">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;