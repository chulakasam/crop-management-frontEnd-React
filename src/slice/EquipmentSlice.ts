import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import MonitoringLog from "../model/Log.ts";
import Equipment from "../model/Equipment.ts";



const initialState:Equipment[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/equipment",
});



export const saveEquipment = createAsyncThunk(
    "equipment/add",
    async (equipment:Equipment, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", equipment);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const removeEquipment=createAsyncThunk(
    "equipment/delete",
    async (equipmentId:string,{rejectWithValue})=>{
        try {
            const response=await api.delete(`/delete/${equipmentId}`);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const updatingEquipment = createAsyncThunk(
    "equipment/update",
    async (equipment:Equipment, { rejectWithValue }) => {
        try {
            const response = await api.put(`/update/${equipment.equipmentId}`, equipment);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getAllEquipment=createAsyncThunk(
    "equipment/view",
    async ()=>{
        try {
            const response = await api.get("/view");
            return response.data;
        }catch (error:any){
            return error.response?.data || error.message;
        }

    }
)


















































const EquipmentSlice = createSlice({
    name: 'equipment',
    initialState: initialState,
    reducers: {
        addNewEquipment: (state, action) => {
            state.push(action.payload);
        },
        deleteEquipment: (state, action) => {
            return state.filter((equipment) => equipment.equipmentId !== action.payload);
        },
        updateEquipment: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveEquipment.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(removeEquipment.fulfilled, (state, action) => {
                return state.filter((equipment) => equipment.equipmentId !== action.payload.equipmentId);

            })
            .addCase(getAllEquipment.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(updatingEquipment.fulfilled, (state, action) => {
                const index = state.findIndex(
                    (equipment) => equipment.equipmentId === action.payload.equipmentId
                );

                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    }
});

export const {  addNewEquipment,deleteEquipment } = EquipmentSlice.actions;

export default EquipmentSlice.reducer;
