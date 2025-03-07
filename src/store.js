
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; 


const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

// Export the store for use throughout the app
export default store;
