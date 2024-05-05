import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { signup } from "./authActions";

interface AuthState {
  loading: boolean;
  isLoggedIn: boolean;
  signupSuccess: boolean;
  userDetails: {};
  userToken: string;
  requestToken: string;
}

const initialState: AuthState = {
  loading: false,
  isLoggedIn: false,
  signupSuccess: false,
  userDetails: {},
  userToken: "",
  requestToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearSignupSuccess: (state) => {
      state.signupSuccess = false;
    },
    logout: (state) => {
      state.userToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, { payload }) => {
      state.loading = true;
    }),
      builder.addCase(signup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.signupSuccess = true;
        state.userDetails = payload?.data;
        state.userToken = payload?.data.access;
      }),
      builder.addCase(signup.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export const { clearSignupSuccess, logout } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer;
