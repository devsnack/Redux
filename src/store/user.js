import { createReducer, createAction } from "@reduxjs/toolkit";

// Actions
export const userAdded = createAction("userAdded");
export const userRemoved = createAction("userRemoved");

let id = 0;

// recuder
const usersReducer = createReducer([], {
  [userAdded.type]: (users, action) => {
    users.push({
      id: ++id,
      name: action.payload.name,
    });
  },
});

export default usersReducer;
