import Header from "@/components/global/header";
import Footer from "@/components/global/footer"
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
      <title>NIC GDES 2555 Final</title>
      
      <div className={styles.description}>
      <h1 className={styles.h1}>About Me</h1>
      <h2>Skills and Knowledge Learned this Year</h2>
      <p>This year we have learned how to convert html and css into formats that work in Next js and React. With this knowledge, I worked to create my portfolio site in Next js. I learned how to format files so that they can be read properly to display in the code, such as not capitalizing stuff. We also learned how to make contact forms and to do apps.</p>
      </div>
      </main>
      <Footer />
    </>
  );
}
