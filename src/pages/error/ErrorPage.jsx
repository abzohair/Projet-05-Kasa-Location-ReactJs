import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
    return (
        <>
            <Header />
            <section className={styles.section}>
                <h2 className={styles.bigTitle}>404</h2>
                <p className={styles.subtitle}>Oups ! La page que vous cherchez n'existe pas.</p>
                <Link to="/"
                    className={styles.link}
                >
                    Retourner sur la page d'accueil
                </Link>
            </section>
            <Footer />
        </>
    );
};

export default ErrorPage;