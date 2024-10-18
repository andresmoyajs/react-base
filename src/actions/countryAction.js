import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
    "country/getCountries",
    async(ThunkApi, {rejectWithValue}) =>{
        try {
            const {data} = await axios.get(`/api/v1/country`);
            return data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
)