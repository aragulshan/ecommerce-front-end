import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}` //to replace with my actual api
        // `http://localhost:8080/api/products?search=${searchQuery}` //to replace with my actual api
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
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
        state.products = action.payload;
        state.error = null;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export const selectSearchedProducts = (state) => state.search.products;

export default searchSlice.reducer;
// export default searchSlice.reducer;
