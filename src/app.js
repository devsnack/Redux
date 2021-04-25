import storee from "./store/store";
import React, { useEffect } from "react";
import {
  bugAdded,
  bugResolved,
  addUserToBug,
  loadBugs,
  addbug,
  resolvebug,
  assignbugtouser,
} from "./store/bugs";
import { projectAdded, projectResolved } from "./store/projects";
import { userAdded, userRemoved } from "./store/user";
import * as actions from "./store/api";
const store = storee();
const App = () => {
  useEffect(() => {
    // console.log(store.getState());
    // store.dispatch(bugAdded("bug1"));
    store.dispatch(loadBugs());
    // setTimeout(() => {
    //   store.dispatch(loadBugs());
    // }, 2000);
    store.dispatch(assignbugtouser(4, 1));
    // store.dispatch(projectAdded("project1"));
    // store.dispatch(userAdded({ name: "abdledjalil" }));
    // store.dispatch(addUserToBug({ id: 1, userId: 1 }));
  }, []);
  // store.dispatch(bugResolved(1));
  return (
    <div>
      <div> hello world!</div>
    </div>
  );
};

export default App;
