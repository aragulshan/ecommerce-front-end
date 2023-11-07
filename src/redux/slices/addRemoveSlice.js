import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateQuantity = createAsyncThunk(
  "quantity/updateQuantity",
  async ({ productId, action }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/products/updateQuantity", {
        productId,
        action,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const quantitySlice = createSlice({
  name: "quantity",
  initialState: 0,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateQuantity.fulfilled, (state, action) => {
      state.quantity = action.payload?.quantity;
      // Update the quantity in the Redux store based on the server response
      // return action.payload.quantity;
    });
  },
});

export default quantitySlice.reducer;
