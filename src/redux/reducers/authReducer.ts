import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authentificate: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { authentificate } =
  authSlice.actions;

export const getIsAuth = (state: RootState) => state.auth.isAuth;


export default authSlice.reducer;