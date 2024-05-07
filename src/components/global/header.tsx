import styles from "@/app/page.module.css";
import cardinal from '../../assets/cardinal.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.sticky}`}>
      <div className={styles.logo}>
            <Image src={cardinal.src} alt="NIC Logo" width={150} height={50} />
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
              <a>Home</a>
          </li>
          <li>
              <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;