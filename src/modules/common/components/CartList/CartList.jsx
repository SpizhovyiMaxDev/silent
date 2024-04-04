import styles from './CartList.module.css'
import CartItem from '../../../common/components/CartItem/CartItem'

function CartList({cart, updateCart}){
    return (
        <div className = {styles.cartList}> 
            {cart.map(item => {
                return <CartItem item = {item} updateCart = {updateCart} key = {item.id} cart = {cart}/> 
            })}
        </div>
    )
}

export default CartList;