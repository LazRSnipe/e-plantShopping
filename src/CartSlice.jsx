
// Import necessary functions and reducers
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the Redux store with the cart reducer
const store = configureStore({
    reducer: {
        cart: cartReducer,  // cart slice of the state is managed by cartReducer
    },
});

// Export the store so it can be used in the app
export default store;
