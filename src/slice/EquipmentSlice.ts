import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const EquipmentSlice = createSlice({
    name: 'equipment',
    initialState: initialState,
    reducers:{
        addNewEquipment:(state,action)=>{
            state.push(action.payload);
        },
    }
})
export default EquipmentSlice.reducer;
export const {addNewEquipment} = EquipmentSlice.actions;
