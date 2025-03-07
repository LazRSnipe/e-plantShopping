//import { createSlice } from '@reduxjs/toolkit';

//export const CartSlice = createSlice({
  //name: 'cart',
  //initialState: {
  //  items: [], // Initialize items as an empty array
//  },
//  reducers: {
  //  addItem: (state, action) => {
    
  //  },
   // removeItem: (state, action) => {
  //  },
   // updateQuantity: (state, action) => {

    
 //   },
 // },
//});

//export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

//export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        }
    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
