import styles from './DropDown.module.scss';
import { useDropDown } from '../hook/useDropDown';

const DropDown = ({ title, element }) => {

    const { showHide, toggleHeight, refs } = useDropDown();

    return (

        <div className={`${styles.content}`}>

            <div className={styles.head}>
                < >{title}</>
                <span
                    onClick={toggleHeight}
                    className={showHide ? styles.rotateSpan : ''}
                >
                    < img src="../../icons/arrow_up.svg" alt="icone flèche" />
                </span>
            </div>
            <div className={`${styles.text}`}
                ref={refs}
            >
                <div className={styles.bgContent}>{element}</div>
            </div>

        </div>

    );
};

export default DropDown;