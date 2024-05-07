import styles from "@/app/page.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        {/* Your logo image goes here */}
        <img src="/images/nic-logo.png" alt="NIC Logo" width={200}/>
      </div>
      <nav>
        <ul className={styles.navbar}>
          <li>
            {/* Link to the home page */}
            <a href="/">Home</a>
          </li>
          <li>
            {/* Link to the about me page that you have to create. */}
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;