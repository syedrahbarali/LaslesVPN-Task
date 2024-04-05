import { configureStore } from "@reduxjs/toolkit";
import loginStatusSlice from "./slice/loginStatusSlice";
const store = configureStore({
  reducer: {
    login: loginStatusSlice.reducer,
  },
});

export default store;
