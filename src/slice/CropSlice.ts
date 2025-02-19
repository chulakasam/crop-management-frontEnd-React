import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Field from "../model/Field.ts";
import axios from "axios";
import {getAllVehicle, removeVehicle, saveVehicle, updatingVehicle} from "./VehicleSlice.ts";
import Crop from "../model/Crop.ts";
const initialState:Crop[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/crop",
});

export const saveCrop=createAsyncThunk(
    "crop/add",
    async (crop:Crop,{rejectWithValue})=>{
        try{
            const response = await api.post("/add",crop);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const removeCrop=createAsyncThunk(
    "crop/delete",
    async (cropId:string,{rejectWithValue})=>{
        try {
            const response=await api.delete(`/delete/${cropId}`);
            return response.data
        }catch (error:any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const getAllCrop=createAsyncThunk(
    "crop/view",
    async ()=>{
        try {
            const response = await api.get("/view");
            return response.data;
        }catch (error:any){
            return error.response?.data || error.message;
        }

    }
)
export const updatingCrop = createAsyncThunk(
    "crop/update",
    async (crop:Crop, { rejectWithValue }) => {
        try {
            const response = await api.put(`/update/${crop.cropId}`, crop);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);



const CropSlice = createSlice({
    name: 'crop',
    initialState: initialState,
    reducers:{
        addNewCrop:(state,action)=>{
            state.push(action.payload);
        },
        deleteCrop:(state,action)=>{
            return state.filter((crop)=>crop.cropId !== action.payload);
        },
        updateCrop:(state,action)=>{

        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(saveCrop.fulfilled, (state, action)=>{
                state.push(action.payload);
            })
            .addCase(removeCrop.fulfilled, (state, action)=>{
                return state.filter((crop) => crop.cropId !== action.payload);
            })
            .addCase(getAllCrop.fulfilled, (state, action)=>{
                return action.payload;
            })
            .addCase(updatingCrop.fulfilled, (state, action)=>{
                const index = state.findIndex(
                    (crop) => crop.cropId === action.payload.cropId
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })

    }
})
export default CropSlice.reducer;
export const {addNewCrop,updateCrop,deleteCrop} = CropSlice.actions;