import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import MonitoringLog from "../model/Log.ts";



const initialState:MonitoringLog[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/log",
});



export const saveLog = createAsyncThunk(
    "log/add",
    async (log: MonitoringLog, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", log);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const removeLog=createAsyncThunk(
    "log/delete",
    async (LogCode:string,{rejectWithValue})=>{
        try {
            const response=await api.delete(`/delete/${LogCode}`);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const updatingLog = createAsyncThunk(
    "log/update",
    async (log:MonitoringLog, { rejectWithValue }) => {
        try {
            const response = await api.put(`/update/${log.LogCode}`, log);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getAllLogs=createAsyncThunk(
    "log/view",
    async ()=>{
        try {
            const response = await api.get("/view");
            return response.data;
        }catch (error:any){
            return error.response?.data || error.message;
        }

    }
)


















































const LogSlice = createSlice({
    name: 'log',
    initialState: initialState,
    reducers: {
        addNewLog: (state, action) => {
            state.push(action.payload);
        },
        deleteLog: (state, action) => {
            return state.filter((log) => log.LogCode !== action.payload);
        },
        updateLog: (state, action) => {
            const { LogCode, logData } = action.payload;
            const log = state.find((log) => log.LogCode === LogCode);
            if (log) {
                // Update the log fields with the new data
                Object.assign(log, logData);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveLog.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(removeLog.fulfilled, (state, action) => {
                return state.filter((log) => log.LogCode !== action.payload.LogCode);
            })
            .addCase(getAllLogs.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(updatingLog.fulfilled, (state, action) => {
                const index = state.findIndex(
                    (log) => log.LogCode === action.payload.LogCode
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    }
});

export const { addNewLog, deleteLog, updateLog } = LogSlice.actions;

export default LogSlice.reducer;
