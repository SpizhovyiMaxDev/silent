import styles from './CartItem.module.css'
import { Link } from 'react-router-dom';
import { round } from "../../../../functions/functions"


function CartItem({list, item, updateCart}){
    function updateList(e){
        let instruction = {type: "", value: 0};
        let updatedCart = [];
        
        if(+e.target.value !== 0){
            instruction = {type: "pause", value: 0}
            updatedCart = list.map(function(product) {
                
                const bool = product.title.includes(item.title);
                if (bool) {
                    product.quantity = +e.target.value;
                }

                return product;
            });
        } else {
            updatedCart = list.filter(product => {
             instruction = {type: "decrement", value: product.count}
             return !product.title.includes(item.title)
            });  
        }
    
        updateCart(updatedCart, instruction);
    }

    return (
        <div className={styles.cartItem}> 
                <div className={styles.cartImageContainer}>  
                    <img className={styles.cartItemImage} src={item.image} alt={item.title} />
                </div>

                <div className = {styles.cartItemContent}> 
                    <Link className={styles.cartTitle} to={`/categories/${item.category.split(" ").join("-")}/${item.title}`}> 
                        {item.title}
                    </Link>

                    <p className={styles.cartRating}>
                        Rating: {item.rating.rate}  <ion-icon name="star" style={{ color: '#ff8400' }}></ion-icon>
                    </p>

                    <p className = {styles.cartQuantity}>
                        Quantity: {item.quantity}
                    </p>


                    <select className = {styles.quantitySelect} onChange={updateList} value={item.quantity}>
                    {
                        Array.from({length: 11}, (_, i) => {
                            return  <option key = {i} value = {i}>QTY: {i}</option>
                        })
                    }
                    </select>
                </div>

                <div className = {styles.cartPricingBox}>
                    <p className={styles.cartPrice}>
                        {round(item.price * item.quantity)}$
                    </p>
                </div>
        </div>
    )
}

export default CartItem;
