import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent, useState} from "react";
import * as React from "react";
import {deleteStaff} from "../slice/StaffSlice.ts";


export function Staff(){
    const staff = useSelector((state:any) => state.staff);
    const dispatch = useDispatch();

    const [deleteStaffId, setDeleteStaffId] = useState('');

    function handleDeleteStaff(event:React.FormEvent){
        event.preventDefault();
        if (!deleteStaffId) {
            alert('Please enter the staff ID to delete.');
            return;
        }
        dispatch(deleteStaff(deleteStaffId));
        setDeleteStaffId('');
    }




    return (
        <>

            <br/>
            Staff Management
            <br/>

            <Link to="/staff/addStaff">
                <button>Add New Staff</button>
            </Link>


            {/*TODO ----------------function update*/}
            <button>Update Staff</button>

            {/*TODO ----------------function delete*/}

            <input type="text" placeholder='enter the staff ID' value={deleteStaffId} onChange={(e:ChangeEvent<HTMLInputElement>) => setDeleteStaffId(e.target.value)}/>
            <button onClick={handleDeleteStaff}>Delete Staff</button>

            <br/>
            <ul>
                {staff.map((stafffDetails: any, index: number) => (
                    <li key={index}>
                        {stafffDetails.staffId}, {stafffDetails.name},{stafffDetails.position},{stafffDetails.gender},{stafffDetails.joinedDate},{stafffDetails.dob},{stafffDetails.email},{stafffDetails.contactNo},{stafffDetails.address},{stafffDetails.vehicleId}
                    </li>
                ))}
            </ul>


        </>
    )
}