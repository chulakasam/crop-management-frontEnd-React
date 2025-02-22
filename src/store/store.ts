import {configureStore} from "@reduxjs/toolkit";
import StaffSlice from "../slice/StaffSlice.ts";
import EquipmentSlice from "../slice/EquipmentSlice.ts";
import CropSlice from "../slice/CropSlice.ts";
import VehicleSlice from "../slice/VehicleSlice.ts";
import FieldSlice from "../slice/FieldSlice.ts";
import LogSlice from "../slice/LogSlice.ts";
import UserSlice from "../slice/UserSlice.ts";
import SignUpSlice from "../slice/SignUpSlice.ts";

export const store = configureStore({
    reducer: {
        staff:StaffSlice,
        equipment:EquipmentSlice,
        crop:CropSlice,
        vehicle:VehicleSlice,
        field:FieldSlice,
        log:LogSlice,
        users : UserSlice,
        signUp:SignUpSlice
    },
});
export type AppDispatch = typeof store.dispatch;