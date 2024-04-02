import styles from './ProudProducts.module.css'
import { useApp }  from "../../../../context/AppContext"
import Container from "../../../common/components/Container/Container"
import ProductsList from "../../../common/components/ProductsList/ProductsList"
import Loader from "../../../common/components/Loader/Loader";
import ErrorMessage from "../../../common/components/ErrorMessage/ErrorMessage"

function ProudProducts(){
    const {products, status, error} = useApp();
    const bestProducts = products.slice().reverse().slice(0, 8)
    

    return (
        <section className = {styles.products}> 
            <Container>
                {status === "loading" && <Loader />}
                {status === "ready" && (
                    <>
                        <h2 className={styles.productsTitle}>Products we proud of</h2>
                        <ProductsList products={bestProducts} />
                    </>
                )}
                {status === "error" && <ErrorMessage message = {error} /> }
            </Container>
        </section>
    )
}

export default ProudProducts;
