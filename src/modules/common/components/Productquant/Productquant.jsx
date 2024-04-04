import styles from './Productquand.module.css'

import { useState } from 'react';
import { useApp } from '../../../../context/AppContext';
import { round } from "../../../../functions/functions"

function Productquant({ product }){
    const {status, updateCart, cart} = useApp();
    const [quantity, setQuantity] = useState(1);
    const currentPrice = status === "ready" ?  round(product.price * quantity) : 0;
    const [{showNotif, message}, setShowNotif] = useState({showNotif: false, message:""});

    function handleSetQuantity(e){
        setQuantity(+e.target.value);
    }

    function handleAddProduct(){
        let message = "";
        let instruction = {type: "", value: 0};
        let timer = 500;

        const index = cart.findIndex(p => p.title.includes(product.title));
        const updatedCart = [...cart];


        if(index === -1){
            
            timer = 500;
            instruction = {type: "increment", value: 1};
            message = "Product successfuly delivered to the cart ✅";

            const updatedProduct = {...product, quantity: quantity, price:currentPrice, count: 1};
            updatedCart.push(updatedProduct);

        } else if(index >= 0 && updatedCart[index].quantity < 10 && updatedCart[index].quantity + quantity <= 10){
           
            timer = 500;
            instruction = {type: "increment", value: 1};
            message = "Product successfuly delivered to the cart ✅";

            updatedCart[index] = {
                ...updatedCart[index],
                quantity: updatedCart[index].quantity + quantity,
                price: round(updatedCart[index].price + currentPrice),
                count: updatedCart[index].count + 1,
            };
        } else {
            timer = 1500;
            instruction = {type: "pause", value: 0}
            message = "💥You can't collect more then 10 products of the same type."
        }

        if(instruction.type !== "pause"){
            updateCart(updatedCart, instruction);
        }
        
        setShowNotif({showNotif: true, message});
        setTimeout(function(){
            setShowNotif({showNotif: false,  message});
        }, timer);
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