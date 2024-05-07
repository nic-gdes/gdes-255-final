import Header from "@/components/global/header";
import styles from "./page.module.css";

export default function Home() {
  return (
      <>
      <Header />
      <main className={styles.main}>
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
      <footer className={styles.footer}>
          <small>Copyright© Isabella Pelot 2024</small>
      </footer>
     </>
  );
}
