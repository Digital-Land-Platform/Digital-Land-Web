import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../../types/LoginType';
import { loginUser } from '../actions/loginAction';

// This is just showercasing how reducers should be configured 
// It may not work, you have to configure it yourself 
// I think Henok is the one to work on login so, don't rely on it or anything else except project setups

interface loginState {
  login: LoginResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: loginState = {
  login: null,
  loading: false,
  error: null
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetState: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.login = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message || 'Something went wrong, please try again.';
      });
  }
});

export const { resetState } = loginSlice.actions;
export default loginSlice.reducer;
