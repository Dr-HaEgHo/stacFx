import { baseUrl } from "@/config";
import { UserDetails, loginType, signUpType } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { updateDetails } from "@/app/dashboard/profile/page";

// const baseUrl = process.env.BASE_URL

// ================================================================= SIGN UP
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
      setTimeout(() => {
        if(!res.status){
          alert('time don reach boss.')
        }
      }, 1000) 
      if (res.status === 200 || res.status === 201) {
        // // cogoToast.success('')
        
        

        console.log('tre response', res)
        return res;
      }
    } catch (err: any) {
      
      if (err.response.status === 400) {
        // cogoToast.success('Something went Wrong')
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
        // cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      
      if (err.response.status === 400) {
        // cogoToast.success('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);


// ================================================================= GET PROFILE DATA
export const getProfileData = createAsyncThunk(
  "getProfileData",
  async ( arg, { rejectWithValue, getState, dispatch }) => {
    const { auth } = getState() as RootState;
    try {
      const res = await axios.get(`${baseUrl}/me/`, {
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth.userToken}`
        }
      });
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        // cogoToast.success('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }
      // return rejectWithValue(err);
    }
  }
);


// ================================================================= UPDATE PROFILE DATA


export const updateProfileData = createAsyncThunk(
  "updateProfileData",
  async ( values: updateDetails, { rejectWithValue, getState, dispatch }
  ) => {
    const { auth } = getState() as RootState
    try {
      const res = await axios.patch(
        `${baseUrl}/update-profile/`,
        {
          first_name: values.firstname,
          last_name: values.lastname,
          phone_number: "0" + values.phoneNumber.toString(),
          photo : values.photo
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${auth.userToken}`
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        // cogoToast.success('Sign up successful')
        return res;
      }
    } catch (err: any) {
      
      if (err.response.status === 400) {
        // cogoToast.success('Something went Wrong')
        return rejectWithValue(err.response);
      } else {
        return rejectWithValue(err.response);
      }

      // return rejectWithValue(err);
    }
  }
);