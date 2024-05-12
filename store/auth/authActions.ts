import { baseUrl } from "@/config";
import { loginType, signUpType } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";
import cogoToast from "cogo-toast";

// const baseUrl = process.env.BASE_URL

// ================================================================= SUGN UP
export const signup = createAsyncThunk(
  "signup",
  async ( values: signUpType, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const res = await axios.post(
        `${baseUrl}/register/`,
        {
          first_name: values.firstname,
          last_name:values.lastname,
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      
      if (err.response.status === 400) {
        cogoToast.success('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);


// ================================================================= LOG IN
export const login = createAsyncThunk(
  "login",
  async ( values: loginType, { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const res = await axios.post(
        `${baseUrl}/login/`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      
      if (err.response.status === 400) {
        cogoToast.success('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);
