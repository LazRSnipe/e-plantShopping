import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';  // Import any global styles
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './store.js';  // Import the Redux store from store.js

// Render the app, wrapping it with the Redux Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  // Wrap the app with the Redux Provider
      <App />  // The main App component
    </Provider>
  </React.StrictMode>,
);
