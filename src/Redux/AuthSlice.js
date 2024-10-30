import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

// **Register User Thunk**
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/user/register', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Registration failed!' });
    }
  }
);

// **Login User Thunk with Role Handling**
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/user/login', userData);
      return response.data; // Expecting role to be part of the response
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Login failed!' });
    }
  }
);

// **Logout Action**
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch }) => {
    dispatch(clearUserData());
    toast.success('Logout successful!');
  }
);

// **Auth Slice Definition**
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
    user: null,
    role: null, // Track user role
    isAuthenticated: false,
  },
  reducers: {
    clearUserData: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // **Registration Reducers**
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        toast.success('Registration successful! Welcome!');
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload.message || 'Registration failed!');
      })

      // **Login Reducers**
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.role = action.payload.role; // Store user role from response
        state.isAuthenticated = true;
        toast.success(`Login successful! Welcome ${action.payload.role}!`);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload.message || 'Login failed!');
      })

      // **Logout Reducer**
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

// **Export Actions and Reducer**
export const { clearUserData } = authSlice.actions;
export default authSlice.reducer;