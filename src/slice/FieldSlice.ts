import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Field from "../model/Field.ts";
import axios from "axios";
const initialState:Field[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/field",
});

export const saveField=createAsyncThunk(
    "field/add",
    async (field:Field,{rejectWithValue})=>{
        try{
            const response = await api.post("/add",field);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)






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