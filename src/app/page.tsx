import Header from "@/components/global/header"; // Uncomment this line once you have defined the Header component
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* <title>NIC GDES 2555</title> */}
        {/*These boxes need to be centered on the page, each one 300x250px size with a margin of 15px and 20px padding.*/}
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.boxLeft} ${styles.box}`}></div>
            <div className={`${styles.boxCenter} ${styles.box}`}></div>
            <div className={`${styles.boxRight} ${styles.box}`}></div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        {/*This footer needs to have the copyright symbol and needs to be a global component similar to the header. */}
        {/*The main body needs to grow so the footer is at the bottom of the screen.*/}
        <span>&copy; {new Date().getFullYear()} GDES 255 Final</span>
      </footer>
    </>
  );
}
