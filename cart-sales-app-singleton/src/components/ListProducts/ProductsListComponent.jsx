import ProductComponent from "../Product/ProductComponent"
import './ProductListComponent.css';
import cartService from "../../services/cartService/cartService";
import favoriteService from "../../services/cartService/favoriteService";

ProductComponent

const ProductsListComponent = () => {

  const handleAddToCart = (product) => {
    cartService.addItem(product);
  }

  const products = [
    {
      "id": 1,
      "name": "T-Shirt",
      "description": "Breathable cotton t-shirt",
      "price": 24.99,
      "discount": 20
    },
    {
      "id": 2,
      "name": "T-Shirt",
      "description": "Breathable cotton t-shirt",
      "price": 24.99,
      "discount": 15
    }
  ]

  const handleAddFavoriteProduct = (product) => {
    console.log(product);
    favoriteService.addFavoriteItem(product);
  }

  const handleRemoveFavoriteProduct = (productId) => {
    console.log(productId);
    favoriteService.removeFavoriteItem(productId);
  }
  

  return (
    <div className="product-list-container">
      {products?.map(product => (
        <ProductComponent
        key={product.id}
        {... product}
        addToCart= {handleAddToCart}
        addFavoriteProduct={handleAddFavoriteProduct}
        removeFAvoriteProduct={handleRemoveFavoriteProduct}
        ></ProductComponent>
      ))}
    </div>
  )
}

export default ProductsListComponent