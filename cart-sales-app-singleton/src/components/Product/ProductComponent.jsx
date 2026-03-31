import "./ProductComponent.css";
import { useState } from "react";

const ProductComponent = (props) => {
    const [ isFavorite, setIsFavorite ] = useState(false);

    const getDiscount = (price, discount) => {
        const getProcentage = (price * discount) / 100;
        const newPrice = price - getProcentage;
        return newPrice.toFixed(2);
    }

    const handleFavoriteProduct = () => {
        if(!isFavorite) {
            setIsFavorite(true);
            props.addFavoriteProduct({
                "id": props.id,
                "name": props.name,
                "name": props.description,
                "price": props.price,
                "discount": props.discount
            })
        } else {
            setIsFavorite(false);
            props.removeFAvoriteProduct(props.id);
        }
    };

    return (
        <div className="product-card-container">
            <div className="image-container">
                <div className="badge-discount">
                    {`-${props.discount}%`}
                </div>
                <div className="favorite-icon-container"  onClick={handleFavoriteProduct}>
                    {
                        isFavorite ?
                        <i className="favorite-icon fa-solid fa-heart"></i>
                        :
                        <i className="favorite-icon fa-regular fa-heart"></i>
                    }
                </div>
            </div>
            <div className="info-product">
                <div className="description">
                    <h1>
                        {props.name}
                    </h1>
                    <p>{props.description}</p>
                </div>
                <div className="aditional-info">
                    <div className="rate-container">
                        <span id="stars">★★★★☆</span>
                        <span id="rate">4.0</span>
                    </div>
                    <div className="price">
                        <p id="new-price">{getDiscount(props.price, props.discount)}</p>
                        <p id="old-price"><s>${props.price}</s></p>
                    </div>
                </div>
            </div>
            <div className="actions-container">
                <button id="add-to-cart-btn" onClick={(e) => props.addToCart({
                    "id": props.id,
                    "name": props.name,
                    "description": props.description,
                    "price": props.price,
                    "discount": props.discount
                })}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductComponent