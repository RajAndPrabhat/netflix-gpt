import { createSlice } from "@reduxjs/toolkit";

const MovieTrailerSlice=createSlice({
    name:"movieTrailer",
    initialState:{
        movieTrailer:null
    },
    reducers:{
        addMovieTrailer:(state, action)=>{
            state.movieTrailer=action.payload
        }
    }
})
export const {addMovieTrailer}=MovieTrailerSlice.actions;
export default MovieTrailerSlice.reducer;