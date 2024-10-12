import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

// Define or import the LoginData type
interface LoginData {
  username: string;
  password: string;
}

// Thunk for posting a login request
export const loginUser = createAsyncThunk('Login', async (userData: LoginData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/user/login`, userData);
    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
    return rejectWithValue(error.response?.data || 'An error occurred');
  }
});
