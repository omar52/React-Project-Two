import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/Counter";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
