import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSerach: false,
    movieNames: null,
    moviesResults: null,
  },
  reducers: {
    toggleGptView: (state) => {
      state.showGptSerach = !state.showGptSerach;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.moviesResults = movieResults;
    },
  },
});
export const { toggleGptView, addGptMovieResult } = GptSlice.actions;
export default GptSlice.reducer;
