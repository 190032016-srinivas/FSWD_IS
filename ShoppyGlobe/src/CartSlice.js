import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { validCartItem } from "../BackEnd/Models/cartItems.model";
import { useDispatch } from "react-redux";

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (cartItemCopy, { rejectWithValue }) => {
    try {
      const newCartItem = await fetch("http://localhost:3000/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItemCopy),
      });
      return cartItemCopy;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
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
        state.cartItems.push(action.payload);
      }
    },

    //reset cart items with db ones

    resetCartFromDb: (state, action) => {
      state.cartItems = action.payload;
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
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        console.log("fulfilled ", action.payload);
        state.status = "succeeded";
        state.cartItems = [...state.cartItems, action.payload];
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  addToCart,
  resetCartFromDb,
  removeFromCart,
  incrementCount,
  decrementCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
