import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type FavourtiesState = {
  value: number[];
};

const initialState: FavourtiesState = {
  value: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(
        (productId) => productId !== action.payload
      );
    },
  },
});

export const { add, remove } = favouritesSlice.actions;

export default favouritesSlice.reducer;
