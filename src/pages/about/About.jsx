import Poster from '../poster/Poster';
import styles from './About.module.scss';
import infos from '../../mockJson/about.json';
import HomeImage from '../../assets/images/source2.jpg';
import DropDown from '../../dropdown/DropDown';


const About = () => {

    return (
        <>
            <Poster picture={HomeImage} />

            <section className={styles.about}>

                <DropDown title={<h2>{infos.titleFiab} </h2>} element={<p>{infos.descriptionFiab}</p>} />

                <DropDown title={<h2>{infos.titleResp} </h2>} element={<p>{infos.descriptionResp}</p>} />

                <DropDown title={<h2>{infos.titleServ} </h2>} element={<p>{infos.descriptionServ}</p>} />

                <DropDown title={<h2>{infos.titleSecu} </h2>} element={<p>{infos.descriptionSecu}</p>} />

            </section>
        </>
    );
};

export default About;