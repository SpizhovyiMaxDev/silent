import { Link } from 'react-router-dom';
import styles from './PageError.module.css'

function PageError(){
    return(
        <div className = {styles.errorBlock}>
            <h3 className={styles.errorMessage}><span>('¬‿¬)/</span>Page not found.</h3>
            <Link to = "/home" className = {styles.errorLink}>Back to main page &rarr; </Link>
        </div>
    )
}

export default PageError;