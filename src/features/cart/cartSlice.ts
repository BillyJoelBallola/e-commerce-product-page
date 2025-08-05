import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../utils/types";

const initialState: { items: Product[] } = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const itemId = action.payload.id;
      const itemIdx = state.items.findIndex((i) => i.id === itemId);

      if (itemIdx !== -1) {
        state.items[itemIdx].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload.id;
      const itemIdx = state.items.findIndex((i) => i.id === itemId);

      if (itemIdx !== -1 && state.items[itemIdx].quantity > 1) {
        state.items[itemIdx].quantity -= 1;
      } else if (itemIdx !== -1) {
        state.items.splice(itemIdx, 1);
      }
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, addToCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
