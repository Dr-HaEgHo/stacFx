import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getChatRooms } from "./ChatActions";

interface AuthState {
  loading: boolean;
  chatRooms: [];
}

const initialState: AuthState = {
  loading: false,
  chatRooms: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    // ==================================================== GET ALL CHAT ROOMS
    builder.addCase(getChatRooms.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(getChatRooms.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.chatRooms = payload?.data;
    }),
    builder.addCase(getChatRooms.rejected, (state, { payload }) => {
      state.loading = false;
    });
   
   
  
  },
});

export const { } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer;
