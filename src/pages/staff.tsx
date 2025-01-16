import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent, useState} from "react";
import * as React from "react";
import {deleteStaff, updateStaff} from "../slice/StaffSlice.ts";



export function Staff(){
    const staff = useSelector((state:any) => state.staff);
    const dispatch = useDispatch();
    const [deleteStaffId, setDeleteStaffId] = useState('');

    const [searchStaffId,setSearchStaffId] = useState('');
    const [foundStaff,setFoundStaff] = useState<any | null>(null);

    const [newStaffname, setNewStaffName] = useState('');
    const [newPosition, setNewPosition] = useState('');
    const [newGender, setNewGender] = useState('');
    const [newJoined_date, setNewJoined_date] = useState('');
    const [newdob, setNewdob] = useState('');
    const [newContact_no, setNewContact_no] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newVehicleId, setNewVehicleId] = useState('');







    function handleDeleteStaff(event:React.FormEvent){
        event.preventDefault();
        if (!deleteStaffId) {
            alert('Please enter the staff ID to delete.');
            return;
        }
        dispatch(deleteStaff(deleteStaffId));
        setDeleteStaffId('');
    }

    function handleSearchStaff(event:React.FormEvent){
        event.preventDefault();
        const found = staff.find((s: any) => s.staffId === searchStaffId);
        if (found) {
            setFoundStaff(found);
            setNewStaffName(found.name);
            setNewPosition(found.position);
            setNewGender(found.gender);
            setNewJoined_date(found.joinedDate);
            setNewdob(found.dob);
            setNewContact_no(found.contactNo);
            setNewEmail(found.email);
            setNewAddress(found.address);
            setNewVehicleId(found.vehicleId);
        } else {
            alert('staff not found.');
            setFoundStaff(null);
        }
    }
    function handleUpdateStaff(event:React.FormEvent){
        event.preventDefault();
        if(foundStaff){
            dispatch(updateStaff({staffId:foundStaff.staffId,newStaffname,newPosition,newGender,newJoined_date,newdob,newContact_no,newEmail,newAddress,newVehicleId}));

            alert("vehicle updated successfully.");
            setNewStaffName('');
            setNewPosition('');
            setNewGender('');
            setNewJoined_date('');
            setNewdob('');
            setNewContact_no('');
            setNewEmail('');
            setNewAddress('');
            setNewVehicleId('');
        }else{
            alert("staff not found.");
            setFoundStaff(null);
        }
    }



    return (
        <>

            <br/>
            <h2 className="text-3xl font-bold text-gray-800">Staff Management</h2>
                <br/>

                <Link to="/staff/addStaff">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add New Staff</button>
            </Link>


            {/*TODO ----------------function update*/}
            <input type="text" placeholder="Staff ID to search" value={searchStaffId} onChange={(e) => setSearchStaffId(e.target.value)} className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleSearchStaff} className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Search Staff</button>

            {foundStaff && (
                <div>
                    <h3>Update Staff:</h3>
                    <p>
                        <strong>Current Staff Name:</strong> {foundStaff.name}
                        <br/>
                        <strong>Current Position:</strong> {foundStaff.position}
                        <br/>
                        <strong>Current Gender:</strong> {foundStaff.gender}
                        <br/>
                        <strong>Current Joined Date:</strong> {foundStaff.joinedDate}
                        <br/>
                        <strong>Current Date of birth:</strong> {foundStaff.dob}
                        <br/>
                        <strong>Current Contact No:</strong> {foundStaff.contactNo}
                        <br/>
                        <strong>Current Email:</strong> {foundStaff.email}
                        <br/>
                        <strong>Current Address:</strong> {foundStaff.address}
                        <br/>
                        <strong>Current Vehicle ID:</strong> {foundStaff.vehicleId}
                        <br/>
                    </p>
                    <input type="text"  value={newStaffname} onChange={(e) => setNewStaffName(e.target.value)}/>
                    <input type="text"  value={newPosition} onChange={(e) => setNewPosition(e.target.value)}/>
                    <input type="text"  value={newGender} onChange={(e) => setNewGender(e.target.value)}/>
                    <input type="text"  value={newJoined_date} onChange={(e) => setNewJoined_date(e.target.value)}/>
                    <input type="text"  value={newdob} onChange={(e) => setNewdob(e.target.value)}/>
                    <input type="text"  value={newContact_no} onChange={(e) => setNewContact_no(e.target.value)}/>
                    <input type="text"  value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
                    <input type="text"  value={newAddress} onChange={(e) => setNewAddress(e.target.value)}/>
                    <input type="text"  value={newVehicleId} onChange={(e) => setNewVehicleId(e.target.value)}/>
                    <button onClick={handleUpdateStaff}>Update staff</button>
                </div>
            )}

            {/*TODO ----------------function delete*/}

            <input type="text" placeholder='enter the staff ID' value={deleteStaffId}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setDeleteStaffId(e.target.value)} className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteStaff} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete Staff</button>

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