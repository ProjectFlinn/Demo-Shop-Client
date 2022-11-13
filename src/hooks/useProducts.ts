import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product";

export const useProducts = () => {
  const fetchProducts = async () => {
    const response = await axios.get<Product[]>('http://localhost:8000/products');
    return response.data;
  }

  return useQuery({
    queryFn: fetchProducts,
    queryKey: ['products']
  });
};
