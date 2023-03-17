import { configureStore } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
import { movieReducer } from "../slices/movieSlice";

export const store = configureStore({
  reducer: movieReducer,
});
