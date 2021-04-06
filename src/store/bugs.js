import { createAction,createReducer } from "@reduxjs/toolkit";



// ACTIONS FUNCTION DECLARATIONS
//
//
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");

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


const reducer = createReducer([],{
  [bugAdded.type] : (bugs,action)=>{
    bugs.push({
      id:++id,
      description : action.payload,
      resolved :false
    })
  }
})
export default reducer;
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
