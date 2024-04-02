import styles from './Categories.module.css';

// import { useState } from "react";
import { useApp } from "../../../../context/AppContext";
import { Link, Outlet } from 'react-router-dom';

import Loader from "../../../common/components/Loader/Loader"
import Container from "../../../common/components/Container/Container";
// import ProductsList from "../../../common/components/ProductsList/ProductsList"
import ErrorMessage from "../../../common/components/ErrorMessage/ErrorMessage";



function Categories() {
    const { status, error } = useApp();


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
                    {['all', 'jewelery', 'electronics', "men's-clothing", "women's-clothing"].map((cat) => (
                        <li key={cat} className={styles.categoryItem}>
                            <Link
                                to = {`${cat}`}
                                className={styles.categoryLink}
                                >
                                {(cat.slice(0, 1).toUpperCase() + cat.slice(1)).replace("-", " ")}
                            </Link>
                        </li>
                    ))}
                </ul>
                </>
                }

                {status === "error" && <ErrorMessage message = {error} />}

                <Outlet />
            </Container>
        </section>
    );
}

export default Categories;
