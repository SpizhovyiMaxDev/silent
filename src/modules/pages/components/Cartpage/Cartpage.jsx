// import styles from './Cartpage.module.css'

import Cart from "../../../sections/components/Cart/Cart";
import Navbar from "../../../common/components/Navbar/Navbar";
import Footer from "../../../common/components/Footer/Footer";
import Container from "../../../common/components/Container/Container";

function Cartpage(){
    return (
        <>
        <Container>
           <Navbar /> 
           <Cart />  
        </Container>
        <Footer /> 
        </>
    )
}


export default Cartpage;