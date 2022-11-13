import React from "react";
import { Product } from "../../../../types/Product";
import "./ProductCard.scss";

const ProductCard = ({
  id,
  name,
  description,
  imageUrl,
  unitsInStock,
  basePrice,
  salePrice,
}: Product) => {
  const hasDiscount = basePrice !== salePrice;

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <div className="product-card__description">
        <p>{description}</p>
      </div>
      <div className="product-card__price">
        <span className={hasDiscount ? "product-card__price__crossed-out" : ""}>£{basePrice.toFixed(2)}</span>
        {hasDiscount && <span className="product-card__price__discounted">Now £{salePrice.toFixed(2)}</span>}
      </div>
    </div>
  );
};

export default ProductCard;
