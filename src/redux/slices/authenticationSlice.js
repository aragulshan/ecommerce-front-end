import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Async action creator
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        credentials
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Synchronous action creators
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    role:null,
    error: null,
    isLoading: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false; // Set isAuthenticated to false on logout
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true; // Set isAuthenticated to true on successful login
        state.role = action.payload.role;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(authSlice.actions.logout, (state) => {
        state.isAuthenticated = false; // Set isAuthenticated to false using the logout action
        state.role = null; //clear role on logout
      });
  },
});

export const { reducer: authReducer, actions } = authSlice;

export default authReducer;





// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';


// export const login = createAsyncThunk(
//   "auth/login",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/auth/login", // to replace it with my actual API endpoint
//         credentials
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     error: null,
//     isLoading: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload;
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.error = action.error.message;
//       });
//   },
// });

// export default authSlice.reducer;

