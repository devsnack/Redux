import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

const store = () => {
  const store = configureStore({ reducer });
  return store;
};

export default store;
