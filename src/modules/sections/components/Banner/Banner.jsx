import Container from '../../../common/components/Container/Container';
import Button from '../../../common/components/Button/Button';
import styles from './Banner.module.css'

function Banner({image, title, description}){
    return (
        <section className = {styles.banner}>
            <Container className={styles.bannerContainer}>
            <div className = {styles.bannerImageContainer}>   
                    <img src = {image} alt = {`Illustration for ${title}`} className = {styles.bannerImage}/> 
            </div>
            <div className = {styles.bannerContent}> 
                    <h3 className = {styles.bannerTitle}>
                        {title}
                    </h3>
                    <p className = {styles.bannerDescription}>
                        {description}
                    </p>

                    <Button type={"cta--green"} link = {"/categories"}>
                        Shop Now
                    </Button>
            </div>
            </Container>
        </section>
    )
}

export default Banner;


