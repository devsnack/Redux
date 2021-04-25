const logger = (store) => (next) => (action) => {
  // {getstate, dispatch}
  console.log(store);
  //    current action call
  console.log(action);
  //  NEXT TO call action or reducer at the end
  console.log(next);
  next(action);
};

export default logger;
