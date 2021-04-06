import storee from "./store/store";
import React, { useEffect } from 'react';
import { bugAdded, bugResolved } from "./store/bugs";
const store = storee();
const App = () => {
 useEffect(() => {
  console.log(store.getState());
  store.dispatch(bugAdded("bug1"));
  
 }, [])
// store.dispatch(bugResolved(1));
  return (
    <div>
      <div> hello world!</div>
    </div>
  );
};

export default App;
