// productSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/product/all-products"
      );


      return response.data.allproducts;
      // return response.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const searchProducts = createAsyncThunk(
//   "search/searchProducts",
//   async (searchQuery, { rejectWithValue }) => {
//     const apiUrl = `http://localhost:8080/api/product/product-brand/search?q=${searchQuery}`;

//     try {
//       const response = await axios.get(apiUrl);
//       return response.data.allproducts;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/all-products?q=${searchQuery}` 
        // `https://dummyjson.com/products/search?q=${searchQuery}` //to replace with my actual api
      );
      // return response.data;
      return response.data.allproducts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchByCategory = createAsyncThunk(
  "category/searchByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}` // to replace it with my api
        // `http://localhost:8080/api/products?category=${category}` // to replace it with my api
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(searchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(searchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload || [];
      state.error = null;
    })
    .addCase(searchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.payload?.error || "An error occurred";
    })
    // .addCase(searchProducts.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.products = action.payload || [];
    //   // state.products = action.payload?.products;
    //   state.error = null;
    // })
    .addCase(searchByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload?.products;
      state.error = null;
    });
  },
});
export const selectAllProducts = (state) => state.products.products;


export default productSlice.reducer;

