import styles from './ProudProducts.module.css';
import { useApp }  from "../../../../context/AppContext";
import ProductsList from "../../../common/components/ProductsList/ProductsList";
import Loader from "../../../common/components/Loader/Loader";
import ErrorMessage from "../../../common/components/ErrorMessage/ErrorMessage";

function ProudProducts(){
    const {status, error} = useApp();
    

    return (
        <section className = {styles.products}> 
            <div>
                {status === "loading" && <Loader />}
                {status === "ready" && (
                    <>
                        <h2 className={styles.productsTitle}>Products we proud of</h2>
                        <ProductsList type = {"mixed"} />
                    </>
                )}
                {status === "error" && <ErrorMessage message = {error} /> }
            </div>
        </section>
    )
}

export default ProudProducts;
