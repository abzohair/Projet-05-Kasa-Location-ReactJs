import React from 'react';
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header className={styles.header}>
            <picture>
                <img src="../logos/logo_header.jpg" alt="logo-kasa" />
            </picture>

            <nav className={styles.header}>
                <ul >
                    <li > <NavLink to='/' >Accueil</NavLink>  </li>
                    <li > <NavLink to='/about'>À Propos</NavLink>  </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;