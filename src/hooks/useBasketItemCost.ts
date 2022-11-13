import axios from "axios"
import { useQuery } from "@tanstack/react-query";

export const useBasketItemCost = (productId: string, quantity: number) => {
  const getBasketItemCost = async () => {
    const response = await axios.get<{totalPrice: string}>(`http://localhost:8000/products/price/${productId}?quantity=${quantity}`);
    return response.data;
  };

  return useQuery({
    queryFn: getBasketItemCost,
    queryKey: ['product', productId, 'quantity', quantity]
  });
};
