import {configureStore} from "@reduxjs/toolkit";
import StaffSlice from "../slice/StaffSlice.ts";
import EquipmentSlice from "../slice/EquipmentSlice.ts";
import CropSlice from "../slice/CropSlice.ts";
import VehicleSlice from "../slice/VehicleSlice.ts";

export const store = configureStore({
    reducer: {
        staff:StaffSlice,
        equipment:EquipmentSlice,
        crop:CropSlice,
        vehicle:VehicleSlice,
    },
});