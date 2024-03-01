'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUserInitialState } from './@types';
import { RootState } from '@/store';

const initialState: IUserInitialState = {
  user: null,
  isLodaing: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser(state) {
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {},
});

export const getIsUserLoading = (state: RootState) => state.user.isLodaing;
export const getUserError = (state: RootState) => state.user.error;
export const getUser = (state: RootState) => state.user.user;

export const { removeUser } = userSlice.actions;
