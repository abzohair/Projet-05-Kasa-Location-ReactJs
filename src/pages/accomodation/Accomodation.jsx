import React, { useState } from 'react';
import styles from './Accomodation.module.scss';
import Properties from '../../mockJson/logements.json';
import { useParams } from 'react-router-dom';
import DropDown from '../../dropdown/DropDown';


const Acomodation = () => {

    const { id } = useParams(); //On récupère l'id unique du logemant dans l'url
    const property = Properties.find(item => item.id === id); //on cherche l'objet dont l'id correspond uniquement à celui de l'URL


    let pictures;
    const [currentIdenxPic, setCurrentIdenxPic] = useState(0);
    pictures = property?.pictures;
    const multiPics = pictures.length > 1; //On crée une variable qu'on va appliquer pour afficher ou pas, les élément de navigation.

    function handlePrev() {
        //Si on à la première img on passe à la dernière sinon on recule.
        setCurrentIdenxPic((prev) => prev === 0 ? pictures.length - 1 : prev - 1);
    }
    function handleNext() {
        setCurrentIdenxPic((prev) => prev === pictures.length - 1 ? 0 : prev + 1);
    }

    const maxRating = 5; //On crée un nomdbre maximal pour les étoiles qu'on veut afficher.
    const rating = Number(property.rating); //On recupère le rating dans l'objet et on le convertie en nombre.

    return (

        <article className={styles.articleCenterPage}>
            <section className={styles.articlePage}>
                <figure className={styles.carrouselWrapper}>
                    <img src={pictures[currentIdenxPic]} alt={`Image ${currentIdenxPic + 1}`} />
                    {
                        multiPics && (
                            <>
                                < img onClick={handlePrev} className={styles.prevArrow} src="../../icons/arrow_back.svg" alt="" />
                            </>
                        )}
                    {(multiPics && (
                        <>
                            < img onClick={handleNext} className={styles.nextArrow} src="../../icons/arrow_forward.svg" alt="" />
                        </>
                    ))}
                    {multiPics && (
                        <span className={styles.counter}>
                            {currentIdenxPic + 1} / {pictures.length}
                        </span>
                    )}
                </figure>

                <div className={styles.globalProfile}>
                    <div className={styles.profileLocTagsTitle}>
                        <div>
                            <h2>{property.title}</h2>
                            <span className={styles.adresse}>{property.location}</span>
                        </div>

                        <div className={styles.tags}>
                            {property.tags.map((item, i) => <span key={i}>{item}</span>)}
                        </div>
                    </div>

                    <div className={styles.profileRating}>
                        <div className={styles.profileContainer}>
                            <p className={styles.hostName}>{property.host.name}</p>
                            <img src={property.host.picture} alt="" className={styles.picProfile} />
                        </div>

                        <p>
                            {
                                //on crée un tableau avec 5 éléments
                                Array.from({ length: maxRating }, (_, i) => (
                                    //affiche les étoiles pleines
                                    i < rating ? (
                                        <img
                                            key={i}
                                            src="../../icons/star-full.svg"
                                            alt="étoile pleine" />
                                    ) : (
                                        <img
                                            key={i}
                                            src="../../icons/star-empty.svg"
                                            alt="étoile vide" />)
                                ))
                            }

                        </p>
                    </div>
                </div>

                <div className={styles.dropDownMenus}>

                    <DropDown title={<p>Description</p>} element={<p className={styles.description}>{property.description}</p>} />
                    <DropDown
                        title={<p>Equipements</p>}
                        element={<ul className={styles.equipements} >{property.equipments.map((item, i) =>
                            <li key={i}>{item} </li>
                        )}</ul>} />
                </div>

            </section>
        </article >

    );
};

export default Acomodation;