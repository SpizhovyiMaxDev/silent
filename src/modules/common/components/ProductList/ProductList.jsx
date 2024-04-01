import styles from './ProductList.module.css'
import ProductItem from '../../../common/components/ProductItem/ProductItem';

function ProductList({products}){
    return (
        <div className = {styles.productList}>
            {
                products.map(product=> <ProductItem product = {product} key = {product.id} />)
            }
        </div>        
    )
}

export default ProductList;