import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const LogSlice = createSlice({
    name: 'log',
    initialState: initialState,
    reducers:{
        addNewLog:(state,action)=>{
            state.push(action.payload);
        },
    }
})
export default LogSlice.reducer;
export const {addNewLog} = LogSlice.actions;
