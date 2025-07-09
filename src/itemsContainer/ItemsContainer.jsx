import React from 'react';
import styles from './ItemsContainer.module.scss';
import { Link } from 'react-router-dom';
import Properties from '../mockJson/logements.json';

const ArticlesContainer = () => {

    return (
        <article className={styles.articles}>
            {
                Properties.map((item, i) => (

                    <Link key={i} to={`/accomodation/${item.id}`}>

                        <section className={styles.articlesItem}>
                            <h2>{`Titre de la location de l'${item}`} </h2>
                        </section>

                    </Link>
                ))
            }
        </article>
    );
};

export default ArticlesContainer;