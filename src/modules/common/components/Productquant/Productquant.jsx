import { useApp } from '../../../../context/AppContext';
import styles from './Productquand.module.css'
import { useState } from 'react';


function Productquant({ product }){
    const {status, updateCart, cart} = useApp();
    const [quantity, setQuantity] = useState(1);
    const currentPrice = status === "ready" ?  round(product.price * quantity) : 0;
    const [showNotif, setShowNotif] = useState(false);


    function handleAddProduct(){
        const index = cart.findIndex(p => p.title.includes(product.title));
        const updatedCart = [...cart];

        if(index === -1){
            const updatedProduct = {...product, quantity: quantity, price:currentPrice, count: 1};
            updatedCart.push(updatedProduct);
        } else {
            updatedCart[index] = {
                ...updatedCart[index],
                quantity: updatedCart[index].quantity + quantity,
                price: round(updatedCart[index].price + currentPrice),
                count: updatedCart[index].count + 1,
            };
        }

        setShowNotif(true);
        setTimeout(function(){
            setShowNotif(false);
        }, 1000);
        
        updateCart(updatedCart);
        setQuantity(1);
    }

    return (
        <>
            <p className = {`${styles.notification} ${showNotif ? styles.visible : styles.hidden}`}>Broduct successfuly delivered to the cart ✅</p>
            <div className={styles.productQuant}>
                <input type="number" id="quantity" name="quantity" min="1" max="10" value={quantity} className={styles.input} onChange={(e) => setQuantity(+e.target.value)}/>
                <p className={styles.productQuantPrice}>  
                   Total: {currentPrice}$
                </p>
            </div>
                                
            <div className={styles.buttonContainer}>
                <button onClick={handleAddProduct} className={styles.btnAdd} aria-label="Button handle add product">
                    Add to Card
                </button>

                <button className={styles.btnBuy} aria-label="Button handle buy product">
                    Buy Now
                </button>
            </div>
        </>
    )
}

function round(value){
    return Number(value.toFixed(2));
}


export default Productquant;