import styles from './Loader.module.css'

function Loader(){
    return (
        <p className={styles.loader}>
          <ion-icon name="reload-outline"></ion-icon>  Loading... 
        </p>
    )
}

export default Loader;