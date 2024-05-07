//import Header from "@/components/global/header";
import styles from "../../page.module.css";
import Header from "../../../components/global/header";
import Footer from "../../../components/global/footer";


export default function About() {
    return (
        <>
            <Header />
                <main className={styles.main}>
                    <div className={styles.container}>
                        <h1>About Me</h1>
                        <p>While I am not at all confident in using VanillaJs, React, and Next, I will say I am now very well aquainted with how to install packages, how to set up a project, and have a familiarity with how to set up other things such as Vercel and a form. I want to develope my skills further so I am more confident</p>
                    </div>
                </main>
            <Footer />
        </>
    );
}
