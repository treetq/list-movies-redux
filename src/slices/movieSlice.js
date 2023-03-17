import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = [...action.payload];
    },
    addMovie: (state, action) => {
      const mv = [...state.movies];
      mv.push(action.payload);
      state.movies = [...mv];
      //   state.movies = [...state.movies, action.payload];
    },
  },
});

export const { addMovies, addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export const movieReducer = movieSlice.reducer;
