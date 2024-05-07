import styles from "@/app/page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/*This navigation needs to be stuck to the top of the screen when you scroll.*/}
      {/*The header needs to be white and the links need to be in a row.*/}
      <div className={styles.logo}>
        {/* Image needs to be the NIC logo and needs to be linked to the home page of this app. */}
        <img src="/images/nic_logo.png" alt="NIC Logo" width={200}/>
      </div>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex'}}>
          <li style={{ marginRight: '1rem'}}>
            {/*Link to the home page*/}
            
            <a href="/">Home</a>
          </li>
          <li>
            {/*Link to the about me page that you have to create.*/}
            
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;