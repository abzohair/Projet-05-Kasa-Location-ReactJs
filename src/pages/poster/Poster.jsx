import styles from './Poster.module.scss';

const Poster = ({ picture, title }) => {

    return (

        <figure className={` ${styles.poster}`} >
            <img src={picture} alt={title} />
            {title && < h1 > {title}</h1 >}
        </figure >

    );
};

export default Poster;