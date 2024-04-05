import { createSlice } from "@reduxjs/toolkit";
const loginStatusSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    loginStatus: (state) => {
      state = true;
      return state;
    },
    logoutStatus: (state) => {
      state = false;
      return state;
    },
  },
});

export default loginStatusSlice;
export const loginStatusAction = loginStatusSlice.actions;
