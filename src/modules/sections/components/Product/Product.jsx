import styles from './Product.module.css';
import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../../common/components/Loader/Loader';
import ErrorMessage from '../../../common/components/ErrorMessage/ErrorMessage';
import Productquant from '../../../common/components/Productquant/Productquant';

function Product({ products, error, status }) {
    const { id: title } = useParams();
    let product = products.find(p => p.title.includes(title));

    const link = `/categories/${product?.category.replace(" ", "-")}`;
    const linkTitle = product?.category.at(0).toUpperCase() + product?.category.slice(1);


    return (
        <section className={styles.product}>
            <div className={styles.productContainer}>
                {status === "loading" && <Loader />}
                {status === "error" && <ErrorMessage message={error} />}
                {status === "ready" && (
                    <>
                        <div className = {styles.productLinks}> 
                            <Link to = "/categories/all" className = {styles.productLink}>Our collection</Link>
                            <span>/</span>
                            <Link to = {link} className = {styles.productLink}>{linkTitle}</Link>
                        </div>

                        <div className={styles.productBox}>
                            <div className={styles.productImageContainer}>
                                <img
                                    className={styles.productImage}
                                    src={product.image}
                                    alt={`Poster: ${product.title}`}
                                    />
                            </div>
                            <div className={styles.productContent}>
                                <p className={styles.productSubheading}>
                                    {product.category.toUpperCase()}
                                </p>
                                <h2 className={styles.productTitle}>
                                    {product.title}
                                </h2>
                                <p className={styles.productRating}>
                                    Rating: {product.rating.rate}{" "}
                                    <ion-icon
                                        name="star"
                                        style={{ color: "#ff8400" }}
                                    ></ion-icon>
                                </p>
                                <p className={styles.productPrice}>
                                    {product.price}$
                                </p>
                                <p className={styles.productDescription}>
                                    {product.description}
                                </p>

                                <Productquant product={product} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default memo(Product);
