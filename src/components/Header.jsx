import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {

    function active(isActive) {
        return (isActive ? styles.active : '');
    }

    return (
        <header className={styles.header}>
            <picture>
                <img src="../logos/logo_header.jpg" alt="logo-kasa" />
            </picture>

            <nav className={styles.header}>
                <ul >
                    <li > <NavLink to='/' className={({ isActive }) => active(isActive)}>Accueil</NavLink>  </li>
                    <li > <NavLink to='/about' className={({ isActive }) => active(isActive)}>À Propos</NavLink>  </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;