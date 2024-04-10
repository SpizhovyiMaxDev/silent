import styles from './CartItem.module.css'
import { Link } from 'react-router-dom';
import { round } from "../../../../functions/functions";


function CartItem({cart, item, updateCart}){

    function updateList(e){
        let instruction = {type: "", value: 0};
        let updatedCart = [];
        
        if(+e.target.value !== 0){
            instruction = {type: "pause", value: 0}
            updatedCart = cart.map(function(product) {
                
                const bool = product.title.includes(item.title);
                if (bool) {
                    product.quantity = +e.target.value;
                }

                return product;
            });
        } else {
            updatedCart = cart.filter(product => {
                instruction = {type: "decrement", value: 1}
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

                    <p className = {styles.cartDescription}>
                        {item.description.split(" ").slice(0, 13).join(" ")}...
                    </p>


                    <select className={styles.quantitySelect} onChange={updateList} value={item.quantity}>
                        {Array.from({ length: 11 }, (_, i) => (
                            <option key={i} value={i}>
                                {i === 0 ? "Delete" : `QTY: ${i}`}
                            </option>
                        ))}
                    </select>

                </div>

                <div className = {styles.cartPricingBox}>
                    <p className={styles.cartPrice}>
                        {round(item.price*item.quantity)}$
                    </p>
                </div>
        </div>
    )
}

export default CartItem;
