import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const sendPayment = createAsyncThunk(
  "payment/sendPayment",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-checkout-session" //replace this with my own api
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendPayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendPayment.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(sendPayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const paymentService = createApi({
//   reducerPath: "payment",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000/api/",
//   }),
//   endpoints: (builder) => {
//     return {
//       sendPayment: builder.mutation({
//         query: () => {
//           return {
//             url: "/create-checkout-session", //replace this url from the backend api url
//             method: "POST",
//           };
//         },
//       }),
//     };
//   },
// });

// export const { useSendPaymentMutation } = paymentService;

// export default paymentService;
