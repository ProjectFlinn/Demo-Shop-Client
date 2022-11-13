import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { RootState } from "../../store/store";
import BasketItemCard from "./components/BasketItemCard/BasketItemCard";
import { useTotalPrice } from "../../hooks/useTotalPrice";
import { useCheckout } from "../../hooks/useCheckout";
import "./CheckoutPage.scss";
import axios from "axios";

const CheckoutPage = () => {
  const basket = useSelector((state: RootState) => state.basketReducer);

  const {
    data: totalPriceResponse, 
    isLoading: totalPriceLoading, 
    isError: totalPriceError, 
    mutate: evaluateTotalPrice
  } = useTotalPrice(basket);

  const { 
    data: checkoutResponse, 
    isLoading: checkoutLoading,
    isError: checkoutError,
    error,
    mutate: checkout
  } = useCheckout(basket);

  useEffect(() => {
    evaluateTotalPrice();
  }, [basket]);

  return (
    <div className="CheckoutPage">
      <Navbar />
      <div className="CheckoutPage__basket">
        <h2>Total Price: £{totalPriceResponse?.totalPrice}</h2>
        {checkoutResponse?.message === 'Order complete!' && <p>Order complete!</p>}
        {checkoutError && axios.isAxiosError(error) && <p>{error.response?.data.message}</p>}
        <button 
          className='CheckoutPage__basket__checkout-btn'
          onClick={() => checkout()}
          disabled={basket.length < 1}
        >
          Checkout
        </button>
        {basket.map((basketItem) => (
          <BasketItemCard key={basketItem.product.id} basketItem={basketItem} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
