import styles from './DropDown.module.scss';
import { useDropDown } from '../hook/useDropDown';

const DropDown = ({ title, element }) => {

    const { showHide, toggleHeight, refs } = useDropDown();

    return (

        <div className={styles.content}>

            <div className={styles.head}>
                < >{title}</>
                <span
                    onClick={toggleHeight}
                    className={showHide ? styles.rotateSpan : ''}
                >
                    < img src="../../icons/arrow_up.svg" alt="" />
                </span>
            </div>
            <div className={`${styles.text}`}
                ref={refs}
            >
                <>{element}</>
            </div>

        </div>

    );
};

export default DropDown;