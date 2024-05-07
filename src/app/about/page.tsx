import Header from "@/components/global/header";
import styles from "./page.module.css";

export default function About() {
    return (
      <>
      <main className={styles.main}>
        <Header />
        <div className={styles.description}>
          <h1 className={styles.h1}>About Me</h1>
          <p className={styles.p}>
            In my inaugural year delving into HTML, CSS, and JavaScript, I unearthed a trove of foundational skills and insights. HTML became my scaffolding, providing the structural backbone for crafting web pages, while CSS emerged as my artistic palette, allowing me to infuse style and elegance into the digital canvas. Through JavaScript, I discovered the dynamic heartbeat of the web, empowering me to breathe interactivity and functionality into my creations. Alongside mastering syntax and semantics, I cultivated a profound appreciation for the intricate dance between these three languages, understanding how they harmonize to produce captivating online experiences. Through countless trials and triumphs, I learned the importance of clean code, responsive design, and the art of problem-solving, laying a sturdy groundwork for my journey as a budding web developer.
          </p>
        </div>
        </main>
        <footer className={styles.footer}>
          <small>Copyright© Isabella Pelot 2024</small>
        </footer>
        </>
    );
  }