import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const CropSlice = createSlice({
    name: 'crop',
    initialState: initialState,
    reducers:{
        addNewCrop:(state,action)=>{
            state.push(action.payload);
        },
    }
});
export default CropSlice.reducer;
export const {addNewCrop} = CropSlice.actions;