import { useApp } from "../../../../context/AppContext";
import Product from "../../../sections/components/Product/Product";

import Navbar from "../../../common/components/Navbar/Navbar";
import Footer from "../../../common/components/Footer/Footer";
import Container from "../../../common/components/Container/Container";

function ProductPage(){
    const { products, error, status } = useApp();
    return (
        <>
            <Container>
                <Navbar />
                <Product products={products} error = {error} status = {status} /> 
            </Container>
            <Footer />
        </>
    )
}

export default ProductPage;
