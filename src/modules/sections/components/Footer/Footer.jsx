import styles from './Footer.module.css'
import Container from '../../../common/components/Container/Container';


function Footer(){
    function handleClick(e){
        e.preventDefault()
    }

    return (
        <footer className = {styles.footer}>
            <Container className = {styles.footerContainer}>
                <ul className={styles.footerList}>
                    <li className={styles.footerListItem}>
                        <a href = "https://about.com" className={styles.footerLink} onClick={handleClick}>&copy;Copyright by Max Spizhovyi</a>
                    </li>
                    <li className={styles.footerListItem}>
                        <a href = "https://about.com" className={styles.footerLink} onClick={handleClick}>About</a>
                    </li>
                    <li className={styles.footerListItem}>
                        <a href = "https://store-loactor.com" className={styles.footerLink} onClick={handleClick}>Store loactor</a>
                    </li>
                    <li className={styles.footerListItem}>
                        <a href = "https://news.com" className={styles.footerLink} onClick={handleClick}>News</a>
                    </li>
                    <li className={styles.footerListItem}>
                        <a href = "https://careers.com" className={styles.footerLink} onClick={handleClick}>Careers</a>
                    </li>
                    <li className={styles.footerListItem}>
                        <a href = "https://contact.com" className={styles.footerLink} onClick={handleClick}>Contact us</a>
                    </li>
                </ul>
            </Container>
        </footer>
    )
}


export default Footer;