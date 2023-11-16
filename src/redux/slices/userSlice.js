// redux/userSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/auth/getallusers"
      ); 
      return response.data.users; // Assuming that the users are nested under the "users" property
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// const userSlice = createSlice({
//   name: "users",
//   initialState: {
//     users: [],
//     error: null,
//     isLoading: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.users = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.isLoading = false;
//         state.users = [];
//         state.error = action.error.message;
//       });
//   },
// });
const userSlice = createSlice({
  // name: "users",
  // initialState: {
  //   users: [], // Initialize users as an empty array
  //   error: null,
  //   isLoading: false,
  // },
  name: "users",
  initialState: {
    users: [], // Initialize users as an empty array
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchUsers.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(fetchUsers.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.users = action.payload;
      //   state.error = null;
      // })
      // .addCase(fetchUsers.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.users = [];
      //   state.error = action.error.message;
      // });
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload; // Check if action.payload is the array of users
        state.error = null;
      })
      // .addCase(fetchUsers.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.users = action.payload;
      //   state.error = null;
      // })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});
// export const selectAllUsers = (state) => state.users.users;

  export default userSlice.reducer;

// export default registrationSlice.reducer;
