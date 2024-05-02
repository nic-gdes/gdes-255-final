import Header from "@/components/global/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/*These boxes needs to be center of page each one 300x250px size with a margin of 15px and 20px padding.*/}
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.boxLeft}>
            </div>
            <div className={styles.boxCenter}>
            </div>
            <div className={styles.boxRight}>
            </div>
          </div>
        </div>
      </main>
      <footer>
        {/*This footer needs to have the copyright symbol and needs to be a global component similar to the header. */}
        {/*The main body needs to grow so the footer is at bottom of screen.*/}
        Copyright 2024 GDES 255 Final
      </footer>
    </>
  );
}
