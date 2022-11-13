import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketItem } from "../types/BasketItem";
import { Product } from "../types/Product";

const initialState: BasketItem[] = [];

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state: BasketItem[], action: PayloadAction<Product>) {
      const indexOfItemInBasket = state.findIndex(item => item.product.id === action.payload.id);
      if (indexOfItemInBasket !== -1) {
        state[indexOfItemInBasket].quantity++;
      } else {
        state.push({product: action.payload, quantity: 1});
      }
    },
    removeFromBasket(state: BasketItem[], action: PayloadAction<Product>) {
      const indexOfItemInBasket = state.findIndex(item => item.product.id === action.payload.id);
      if (indexOfItemInBasket !== -1) {
        const basketItem = state[indexOfItemInBasket];
        if (basketItem.quantity <= 1) {
          state.splice(indexOfItemInBasket, 1);
        } else {
          state[indexOfItemInBasket].quantity--;
        }
      }
    },
    clearBasket(state: BasketItem[]) {
      state = [];
    }
  }
});

export const addToBasket = basketSlice.actions.addToBasket;
export const removeFromBasket = basketSlice.actions.removeFromBasket;
export const clearBasket = basketSlice.actions.clearBasket;

export default basketSlice.reducer;
