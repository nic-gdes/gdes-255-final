import Header from "@/components/global/header";
import styles from "./page.module.css";
export const metadata: Metadata = {
    title: "Create Next App",
    description: "test", 
  };
export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        
        {/* Your about me content goes here */}
        <h1>About Me</h1>
        <p>Welcome to my about me page! Here, you can learn more about who I am and my goals for the future.</p>
      </main>
      <footer className={styles.footer}>
        {/* This footer needs to have the copyright symbol and needs to be a global component similar to the header. */}
        {/* The main body needs to grow so the footer is at the bottom of the screen. */}
        <span>&copy; {new Date().getFullYear()} GDES 255 Final</span>
      </footer>
    </>
  );
}
export const metadata: Metadata = {
    description: "Skills I have acquired this year:",
    skills: [
      "the basics of HTML and CSS",
      "next js and to do react",
      "how to create visually appealing websites",
      "accessability standards",
    ]
  };