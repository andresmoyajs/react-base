import { createAsyncThunk } from "@reduxjs/toolkit";
import { delayedTimeout } from "../utilities/delayedTimeout";
import axios from "../utilities/axios";

export const getCategories = createAsyncThunk(
    "category/getCategories",
    async(ThinkApi, {rejectWithValue}) =>{
        try {
            await delayedTimeout(1000);
            return await axios.get(`/api/v1/category/list`);
        } catch (error) {
            return rejectWithValue(`Errores: ${error.message}`)
        }
    }
)
