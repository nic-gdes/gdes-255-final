import styles from "@/app/page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/*This navigation needs to be stuck to the top of the screen when you scroll.*/}
      {/*The header needs to be white and the links need to be in a row.*/}
      <div className={styles.logo}>
        {/* Image needs to be the NIC logo and needs to be linked to the home page of this app. */}
        <Image 
        src="./NICLogo.png"/>
      </div>
      <nav>
        <ul>
          <li>
            {/*Link to the home page*/}
            Home
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