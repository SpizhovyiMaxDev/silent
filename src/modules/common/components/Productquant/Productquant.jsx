import styles from './Productquand.module.css'

import { useState } from 'react';
import { useApp } from '../../../../context/AppContext';
import { round } from "../../../../functions/functions"

function Productquant({ product }){
    const {status, updateCart, cart} = useApp();
    const [quantity, setQuantity] = useState(1);
    const currentPrice = status === "ready" ?  round(product.price * quantity) : 0;
    const [{showNotif, message}, setShowNotif] = useState({showNotif: false, message:""});
    const index = cart.findIndex(p => p.title.includes(product.title));

    function handleSetQuantity(e){
        setQuantity(+e.target.value);
    }

    function handleAddProduct(){
        updateCart({type:"cart/update", payload:{instructions:{type:"increase", value: 1}}});

        setShowNotif({showNotif: true, message:"Product added to the cart ✅"});
        setTimeout(function(){
            setShowNotif({showNotif: false,  message:"Product added to the cart ✅"});
        }, 1000);
    }

    return (
        <>
            <p className = {`${styles.notification} ${showNotif ? styles.visible : styles.hidden}`}>{message}</p>
            <div className={styles.productQuant}>
                <select className = {styles.productSelection} onChange={handleSetQuantity}>
                   {
                    Array.from({length: 10}, (_, i) => {
                        return  <option value = {i+1}>{i+1}</option>
                    })
                   }
                </select>
                <p className={styles.productQuantPrice}>  
                   Total: {currentPrice}$
                </p>
            </div>
                                
            <div className={styles.buttonContainer}>
                <button onClick={handleAddProduct} className={styles.btnAdd} aria-label="Button handle add product" disabled = {showNotif === true}>
                    Add to Card
                </button>

                <button className={styles.btnBuy} aria-label="Button handle buy product">
                    Buy Now
                </button>
            </div>
        </>
    )
}




export default Productquant;