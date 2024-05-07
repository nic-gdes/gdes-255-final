import Header from "@/components/global/header/header";
import styles from "./page.module.css";
import Footer from "@/components/global/footer";


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
      <Footer />
    </>
  );
}
