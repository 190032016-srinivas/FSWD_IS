// store.js
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

// Configure the store and add the cart reducer
const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
