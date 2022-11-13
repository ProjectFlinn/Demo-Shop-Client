import axios from "axios";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { clearBasket } from "../store/basketSlice";
import { BasketItem } from "../types/BasketItem";

export const useCheckout = (basket: BasketItem[]) => {
  const dispatch = useDispatch();

  const body = basket.map(basketItem => ({
    productId: basketItem.product.id, 
    quantity: basketItem.quantity
  }));

  const checkout = async () => {
    const response = await axios.post<{message: string}>('http://localhost:8000/products/checkout', {
      basket: body
    });
    if (response.status === 200) {
      dispatch(clearBasket());
      console.log('hit2')
    }
    return response.data;
  };

  return useMutation({
    mutationFn: checkout
  });
};
