import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './BasketSlice';

const store = configureStore({
  reducer: {
    basketReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export default store;