import { useApp } from "../../../../context/AppContext";
import Product from "../../../sections/components/Product/Product";
// import styles from './Productpage.module.css'


function ProductPage(){
    const { products, error, status } = useApp();
    return (
        <>
            <Product products={products} error = {error} status = {status}/> 
        </>
    )
}

export default ProductPage;
