import { createSlice } from "@reduxjs/toolkit";
import { courseData } from "@/types";
import { getAllCourses, getOnboardingVideos, updateOnboardingData } from "./courseAction";

interface coursesState {
  loading: boolean;
  courses: courseData[];
  updateLoading: boolean;
  onboardingData: courseData[]
}

const initialState: coursesState = {
  loading: false,
  updateLoading: false,
  courses: [],
  onboardingData: []
};

export const authSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //============================================================== TO FETCH ALL ONBOARDING COURSES
    builder.addCase(getOnboardingVideos.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(getOnboardingVideos.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.onboardingData = payload.onboarding as unknown as courseData[] || undefined
    }),
    builder.addCase(getOnboardingVideos.rejected, (state, { payload }) => {
      state.loading = false;
    });


    //============================================================== TO UPDATE ALL ONBOARDING COURSES
    builder.addCase(updateOnboardingData.pending, (state) => {
      state.updateLoading = true;
    }),
    builder.addCase(updateOnboardingData.fulfilled, (state, { payload }) => {
      state.updateLoading = false;
    }),
    builder.addCase(updateOnboardingData.rejected, (state) => {
      state.updateLoading = false;
    });
    
    //============================================================== TO FETCH ALL COURSES
    builder.addCase(getAllCourses.pending, (state, { payload }) => {
      state.loading = true;
    }),
    builder.addCase(getAllCourses.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.courses = payload as unknown as courseData[] || undefined
    }),
    builder.addCase(getAllCourses.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const { } = authSlice.actions;

// export const selectAuth = (state: RootState) => state.counter.value

export default authSlice.reducer; 