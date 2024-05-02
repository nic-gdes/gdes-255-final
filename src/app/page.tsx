import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <title>NIC GDES 2555 Final</title>
        {/*These boxes needs to be center of page each one 300x250px size with a margin of 15px and 20px padding.*/}
        <div className={styles.description}>
        <h1>Goals for next year's HTML/CSS/JS class:</h1>
        <p>Learn how to code annimations</p>
        <p>Improve understanding of styling</p>
        <p>Modify portfolio to show all projects</p>
        <p>Have better understanding of styling for mobile</p>
        </div>
        <div className={styles.container}>
        <div className="box" style={{
            width: '300px',
            height: '250px',
            margin: '15px',
            padding: '20px',
            backgroundColor: 'purple',
          }}>
        </div>
        <div className="box" style={{
            width: '300px',
            height: '250px',
            margin: '15px',
            padding: '20px',
            backgroundColor: 'blue',
          }}>
        </div>
        <div className="box" style={{
            width: '300px',
            height: '250px',
            margin: '15px',
            padding: '20px',
            backgroundColor: 'red',
          }}>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
