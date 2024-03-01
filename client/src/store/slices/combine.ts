'use client';

import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
});
