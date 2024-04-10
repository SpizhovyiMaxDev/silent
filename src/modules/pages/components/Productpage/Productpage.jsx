// import styles from './Productpage.module.css'
import { useApp } from "../../../../context/AppContext";
import Product from "../../../sections/components/Product/Product";

import Navbar from "../../../common/components/Navbar/Navbar";
import Footer from "../../../common/components/Footer/Footer";

function ProductPage(){
    const { products, error, status } = useApp();
    return (
        <>
            <Navbar />
            <Product products={products} error = {error} status = {status} /> 
            <Footer />
        </>
    )
}

export default ProductPage;
