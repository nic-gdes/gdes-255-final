import Header from "@/components/global/header/header";
import styles from "./page.module.css";
import Image from "next/image";
import CopyrightIcon from '@mui/icons-material/Copyright';
import Footer from "@/components/global/footer";


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
      <Footer />
    </>
  );
}
