import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcommingMovies:null,

    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
           state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state, action)=>{
            state.movieTrailer=action.payload
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcommingMovies:(state, action)=>{
            state.upcommingMovies=action.payload
        }
    }
});
export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcommingMovies}=movieSlice.actions;
export default movieSlice.reducer;