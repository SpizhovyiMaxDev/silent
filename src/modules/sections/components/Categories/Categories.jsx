import styles from './Categories.module.css';

import { useState } from "react";
import { useApp } from "../../../../context/AppContext";

import Loader from "../../../common/components/Loader/Loader"
import Container from "../../../common/components/Container/Container";
import ProductsList from "../../../common/components/ProductsList/ProductsList"
import ErrorMessage from "../../../common/components/ErrorMessage/ErrorMessage";



function Categories() {
    const { products, status, error } = useApp();
    const [category, setCategory] = useState("all");

    const updatedProducts = category === "all" ? products : products.filter(product => product.category === category);


    return (
        <section className={styles.categories}>
            <Container>
                {status === "loading" && <Loader />}
                {status === "ready" && 
                <>
                <h2 className={styles.categoriesTitle}>
                    Latest Products
                </h2>
                <hr className={styles.divider}/> 
                <ul className={styles.categoriesList}>
                    {['all', 'jewelery', 'electronics', "men's clothing", "women's clothing"].map((cat) => (
                        <li key={cat} className={styles.categoryItem}>
                            <button
                                className={styles.categoryButton}
                                onClick={() => setCategory(cat)}
                                aria-label={`Filter by ${cat}`}
                                >
                                {cat.slice(0, 1).toUpperCase() + cat.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>
                </>
                }

                {status === "error" && <ErrorMessage message = {error} />}
                <ProductsList products={updatedProducts} />
            </Container>
        </section>
    );
}

export default Categories;
