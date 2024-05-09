import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Use &copy; for the copyright symbol */}
      &copy; {new Date().getFullYear()} GDES 255 Final
    </footer>
  );
};

export default Footer;
