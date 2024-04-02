import styles from './CartItem.module.css'
import { Link, useNavigate } from 'react-router-dom';

function CartItem({list, item, updateCart}){
    const navigate = useNavigate();
    
    function handleReplaceItem(){
        handleRemoveItem();
        navigate(`/categories/${item.category}?title=${item.title}`)
    }

    function handleRemoveItem(e) {
        let count = 0;
        const updatedCart = list.filter(function(product) {
            const bool = product.title.includes(item.title);
            if (bool) {
                count = product.count;
            }
            return !bool;
        });
    
        updateCart(updatedCart, count);
    }

    return (
        <div className={styles.cartItem}> 
                <div className={styles.cartImageContainer}>  
                    <img className={styles.cartItemImage} src={item.image} alt={item.title} />
                </div>

                <div className = {styles.cartItemContent}> 
                    <Link className={styles.cartTitle} to={`/categories/${item.category}?title=${item.title}`}> 
                        {item.title}
                    </Link>

                    <p className={styles.cartRating}>
                        Rating: {item.rating.rate}  <ion-icon name="star" style={{ color: '#ff8400' }}></ion-icon>
                    </p>

                    <p className = {styles.cartQuantity}>
                        Quantity: {item.quantity}
                    </p>

                    <span onClick = {handleReplaceItem}>
                        <ion-icon name="git-compare-outline"></ion-icon> Replace
                    </span>
                    <span onClick = {handleRemoveItem}>
                        <ion-icon name="trash-outline"></ion-icon> Remove
                    </span>
                </div>

                <div className = {styles.cartPricingBox}>
                    <p className={styles.cartPrice}>
                        {item.price}$
                    </p>
                </div>
        </div>
    )
}

export default CartItem;
