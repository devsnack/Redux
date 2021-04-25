import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import logger from "./middelwear/logger";
import { api } from "./middelwear/api";

const store = () => {
  const store = configureStore({
    reducer: Reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
  return store;
};

export default store;
