import {configureStore} from "@reduxjs/toolkit";
//import CropSlice from "../slice/CropSlice.ts";
import StaffSlice from "../slice/StaffSlice.ts";
// import FieldSlice from "../slice/FieldSlice.ts";
// import LogSlice from "../slice/LogSlice.ts";
// import VehicleSlice from "../slice/VehicleSlice.ts";
import EquipmentSlice from "../slice/EquipmentSlice.ts";
import CropSlice from "../slice/CropSlice.ts";

export const store = configureStore({
    reducer: {
        staff:StaffSlice,
        equipment:EquipmentSlice,
        crop:CropSlice
    },
});