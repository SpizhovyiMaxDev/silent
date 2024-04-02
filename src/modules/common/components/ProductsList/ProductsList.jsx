import styles from './ProductsList.module.css'
import ProductsItem from '../ProductsItem/ProductsItem';
import { useApp } from '../../../../context/AppContext';


function ProductsList({type}){
    const { products } = useApp();
    const productsFiltered = type === "all" ? products : products.filter(product => product.category === type);

    return (
        <div className = {styles.productList}>
            {
                productsFiltered.map(product=> <ProductsItem product = {product} key = {product.id} />)
            }
        </div>        
    )
}

export default ProductsList;