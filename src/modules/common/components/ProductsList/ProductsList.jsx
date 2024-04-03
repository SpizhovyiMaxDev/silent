import styles from './ProductsList.module.css'
import ProductsItem from '../ProductsItem/ProductsItem';
import { useApp } from '../../../../context/AppContext';


function ProductsList({type}){
    const { products } = useApp();
    let productsFiltered;

    if(type === "mixed"){
        productsFiltered = products.slice().reverse().slice(0, 8);
    }else if(type === "all"){
        productsFiltered = products;
    }else{
        productsFiltered = products.filter(product => product.category === type);
    }

    return (
        <div className = {styles.productList}>
            {
                productsFiltered.map(product=> <ProductsItem product = {product} key = {product.id} />)
            }
        </div>        
    )
}

export default ProductsList;