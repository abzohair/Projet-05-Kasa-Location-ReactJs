import React from 'react';
import styles from './Poster.module.scss';
import { useLocation } from 'react-router-dom';

const Poster = () => {

    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    return (
        <article className={` ${isAboutPage ? styles.aboutPoster : styles.poster}`}>
            <h1>{isAboutPage ? '' : 'Chez vous, partout et ailleurs'}</h1>
        </article>

    );
};

export default Poster;