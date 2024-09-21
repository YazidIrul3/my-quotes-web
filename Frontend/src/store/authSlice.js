import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogin = false;
    },

    logout: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
