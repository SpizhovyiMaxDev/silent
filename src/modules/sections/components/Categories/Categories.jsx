import styles from './Categories.module.css';

import { useApp } from "../../../../context/AppContext";
import { NavLink, Outlet } from 'react-router-dom';

import Loader from "../../../common/components/Loader/Loader"
import Container from "../../../common/components/Container/Container";
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
                    Our Collection
                </h2>
                <hr className={styles.divider}/> 
                <ul className={styles.categoriesList}>
                    {['all', 'jewelery', 'electronics', "men's-clothing", "women's-clothing"].map((category) => (
                        <li key={category} className={styles.categoryItem}>
                            <NavLink
                                to = {`${category}`}
                                className={styles.categoryLink}
                                >
                                {(category.slice(0, 1).toUpperCase() + category.slice(1)).replace("-", " ")}
                            </NavLink>
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
