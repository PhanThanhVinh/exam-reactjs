import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  userList: [],
};

const UserListReducer = createReducer(initialState, {
  ADD_USER: (state, action) => {
    const newValues = {
      id: uuidv4(),
      ...action.payload,
    };

    return {
      ...state,
      userList: [newValues, ...state.userList],
    };
  },
  EDIT_USER: (state, action) => {
    const { id, values } = action.payload;
    const newUserList = [...state.userList];
    const index = state.userList.findIndex((item) => item.id === id);
    newUserList.splice(index, 1, values);

    return {
      ...state,
      userList: newUserList,
    };
  },
  REMOVE_USER: (state, action) => {
    const { id } = action.payload;
    const newUserList = [...state.userList];
    const index = state.userList.findIndex((item) => item.id === id);
    newUserList.splice(index, 1);

    return {
      ...state,
      userList: newUserList,
    };
  },
});

export default UserListReducer;
