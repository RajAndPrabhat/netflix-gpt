import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSerach:false
    },
    reducers:{
        toggleGptView:(state)=>{
            state.showGptSerach=!state.showGptSerach;
        },
    },
});
export const {toggleGptView}=GptSlice.actions;
export default GptSlice.reducer;