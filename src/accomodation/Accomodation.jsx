import React from 'react';
import styles from './Accomodation.module.scss';
import source2 from '../images/source2.jpg';
import Properties from '../mockJson/logements.json';
import { useParams } from 'react-router-dom';

const Acomodation = () => {

    const { id } = useParams();
    const property = Properties.find(item => item.id === id)

    return (
        <article className={styles.articleCenterPage}>
            <section className={styles.articlePage}>

                <img src={source2} alt="" />
                <span className={styles.prevArrow}>➤</span>
                <span className={styles.nextArrow}>➤</span>

                <figure className={styles.profile}>
                    <figcaption>
                        <h2>{property.title}</h2>
                        <span>{property.location}</span>
                    </figcaption>

                    <figcaption className={styles.profileContainer}>
                        <p>{property.host.name}</p>
                        <img src={property.host.picture} alt="" className={styles.picProfile} />
                    </figcaption>
                </figure>

                <figure className={styles.tagsRating}>
                    <figcaption className={styles.tags}>
                        {property.tags.map(item => <span>{item}</span>)}
                    </figcaption>
                    {/* <p>{property.rating}</p> */}
                    {/* <p>{'★'.repeat(property.rating)}{'☆'.repeat(5 - property.rating)}</p> // => avec condition s'il y à des étoiles vide */}
                    <p>{'★'.repeat(property.rating)}{'☆'.repeat(5 - property.rating)}</p> {/* s'il n y à de condition des étoiles vide*/}
                </figure>

                <figure className={styles.dropDownMenus}>
                    <figcaption className={styles.description}>
                        <p >Description</p>
                        <span>▲</span>
                    </figcaption>

                    <figcaption className={styles.equipements}>
                        <p >Equipements</p>
                        <span>▲</span>
                    </figcaption>

                </figure>

            </section>
        </article>
    );
};

export default Acomodation;