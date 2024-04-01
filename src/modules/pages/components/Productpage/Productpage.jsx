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

/*
In that case, the Product component consumes the products array as a prop.
As long as the reference to the products array remains the same (i.e., if the array itself hasn't been replaced with a new array reference),
React will consider the prop to be the same and will not re-render the Product component unnecessarily.
*/