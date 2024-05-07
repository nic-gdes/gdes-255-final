import styles from "@/app/page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        {/*This footer needs to have the copyright symbol and needs to be a global component similar to the header. */}
        {/*The main body needs to grow so the footer is at bottom of screen.*/}
        &copy; 2024 GDES 255 Final
    </footer>
  );
}

export default Footer;