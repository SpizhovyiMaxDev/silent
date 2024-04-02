import styles from './ProductsList.module.css'
import ProductsItem from '../ProductsItem/ProductsItem';

function ProductsList({products}){
    return (
        <div className = {styles.productList}>
            {
                products.map(product=> <ProductsItem product = {product} key = {product.id} />)
            }
        </div>        
    )
}

export default ProductsList;