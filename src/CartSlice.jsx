
// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the cart
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: {
    items: [], // Initial state with an empty items array
  },
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item if not present
      }
    },
    // Action to remove an item from the cart by its ID
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Filter out the item by ID
    },
    // Action to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity; // Update the quantity of the item
      }
    }
  }
});

// Export actions and reducer
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
