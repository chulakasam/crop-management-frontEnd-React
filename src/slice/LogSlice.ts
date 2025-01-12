import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const LogSlice = createSlice({
    name: 'log',
    initialState: initialState,
    reducers:{
        addNewLog:(state,action)=>{
            state.push(action.payload);
        },
        deleteLog:(state,action)=>{
            return state.filter((log) => log.logCode !== action.payload);
        }
    }
})
export default LogSlice.reducer;
export const {addNewLog,deleteLog} = LogSlice.actions;
