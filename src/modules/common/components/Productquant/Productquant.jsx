import styles from './Productquand.module.css'

import { useState } from 'react';
import { useApp } from '../../../../context/AppContext';
import { round } from "../../../../functions/functions"
import { useNavigate } from 'react-router-dom';

function Productquant({ product }){
    const navigate = useNavigate();
    const {status, updateCart, cart} = useApp();
    const [quantity, setQuantity] = useState(1);
    const currentPrice = status === "ready" ?  round(product.price * quantity) : 0;
    const [{showNotif, message}, setShowNotif] = useState({showNotif: false, message:""});
    const index = cart.findIndex(p => p.title.includes(product.title));
   
    function handleSetQuantity(e){
        setQuantity(+e.target.value);
    }

    function handleAddProduct(){
        const updatedProduct = {...product, quantity}
        updateCart([...cart, updatedProduct], {type:"increment", value: 1});
        callNotif("Product has been to the cart ✅", 500)
    }

    function handleRemoveProduct() {
        const updatedCart = cart.filter((_, i) => i !== index);
        updateCart(updatedCart, { type: "decrement", value: 1 });
        callNotif("Product has been removed the cart ❌", 500);
    }

    function callNotif(message = "", time = 500){
        setShowNotif({showNotif: true, message});
        setTimeout(function(){
            setShowNotif({showNotif: false,  message});
        }, time);
    }

    return (
        <>
            <p className = {`${styles.notification} ${showNotif ? styles.visible : styles.hidden}`}>{message}</p>
          {
            index === -1 ? 
            <>
            <div className={styles.productQuant}>
                <select className = {styles.productSelection} onChange={handleSetQuantity}>
                   {
                    Array.from({length: 10}, (_, i) => {
                        return  <option key = {i} value = {i+1}>{i+1}</option>
                    })
                   }
                </select>
                <p className={styles.productQuantPrice}>  
                   Total: {currentPrice}$
                </p>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handleAddProduct} className="btn--outline" aria-label="Button handle add product" disabled = {showNotif === true}>
                    Add to Card
                </button>

                <button className="btn--outline" aria-label="Button handle buy product">
                    Buy Now
                </button>
            </div>
            </> : 
            <>
            <div className={styles.buttonContainer}>
                <button className="btn--outline" aria-label="Button go to cart" onClick = {() => navigate("/cart")}>
                    Go to Card
                </button>

                <button className="btn--outline" onClick={handleRemoveProduct}  aria-label="Button handle remove product" disabled = {showNotif === true}>
                    Remove Product
                </button>
            </div>
            </>
          }
                                
        </>
    )
}




export default Productquant;