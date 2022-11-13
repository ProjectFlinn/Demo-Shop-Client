import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { RootState } from "../../store/store";
import BasketItemCard from "./components/BasketItemCard/BasketItemCard";
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const basket = useSelector((state: RootState) => state.basketReducer);

  return (
    <div className="CheckoutPage">
      <Navbar />
      <div className="CheckoutPage__basket">
        {basket.map((basketItem) => (
          <BasketItemCard basketItem={basketItem} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
