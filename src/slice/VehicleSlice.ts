import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Vehicle from "../model/Vehicle.ts";
const initialState:Vehicle[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/vehicle",
});



export const saveVehicle = createAsyncThunk(
    "vehicle/add",
    async (vehicle: Vehicle, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", vehicle);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const removeVehicle=createAsyncThunk(
    "vehicle/delete",
    async (LicenseNo:string,{rejectWithValue})=>{
        try {
            const response=await api.delete(`/delete/${LicenseNo}`);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const updatingVehicle = createAsyncThunk(
    "vehicle/update",
    async (vehicle: Vehicle, { rejectWithValue }) => {
        try {
            const response = await api.put(`/update/${vehicle.LicenseNo}`, vehicle);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getAllVehicle=createAsyncThunk(
    "vehicle/view",
    async ()=>{
        try {
            const response = await api.get("/view");
            return response.data;
        }catch (error:any){
            return error.response?.data || error.message;
        }

    }
)

const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState: initialState,
    reducers:{
        addNewVehicle:(state,action)=>{
            state.push(action.payload);
        },
        deleteVehicle:(state,action)=>{
            return state.filter((vehicle) => vehicle.licenseNo !== action.payload);
        },
        updateVehicle:(state,action)=>{

        }
    },

    extraReducers:(builder)=>{
        builder
            .addCase(saveVehicle.fulfilled, (state, action)=>{
                state.push(action.payload);
            })
            .addCase(removeVehicle.fulfilled, (state, action)=>{
                return state.filter((vehicle) => vehicle.LicenseNo !== action.payload);
            })
            .addCase(getAllVehicle.fulfilled, (state, action)=>{
                return action.payload;
            })
            .addCase(updatingVehicle.fulfilled, (state, action)=>{
                const index = state.findIndex(
                    (vehicle) => vehicle.LicenseNo === action.payload.LicenseNo
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })

    }
})
export  default VehicleSlice.reducer;
export const {addNewVehicle,deleteVehicle,updateVehicle} = VehicleSlice.actions;