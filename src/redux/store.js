import { configureStore } from "@reduxjs/toolkit";
import authRecucer from "./slices/authenticationSlice";
import registrationReducer from "./slices/registrationSlice";
// import searchReducer from "./slices/searchSlice"; // Import your searchSlice
// import categoryReducer from "./slices/categorySlice"; // Import your categorySlice
import priceReducer from "./slices/priceSlice";
import productsReducer from "./slices/productsSlice"
import quantityReducer from "./slices/addRemoveSlice"
import cartReducer from "./slices/addToCart"

const store = configureStore({
  reducer: {
    auth: authRecucer,
    registration: registrationReducer,
    // search: searchReducer,
    // category: categoryReducer,
    price: priceReducer,
    products: productsReducer,
    quantity: quantityReducer,
    cart: cartReducer,
  },
});

export default store;
