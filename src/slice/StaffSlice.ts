import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const StaffSlice = createSlice({
    name: 'staff',
    initialState: initialState,
    reducers:{
        addNewStaff:(state,action)=>{
            state.push(action.payload);
        },
    }
})
export const {addNewStaff} = StaffSlice.actions;
export default StaffSlice.reducer;
