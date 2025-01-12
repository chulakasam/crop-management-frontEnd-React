import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const StaffSlice = createSlice({
    name: 'staff',
    initialState: initialState,
    reducers:{
        addNewStaff:(state,action)=>{
            state.push(action.payload);
        },
        deleteStaff:(state,action)=>{
            return state.filter((staff) => staff.staffId !== action.payload);
        }
    }
})
export const {addNewStaff,deleteStaff} = StaffSlice.actions;
export default StaffSlice.reducer;
