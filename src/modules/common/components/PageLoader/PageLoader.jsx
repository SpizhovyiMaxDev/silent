import styles from './PageLoader.module.css'
function PageLoader(){
    return (
        <div className = {styles.pageLoader}>
            <p className={styles.loader}>
                <ion-icon name="reload-outline"></ion-icon>  Loading... 
            </p>
        </div>
    )
}

export default PageLoader;