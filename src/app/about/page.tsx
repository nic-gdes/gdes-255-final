import Header from "@/components/global/header";
import styles from "../page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <title>NIC GDES 2555</title>
        <div className={styles.description}>
        <h1>Skills I have acquired this year:</h1>
        <ul>
          <li>the basics of HTML and CSS</li>
          <li>next js and to do react</li>
          <li>how to create visually appealing websites</li>
          <li>accessibility standards</li>
        </ul>
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
