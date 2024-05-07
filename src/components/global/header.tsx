import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import NIC from "../../assets/logoStacked.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="https://www.nic.edu/" target="_blank">
          <Image
            src={NIC.src}
            width={120}
            height={50}
            alt="Logo of the North Idaho College"
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
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