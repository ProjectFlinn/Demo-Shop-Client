import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import "./Navbar.scss";

const Navbar = () => {
  const basket = useSelector((state: RootState) => state.basketReducer);
  const numberOfItemsInBasket = basket.reduce((previousValue, basketItem) => previousValue + basketItem.quantity, 0);

  return (
    <div className="Navbar">
      <nav>
        <Link to='/'>Store</Link>
        <Link to='/checkout'>Checkout</Link>
      </nav>
      <div className="Navbar__basket-info">
        <span>Items in cart: {numberOfItemsInBasket}</span>
      </div>
    </div>
  )
};

export default Navbar;
