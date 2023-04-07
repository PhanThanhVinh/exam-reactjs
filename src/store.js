import { configureStore } from "@reduxjs/toolkit";
import UserListReducer from "./redux/reduce";
export const store = configureStore({
  reducer: {
    userList: UserListReducer,
  },
});
