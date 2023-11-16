// redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for adding products
export const addProductAsync = (productData) => async (dispatch) => {
  try {
    // Create FormData for file upload
    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("discountPercentage", productData.discountPercentage);
    formData.append("rating", productData.rating);
    formData.append("stock", productData.stock);
    formData.append("brand", productData.brand);
    formData.append("category", productData.category);
    formData.append("thumbnail", productData.thumbnail);
    formData.append("images", productData.images.join(","));

    // Make the API request
    const response = await axios.post("/api/products", formData, { //replace with my api
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Dispatch the addProduct action with the response data
    dispatch(addProduct(response.data));
  } catch (error) {
    // Handle errors
    console.error("Error adding product:", error);
  }
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    // Add more reducers as needed
  },
});

export const { addProduct } = productSlice.actions;
export const selectAllProducts = (state) => state.products.products;

export default productSlice.reducer;


// // redux/productSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const uploadProductSlice = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     error: null,
//     isLoading: false,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//     },
//     // Add more reducers as needed
//   },
// });

// export const { addProduct } = uploadProductSlice.actions;
// export const selectAllProducts = (state) => state.products.products;

// export default uploadProductSlice.reducer;
