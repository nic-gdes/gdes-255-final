import styles from "../page.module.css";
import Header from "../../components/global/header";
import CopyrightFooter from "@/components/global/copyrightfooter";
import Link from "next/link";
import Picture from "../../assets/myface.jpeg";
import Image from "next/image";

export default function AboutMe() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.boxImage}>
                            <Image
                                src={Picture.src}
                                width={300}
                                height={200}
                                alt="My Face"
                            />
                        </div>
                        <div className={styles.boxParagraph}>
                            <p>Throughout this year, I had learned the basics of HTML and CSS, with a slight
                                inkling of experience with ReactJS and NextJS. Although I was comfortable with
                                my position in being great at HTML and CSS, Javascript as a whole put me into
                                a world of hurt with my family vacation and just a completely new structure as
                                a whole speeding towards me as the semester ended. Regardless of my inability to
                                still grasp Javascript, I am looking forward to getting to know the ropes with it
                                next year.</p>

                            <p>You can read all about my experience with Javascript on my blog
                                <Link href="https://youtu.be/ypknnQUsmno?si=KED7OObBnvWNEfSW" target="_blank"> here </Link>
                                with this link.</p>
                        </div>
                    </div>
                </div>
            </main>
            <CopyrightFooter />
        </>
    );
}

