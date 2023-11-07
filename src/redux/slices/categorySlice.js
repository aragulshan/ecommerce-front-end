import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

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

const categorySlice = createSlice({
  name: "category",
  initialState: {
    products: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(searchByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
