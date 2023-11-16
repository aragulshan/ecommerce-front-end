import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/auth/register', // To replace this with my end-point
      userData
    );

    return response.data; 
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
      user: null,
      error: null,
      isLoading: false,
      role: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.error = null;
          state.role = action.payload.role;
        })
        .addCase(register.rejected, (state, action) => {
          state.isLoading = false;
          state.user = null;
          state.error = action.error.message;
        });
    },
  });


export default registrationSlice.reducer;


