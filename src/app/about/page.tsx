import Header from "@/components/global/header/header";
import Footer from "@/components/global/footer";
import styles from "./about.module.css";

export default function About() {
    return (
        <>

            <Header />
            <main className={styles.main}>
                <h1>About</h1>
                <p className={styles.text}> Throughout this year I have been refining my skills in graphic and web design.
                    I have learned how to use Adobe Illustrator and Photoshop, VS Code, and Github. I have learned html, css,
                    JavaScript, and many important rules of design.</p>
            </main>
            <Footer />
        </>
    )
}