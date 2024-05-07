import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import styles from "../page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/*These boxes needs to be center of page each one 300x250px size with a margin of 15px and 20px padding.*/}
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.boxTop}><h1>About meeeeeeee.</h1></div>
            <div className={styles.boxBottom}><p>This year has been a remarkable journey of discovery and growth for me,<br/> delving deeply into the realms of JavaScript and mastering the intricacies<br/> of Next.js. Through countless hours of exploration and hands-on experience,<br/> I've unlocked the secrets of dynamic web development, honing my skills to <br/>create not just any portfolio website, but a digital masterpiece that epitomizes<br/> innovation and sophistication. From crafting seamless user experiences to<br/> implementing cutting-edge features, I've embraced the challenge with fervor,<br/> pushing the boundaries of what's possible in web design. As I reflect on my<br/> journey, I'm filled with a profound sense of achievement and excitement for<br/> the endless possibilities that lie ahead in this ever-evolving landscape.</p></div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
