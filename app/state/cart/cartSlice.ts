import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  stock: number;
  quantity: number;
  thumbnail: string;
};

export type CartSlice = {
  value: CartItem[];
};

const initialState: CartSlice = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.value = [...state.value, action.payload];
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.value = state.value.map((product) => {
        if (product.id === action.payload) {
          product.quantity += 1;
        }
        return product;
      });
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.value = state.value.map((product) => {
        if (product.id === action.payload) {
          product.quantity -= 1;
        }
        return product;
      });
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
