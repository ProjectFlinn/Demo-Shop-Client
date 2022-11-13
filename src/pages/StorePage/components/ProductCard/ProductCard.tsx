import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../../types/Product";
import { addToBasket, removeFromBasket } from "../../../../store/BasketSlice";
import { RootState } from "../../../../store/store";
import "./ProductCard.scss";

const ProductCard = ({product}: {product: Product}) => {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basketReducer);
  const productInBasket = basket.filter(item => item.product.id === product.id).pop();

  const isInBasket = productInBasket !== undefined;  
  const hasDiscount = product.basePrice !== product.salePrice;

  const incrementQuantityInBasket = () => dispatch(addToBasket(product));
  const decrementQuantityInBasket = () => dispatch(removeFromBasket(product));

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-card__description">
        <p>{product.description}</p>
      </div>
      <div className="product-card__stock">
        {product.unitsInStock > 0 ? <span>{product.unitsInStock} remaining!</span> : <span>Sold out!</span>}
      </div>
      <div className="product-card__price">
        <span className={hasDiscount ? "product-card__price__crossed-out" : ""}>£{product.basePrice.toFixed(2)}</span>
        {hasDiscount && <span className="product-card__price__discounted">Now £{product.salePrice.toFixed(2)}</span>}
      </div>
      <div className="product-card__actions">
        {isInBasket ?
        <>
          <button className="product-card__actions__modify-quantity" onClick={incrementQuantityInBasket}>+</button>
          <span>{productInBasket.quantity} in basket!</span>
          <button className="product-card__actions__modify-quantity" onClick={decrementQuantityInBasket}>-</button>
        </> : 
        <button className="product-card__actions__add-to-cart" onClick={incrementQuantityInBasket}>
          Add to basket
        </button>}
      </div>
    </div>
  );
};

export default ProductCard;
