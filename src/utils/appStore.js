import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; 
import movieReducer from "./movieSlice";
import movieTrailerReducer from "./MovieTrailerSlice";

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        movieTrailer:movieTrailerReducer,
    }
});

export default appStore;