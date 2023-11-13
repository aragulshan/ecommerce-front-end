import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      console.log("Order data:", orderData); // Log order data
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        orderData
      );
      console.log("Response:", response.data); // Log response data
      return response.data;
    } catch (error) {
      console.error("Error:", error); // Log the error
      throw error; // Corrected line
      // return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  order: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(placeOrder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.order = action.payload;
    });

    builder.addCase(placeOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Failed to place the order";
    });
  },
});

export default orderSlice.reducer;


