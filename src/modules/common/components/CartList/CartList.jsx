import styles from './CartList.module.css'
import CartItem from '../../../common/components/CartItem/CartItem'

function CartList({list, updateCart}){
    return (
        <div className = {styles.cartList}> 
            {list.map(item => {
                return <CartItem item = {item} updateCart = {updateCart} key = {item.id} list = {list}/> 
            })}
        </div>
    )
}

export default CartList;