import { useNavigate } from 'react-router-dom';
import styles from './ProductItem.module.css'


function ProductItem({product}){
     const navigate = useNavigate();

    return (
        <div className = {styles.card} onClick = {() => navigate(`/categories/${product.category}?title=${product.title}`)}>
            <div className = {styles.cardImageContainer}> 
                <img className = {styles.cardImage} src={product.image} alt = {product.title}/> 
            </div>

            <h4 className = {styles.cardTitle}>
                {product.title}
            </h4>

            <p className = {styles.cardRating}>
               - Rating: {product.rating.rate} <ion-icon name="star" style={{ color: '#ff8400' }}></ion-icon>
            </p>

            <p className = {styles.cardPrice}>
                {product.price}$
            </p>
        </div>
    )
}


export default ProductItem;