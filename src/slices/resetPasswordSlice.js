import { createSlice } from "@reduxjs/toolkit";
import { resetPassword } from "../actions/userAction";

export const initialState = {
    message: null,
    errores: null,
    loading: false
};

export const resetPasswordSlice = createSlice({
    name: "resetPassword",
    initialState, 
    reducers:{
        resetError: (state) =>{
            state.errores = null;
            state.message = null;
            state.loading = false;
        }
    },

    extraReducers:{
        [resetPassword.pending] : (state)=>{
            state.errores = null;
            state.message = null;
            state.loading = true;
        },
        [resetPassword.fulfilled] : (state, {payload})=>{
            state.errores = null;
            state.message = payload;
            state.loading = false;
        },
        [resetPassword.rejected] : (state, action)=>{
            state.errores = action.payload;
            state.message = null;
            state.loading = true;
        },
    }
});

export const {resetError} = resetPasswordSlice.actions;
export const resetPasswordReducer = resetPasswordSlice.reducer;