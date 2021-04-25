import { createAction, createReducer } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

// ACTIONS FUNCTION DECLARATIONS
//
//
export const bugAdded = createAction("bugs/bugAdded");
export const bugResolved = createAction("bugs/bugResolved");
export const addUserToBug = createAction("bugs/addUserToBug");
export const bugsReceived = createAction("bugs/bugsReceived");
// for Handling Loading
export const bugsRequested = createAction("bugs/bugsRequested");
export const bugsRequestFailed = createAction("bugs/bugsRequestFailed");

// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     // same Id so we write id : id
//     id,
//   },
// });

// REDUCER DECLARATION
//
//
let id = 0;

export const bugsReducer = createReducer(
  { list: [], isLoading: false, lastFetch: null },
  {
    [bugAdded.type]: (bugs, action) => {
      // bugs.list.push({
      //   id: ++id,
      //   description: action.payload,
      //   resolved: false,
      // });
      bugs.list.push(action.payload);
    },
    [addUserToBug.type]: (bugs, action) => {
      const index = bugs.list.findIndex((b) => b.id == action.payload.id);
      bugs.list[index].userId = action.payload.userId;
    },
    [bugResolved.type]: (bugs, action) => {
      const index = bugs.list.findIndex((b) => b.id == action.payload.id);
    },
    [bugsReceived.type]: (bugs, action) => {
      bugs.list = action.payload;
      bugs.isLoading = false;
      bugs.lastFetch = Date.now();
    },
    [bugsRequested.type]: (bugs, action) => {
      bugs.isLoading = true;
    },
    [bugsRequestFailed.type]: (bugs, action) => {
      bugs.isLoading = false;
    },
  }
);

// load data #27
export const loadBugs = () => (dispatch, getState) => {
  const diff = moment().diff(
    moment(getState().enteties.bugs.lastFetch),
    "minutes"
  );

  if (diff < 10) return;
  dispatch(
    apiCallBegan({
      url: "/bugs",
      onStart: bugsRequested.type,
      onSucess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

// #28
export const addbug = (data) =>
  apiCallBegan({
    url: "/bugs",
    method: "post",
    data,
    onSucess: bugAdded.type,
  });

// #28
export const resolvebug = (id) =>
  apiCallBegan({
    url: "/bugs/" + id,
    method: "patch",
    data: { resolved: true },
    onSucess: bugResolved.type,
  });
// #29
export const assignbugtouser = (userid, bugid) =>
  apiCallBegan({
    url: "/bugs/" + bugid,
    method: "patch",
    data: { userId: userid },
    onSucess: addUserToBug.type,
  });

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugResolved.type:
//       return state.map((b) =>
//         b.id !== action.payload.id ? b : { ...b, resolved: true }
//       );
//     case bugAdded.type:
//       return [...state, { id: ++id, ...action.payload }];
//     default:
//       return state;
//   }
// }
