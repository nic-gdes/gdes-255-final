//import Header from "@/components/global/header";
import styles from "./page.module.css";
import Header from "../components/global/header";
import Footer from "../components/global/footer";


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/*CHECK: These boxes needs to be center of page each one 300x250px size with a margin of 15px and 20px padding.*/}
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.boxLeft}>
              {/*CHECK: This box needs to be purple*/}
            </div>
            <div className={styles.boxCenter}>
              {/*CHECK: This box needs to be blue*/}
            </div>
            <div className={styles.boxRight}>
              {/*CHECK: This box needs to be red*/}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
