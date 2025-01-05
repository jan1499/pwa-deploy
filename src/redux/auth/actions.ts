import { createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '../../connections/fetch_wrapper';

export const login = createAsyncThunk('login', async ({ data }: { data: any }, { rejectWithValue }) => {
  try {
    let params = {
      isLogin: true,
      token: btoa(data.email + ":" + data.password),
      type: "Basic"
    }
    const response = await post('/accounts/login/', data, params);
    if (response.code == 200) {
      return response;
    } else {
      return rejectWithValue(response)
    }
  } catch (err) {
    return rejectWithValue(err)
  }
});

export const register = createAsyncThunk(
  'register',
  async ({ data }: { data: { 
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    profile_picture: string;
    password: string;
    role: number;
  } }, { rejectWithValue }) => {
    try {
      const response = await post('/accounts/register/', data);
      if (response.code === 200) {
        return response;
      } else {
        return rejectWithValue(response);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);



//logout
export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    const response = await post(`/accounts/logout`, {});
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

// Forgot password   ==========================================================================================
export const forgotPassword = createAsyncThunk('forgotPassword', async ({ data }: { data: { email: string } }, { rejectWithValue }) => {
  try {
    const response = await post('admin/auth/password/forgot', data);
    if (response.code == 200) {
      return response;
    } else {
      return rejectWithValue(response)
    }
  } catch (err) {
    return rejectWithValue(err)
  }
});


// Reset password   ==========================================================================================
export const resetPassword = createAsyncThunk('resetPassword', async ({ data }: { data: { token: string, password: string, password_confirmation: string } }, { rejectWithValue }) => {
  try {
    const response = await post('admin/auth/password/reset', data);
    if (response.code == 200) {
      return response;
    } else {
      return rejectWithValue(response)
    }
  } catch (err) {
    return rejectWithValue(err)
  }
});

