import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { courseData } from "@/types";
import { getAllCourses } from "./courseAction";

interface AuthState {
  loading: boolean;
  courses: courseData[];
}

const initialState: AuthState = {
  loading: false,
  courses: []
};

export const authSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(getAllCourses.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.courses = payload ? payload : undefined
    }),
    builder.addCase(getAllCourses.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const { } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer;