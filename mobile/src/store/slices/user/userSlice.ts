'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUserInitialState } from './@types';
import { RootState } from '@/store';
import { IRegisterData, ILoginData } from '@/features/auth';
import { authService } from '@/api/auth';
import { errorCatch } from '@/api';

const initialState: IUserInitialState = {
  user: null,
  isLodaing: false,
  error: '',
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (data: IRegisterData) => {
    try {
      const response = await authService.register(data);
      return response;
    } catch (error) {
      throw new Error(errorCatch(error));
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data: ILoginData) => {
    try {
      const response = await authService.login(data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(errorCatch(error));
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser(state) {
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLodaing = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLodaing = false;
      state.error = '';
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLodaing = false;
      state.error = action.error.message as string;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLodaing = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLodaing = false;
      state.error = '';
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLodaing = false;
      state.error = action.error.message as string;
    });
  },
});

export const getIsUserLoading = (state: RootState) => state.user.isLodaing;
export const getUserError = (state: RootState) => state.user.error;
export const getUser = (state: RootState) => state.user.user;

export const { removeUser } = userSlice.actions;
