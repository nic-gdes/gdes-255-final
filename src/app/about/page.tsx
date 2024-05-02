import Header from "@/components/global/header/header";
import Footer from "@/components/global/footer";
import styles from "./about.module.css";

export default function About() {
    return (
        <>
            <main className={styles.main}>
                <Header />
                <h1>About Me</h1>
                <Footer />
            </main>
        </>
    )
}