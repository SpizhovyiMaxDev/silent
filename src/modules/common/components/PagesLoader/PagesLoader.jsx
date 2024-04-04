import styles from './PagesLoader.module.css'
import Loader from '../Loader/Loader';

function PagesLoader(){
    return (
        <div className = {styles.spinnerFullPage}> 
            <Loader />
        </div>
    )
}

export default PagesLoader;