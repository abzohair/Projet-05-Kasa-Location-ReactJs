import styles from './FlatCards.module.scss';
import { Link } from 'react-router-dom';
import Properties from '../mockJson/logements.json';

const ArticlesContainer = () => {

    return (

        <section className={styles.articles}>
            {
                Properties.map((item, i) => (

                    <Link key={i} to={`/accomodation/${item.id}`}>

                        <article className={styles.articlesItem}
                            style={{ backgroundImage: `url(${item.cover})` }}
                        >
                            <h2>{`${item.title}`} </h2>
                        </article>

                    </Link>
                ))
            }
        </section>

    );
};

export default ArticlesContainer;