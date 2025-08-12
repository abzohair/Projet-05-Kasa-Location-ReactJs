import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <picture>
                <img src="../logos/D_Footer.jpg" alt="logo-kasa" />
            </picture>

            <p >&#169; 2020 Kasa all rights reserved</p>

        </footer>
    );
};

export default Footer;