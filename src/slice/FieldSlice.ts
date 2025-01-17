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
        },
        updateField:(state,action)=>{
            const {fieldCode,newFieldName,newFieldLocation,newFieldSize,newFieldImage_1,newFieldImage_2} = action.payload;
            const field=state.find((field) => field.fieldCode === fieldCode);
            if(field){
                field.fieldName=newFieldName || field.fieldName;
                field.location=newFieldLocation || field.location;
                field.fieldSize=newFieldSize || field.fieldSize;
                field.fieldImg_01=newFieldImage_1 || field.fieldImg_01;
                field.fieldImg_02=newFieldImage_2 || field.fieldImg_02;

            }
        }
    }
})
export default FieldSlice.reducer;
export const {addNewField,deleteField,updateField} = FieldSlice.actions;