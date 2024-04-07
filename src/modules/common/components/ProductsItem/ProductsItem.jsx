import styles from './ProductsItem.module.css'
import { useNavigate } from 'react-router-dom';


function ProductsItem({product}){
    const navigate = useNavigate();
    
    return (
        <div className = {styles.card} onClick = {() => navigate(`/categories/${product.category.split(" ").join("-")}/${product.title}`)}>
            <div className = {styles.cardImageContainer}> 
                <img className = {styles.cardImage} src={product.image} alt = {product.title}/> 
            </div>

            <h3 className = {styles.cardTitle}>
                {product.title}
            </h3>

            <p className = {styles.cardRating}>
               - Rating: {product.rating.rate} <ion-icon name="star" style={{ color: '#ff8400' }}></ion-icon>
            </p>

            <p className = {styles.cardPrice}>
                {product.price}$
            </p>
        </div>
    )
}


export default ProductsItem;