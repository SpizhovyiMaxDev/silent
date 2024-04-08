import styles from './Banner.module.css'

import Button from '../../../common/components/Button/Button';
import Container from '../../../common/components/Container/Container';

function Banner({image, title, description}){
    return (
        <section className = {styles.banner}>
            <Container className={styles.bannerContainer}>
                <div className = {styles.bannerImageContainer}>   
                        <img src = {image} alt = {`Illustration for ${title}`} className = {styles.bannerImage}/> 
                </div>
                <div className = {styles.bannerContent}> 
                        <h2 className = "heading--secondary">
                            {title}
                        </h2>
                        <p className = "description">
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


