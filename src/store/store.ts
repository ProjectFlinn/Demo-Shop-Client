import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './basketSlice';

const store = configureStore({
  reducer: {
    basketReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export default store;