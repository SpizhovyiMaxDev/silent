import styles from './Cart.module.css';

import { useApp } from '../../../../context/AppContext';
import { round } from '../../../../functions/functions';

import Button from '../../../common/components/Button/Button';
import Container from '../../../common/components/Container/Container';
import ErrorMessage from '../../../common/components/ErrorMessage/ErrorMessage';
import CartList from '../../../common/components/CartList/CartList';

function Cart() {
    const { updateCart, cart, error, status } = useApp();
    const totalPrice = round(cart.reduce((acc, val) => acc + (val.price * val.quantity), 0));

    return (
        <section className={styles.cart}>
            <Container className={styles.cartContainer}>
                {status === "error" && <ErrorMessage message = {error} />}
                {!cart.length && status !== "error" && 
                <>
                    <div className={styles.emptyCart}>
                        <div className={styles.emptyCartImageBox}>
                            <img className = {styles.emptyCartImage} src="./empty-cart/empty-cart.webp" alt="Empty Cart" />
                        </div>
                        <h1 className={styles.emptyCartMessage}>
                            Your Cart is still empty, 😉 keep searching a new products
                        </h1>
                    </div>
                </>
                }
                {cart.length > 0 && 
                <>
                    <div className = {styles.cartBox}>
                        <h2 className={styles.cartHeading}>
                            Shopping Cart
                        </h2>

                        <p className = {styles.priceHeading}>Price</p>
                    </div>
                    
                    <CartList cart = {cart} updateCart = {updateCart} /> 

                    <div className = {styles.cartSubtotal}> 
                        <Button type = {"cta--green"} link = {"/categories"}>
                            &larr; Continue Shopping
                        </Button>

                        <div className = {styles.cartSubtotalBox}>
                            <p className = {styles.totalPrice}>Total: {totalPrice}$</p>
                            <Button type = {"cta--green"} link = {"#"}>
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </>
                }
            </Container>
        </section>
    );
}



export default Cart;
