import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

// slice for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to the cart
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // If it's new, add with quantity 1
      }
    },

    // Remove item from the cart
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increment the quantity
    incrementCount: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    // Decrement the quantity
    decrementCount: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        // If the quantity is 1 remove the item from the cart
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementCount,
  decrementCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
