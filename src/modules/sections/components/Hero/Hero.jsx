import styles from './Hero.module.css';

import Button from '../../../common/components/Button/Button';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className = {styles.heroContainer}>
                <div className={styles.heroBox}>
                    <h1 className={styles.heroTitle}>
                        Explore Our Stunning New Season Arrivals Today
                    </h1>
                    <p className={styles.heroDescription}> 
                        Welcome to Shoply, where innovation meets elegance! 
                        Discover the latest in electronics, jewelry, and more,
                        blending style with unbeatable value.
                    </p>
                    <Button type={"cta--green"} link = {"/categories"}>
                        Our collection <ion-icon name="arrow-forward-outline"></ion-icon>
                    </Button>
                </div>
                <div className={styles.heroBox}>
                    <img src="./hero/hero.webp" alt="Hero of this section" className={styles.heroImage}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;