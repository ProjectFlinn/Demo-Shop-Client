import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { BasketItem } from "../types/BasketItem";

export const useCheckout = (basket: BasketItem[]) => {
  const body = basket.map(basketItem => ({
    productId: basketItem.product.id, 
    quantity: basketItem.quantity
  }));

  const evaluateBasketCost = async () => {
    const response = await axios.post<{totalPrice: string}>('http://localhost:8000/products/price', {
      basket: body
    });
    return response.data;
  };

  return useMutation({
    mutationFn: evaluateBasketCost
  })
};