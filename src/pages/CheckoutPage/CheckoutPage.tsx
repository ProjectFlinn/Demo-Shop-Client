import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { RootState } from "../../store/store";
import BasketItemCard from "./components/BasketItemCard/BasketItemCard";
import { useCheckout } from "../../hooks/useCheckout";
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const basket = useSelector((state: RootState) => state.basketReducer);
  const {data, isLoading, isError, mutate} = useCheckout(basket);

  useEffect(() => {
    mutate();
  }, [basket]);

  return (
    <div className="CheckoutPage">
      <Navbar />
      <div className="CheckoutPage__basket">
        <h2>Total Price: £{data?.totalPrice}</h2>
        {basket.map((basketItem) => (
          <BasketItemCard basketItem={basketItem} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
