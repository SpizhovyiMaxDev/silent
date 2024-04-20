// import styles from './Productspage.module.css'
import Categories from "../../../sections/components/Categories/Categories"

import Navbar from "../../../common/components/Navbar/Navbar";
import Footer from "../../../common/components/Footer/Footer";
import Container from "../../../common/components/Container/Container";

function Productspage(){
    return(
        <>
        <Container>
            <Navbar />
            <Categories /> 
        </Container>
        <Footer />
        </>
    )
}

export default Productspage;