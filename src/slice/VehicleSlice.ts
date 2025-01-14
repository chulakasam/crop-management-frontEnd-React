import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState: initialState,
    reducers:{
        addNewVehicle:(state,action)=>{
            state.push(action.payload);
        },
        deleteVehicle:(state,action)=>{
            return state.filter((vehicle) => vehicle.licenseNo !== action.payload);
        },
        updateVehicle:(state,action)=>{
            const {licenseNo,newVehicleNo,newCategory,newStatus,newFuelType,newRemark} = action.payload;
            const vehicle=state.find((vehicle) => vehicle.licenseNo === licenseNo);
            if(vehicle){
                vehicle.vehicleCode=newVehicleNo || vehicle.vehicleCode;
                vehicle.category=newCategory || vehicle.categor;
                vehicle.status=newStatus || vehicle.status;
                vehicle.fuelType=newFuelType || vehicle.fuelType;
                vehicle.remark=newRemark || vehicle.remark;

            }
        }
    }
})
export  default VehicleSlice.reducer;
export const {addNewVehicle,deleteVehicle,updateVehicle} = VehicleSlice.actions;
