import Loader from '../Loader/Loader';
import styles from './PagesLoader.module.css';

function PagesLoader() {
    return (
        <div className={styles.spinnerFullpage}> 
            <Loader />
        </div>
    );
}

export default PagesLoader;
    