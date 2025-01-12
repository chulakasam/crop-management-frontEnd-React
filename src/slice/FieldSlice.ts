import {createSlice} from "@reduxjs/toolkit";
const initialState = [];


const FieldSlice = createSlice({
    name: 'field',
    initialState: initialState,
    reducers:{
        addNewField:(state,action)=>{
            state.push(action.payload);
        },
        deleteField:(state,action)=>{
            return state.filter((field)=>field.fieldCode !== action.payload);
        }
    }
})
export default FieldSlice.reducer;
export const {addNewField,deleteField} = FieldSlice.actions;