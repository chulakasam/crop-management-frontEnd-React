import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Staff from "../model/Staff.ts";




const initialState:Staff[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/staff",
});



export const saveStaff = createAsyncThunk(
    "staff/add",
    async (staff:Staff, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", staff);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const removeStaff=createAsyncThunk(
    "staff/delete",
    async (staffId:string,{rejectWithValue})=>{
        try {
            const response=await api.delete(`/delete/${staffId}`);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const updatingStaff = createAsyncThunk(
    "staff/update",
    async (staff:Staff, { rejectWithValue }) => {
        try {
            const response = await api.put(`/update/${staff.staffId}`, staff);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getAllStaff=createAsyncThunk(
    "staff/view",
    async ()=>{
        try {
            const response = await api.get("/view");
            return response.data;
        }catch (error:any){
            return error.response?.data || error.message;
        }

    }
)


















































const StaffSlice = createSlice({
    name: 'staff',
    initialState: initialState,
    reducers: {
        addNewStaff: (state, action) => {
            state.push(action.payload);
        },
        deleteStaff: (state, action) => {
            return state.filter((staff) => staff.staffId !== action.payload);
        },
        updateStaff: (state, action) => {}

    },
    extraReducers: (builder) => {
        builder
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(removeStaff.fulfilled, (state, action) => {
                return state.filter((staff) => staff.staffId !== action.payload.staffId);
            })
            .addCase(getAllStaff.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(updatingStaff.fulfilled, (state, action) => {
                const index = state.findIndex(
                    (staff) => staff.staffId === action.payload.staffId
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    }
});


export const {addNewStaff,deleteStaff,updateStaff} = StaffSlice.actions;
export default StaffSlice.reducer;
