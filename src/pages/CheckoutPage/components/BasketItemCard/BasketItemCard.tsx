import React from "react";
import { useDispatch } from "react-redux";
import { BasketItem } from "../../../../types/BasketItem";
import { addToBasket, removeFromBasket } from "../../../../store/BasketSlice";
import { useBasketItemCost } from "../../../../hooks/useBasketItemCost";
import "./BasketItemCard.scss";

const BasketItemCard = ({ basketItem }: { basketItem: BasketItem }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useBasketItemCost(basketItem.product.id, basketItem.quantity);

  const incrementQuantityInBasket = () => dispatch(addToBasket(basketItem.product));
  const decrementQuantityInBasket = () => dispatch(removeFromBasket(basketItem.product));

  return (
    <div className="BasketItemCard">
      <div className="BasketItemCard__image">
        <h3>{basketItem.product.name}</h3>
        <img src={basketItem.product.imageUrl} alt="" />
      </div>
      <div className="BasketItemCard__quantity">
        <span>x{basketItem.quantity}</span>
      </div>
      <div className="BasketItemCard__price">
        <span>{isError ? 'Error!' : isLoading ? 'Loading...' : `Cost: £${data?.totalPrice}`}</span>
      </div>
      <div className="BasketItemCard__actions">
        <button onClick={decrementQuantityInBasket}>-</button>
        <button onClick={incrementQuantityInBasket}>+</button>
      </div>
    </div>
  );
};

export default BasketItemCard;
