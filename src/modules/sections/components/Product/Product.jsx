import styles from './Product.module.css';

import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from '../../../common/components/Loader/Loader';
import Container from '../../../common/components/Container/Container';
import ErrorMessage from '../../../common/components/ErrorMessage/ErrorMessage';
import Productquant from '../../../common/components/Productquant/Productquant';

function Product({products, error, status}){
    const [params] = useSearchParams();
    const title = params.get("title");
    let product = products.find(p => p.title.includes(title));

    
    return (
        <section className={styles.product}> 
            <Container className={styles.productContainer}>
                {status === "loading" && <Loader /> }
                {status === "error" && <ErrorMessage message={error}/> }
                {status === "ready" && 
                    <div className={styles.productBox}>
                        <div className={styles.productImageContainer}>
                            <img className={styles.productImage} src={product.image} alt={`Poster: ${product.title}`} />
                        </div>
                        <div className={styles.productContent}>
                            <p className={styles.productSubheading}>
                                {product.category.toUpperCase()}
                            </p>
                            <h2 className={styles.productTitle}>
                                {product.title}
                            </h2>
                            <p className={styles.productRating}>
                                Rating: {product.rating.rate} <ion-icon name="star" style={{ color: '#ff8400' }}></ion-icon>
                            </p>
                            <p className={styles.productPrice}>
                                {product.price}$
                            </p>
                            <p className={styles.productDescription}>
                                {product.description}
                            </p>

                            <Productquant product = {product}/>
                        </div>
                    </div>
                }
            </Container>
        </section>
    );
}

export default memo(Product);
