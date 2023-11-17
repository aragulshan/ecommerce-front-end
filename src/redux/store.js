import { configureStore } from "@reduxjs/toolkit";
import authRecucer from "./slices/authenticationSlice";
import registrationReducer from "./slices/registrationSlice";
import priceReducer from "./slices/priceSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/addToCart";
import orderReducer from "./slices/placeOrder";
import paymentReducer from "./slices/paymentServiceSlice";
import userReducer from "./slices/userSlice"
import uploadProductReducer from "./slices/uploadProductSlice"

const store = configureStore({
  reducer: {
    auth: authRecucer,
    
    registration: registrationReducer,
    price: priceReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    payment: paymentReducer,
    users: userReducer,
    uploadProducts: uploadProductReducer,
  },
});

export default store;
