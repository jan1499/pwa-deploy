import { RootState } from "../../redux/store/store";
import { createSelector } from '@reduxjs/toolkit';

export const authState = (state: RootState) => state.authReducer

export const authSelector = createSelector(
  authState,
  state => state
)
