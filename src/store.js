import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
export const store = createStore();
