import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from "./footer.module.css";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/*This footer needs to be a global component similar to the header. */}
            {/*The main body needs to grow so the footer is at bottom of screen.*/}
            Copyright <CopyrightIcon /> 2024 GDES 255 Final
        </footer>
    )
}

export default Footer;