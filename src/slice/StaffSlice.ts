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
        },updateStaff:(state,action)=>{
            const {staffId,newStaffname,newPosition,newGender,newJoined_date,newdob,newContact_no,newEmail,newAddress,newVehicleId} = action.payload;
            const staff=state.find((staff) => staff.staffId === staffId);
            if(staff){
                staff.name=newStaffname || staff.name;
                staff.position=newPosition || staff.position;
                staff.gender=newGender || staff.gender;
                staff.joinedDate=newJoined_date || staff.joinedDate;
                staff.dob=newdob || staff.dob;
                staff.contactNo=newContact_no || staff.contactNo;
                staff.email=newEmail || staff.email;
                staff.address=newAddress || staff.address;
                staff.vehicleId=newVehicleId || staff.vehicleId;

            }
        }
    }
})
export const {addNewStaff,deleteStaff,updateStaff} = StaffSlice.actions;
export default StaffSlice.reducer;
