import {Link} from "react-router";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {deleteVehicle, updateVehicle} from "../slice/VehicleSlice.ts";

export function Vehicle() {
    const vehicle = useSelector((state:any) => state.vehicle);
    const dispatch = useDispatch();
    const [deleteLicenseNo,setDeleteLicenseNo] = useState('');


    const [searchLicenseNo, setSearchLicenseNo] = useState('');
    const [foundVehicle, setFoundVehicle] = useState<any | null>(null);

    const [newVehicleCode, setNewVehicleCode] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newFuelType, setNewFuelType] = useState('');
    const [newRemark, setNewRemark] = useState('');




    function handleDeleteVehicle(event:React.FormEvent){
        event.preventDefault();
        if (!deleteLicenseNo) {
            alert('Please enter the license no to delete.');
            return;
        }
        dispatch(deleteVehicle(deleteLicenseNo));
        setDeleteLicenseNo('');

    }

    function handleSearchVehicle(event:React.FormEvent){
        event.preventDefault();
        const found = vehicle.find((v: any) => v.licenseNo === searchLicenseNo);
        if (found) {
            setFoundVehicle(found);
            setNewVehicleCode(found.vehicleCode);
            setNewCategory(found.category);
            setNewStatus(found.status);
            setNewFuelType(found.fuelType);
            setNewRemark(found.remark);

        } else {
            alert('vehicle not found.');
            setFoundVehicle(null);
        }
    }

    function handleUpdateVehicle(event:React.FormEvent){
        event.preventDefault();
        if(foundVehicle){
            dispatch(updateVehicle({licenseNo:foundVehicle.licenseNo,newVehicleCode,newCategory,newStatus,newFuelType,newRemark}));

            alert("vehicle updated successfully.");
            setNewVehicleCode('');
            setNewCategory('');
            setNewStatus('');
            setNewFuelType('');
            setNewRemark('');
        }else{
            alert("vehicle not found.");
            setFoundVehicle(null);
        }
    }


    return (
        <>
            <br/>

            Vehicle Management
            <br/>
            <Link to="/vehicle/addVehicle">
                <button>Add New Vehicle</button>
            </Link>
            {/*TODO ----------------function update*/}
            <input type="text" placeholder="License No to search" value={searchLicenseNo}
                   onChange={(e) => setSearchLicenseNo(e.target.value)}/>

            <button onClick={handleSearchVehicle}>Search Vehicle</button>

            {foundVehicle && (
                <div>
                    <h3>Update Vehicle:</h3>
                    <p>
                        <strong>Current Vehicle No:</strong> {foundVehicle.vehicleCode}
                        <br/>
                        <strong>Current Category:</strong> {foundVehicle.category}
                        <br/>
                        <strong>Current Status:</strong> {foundVehicle.status}
                        <br/>
                        <strong>Current Fuel type:</strong> {foundVehicle.fuelType}
                        <br/>
                        <strong>Current Remark:</strong> {foundVehicle.remark}
                        <br/>
                    </p>
                    <input type="text" placeholder="New vehicle code" value={newVehicleCode} onChange={(e) => setNewVehicleCode(e.target.value)}/>
                    <input type="text" placeholder="New category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                    <input type="text" placeholder="New status" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}/>
                    <input type="text" placeholder="New fuel type" value={newFuelType} onChange={(e) => setNewFuelType(e.target.value)}/>
                    <input type="text" placeholder="New remark" value={newRemark} onChange={(e) => setNewRemark(e.target.value)}/>
                    <button onClick={handleUpdateVehicle}>Update vehicle</button>
                </div>
            )}



            {/*TODO ----------------function delete*/}
            <br/>

            <input type="text" placeholder="Enter Vehicle License No" value={deleteLicenseNo}
                   onChange={(e) => setDeleteLicenseNo(e.target.value)}/>
            <button onClick={handleDeleteVehicle}>Delete Vehicle</button>


            <br/>


            <ul>
                {vehicle.map((vehicleDetails: any, index: number) => (
                    <li key={index}>
                        {vehicleDetails.licenseNo}, {vehicleDetails.vehicleCode},{vehicleDetails.category},{vehicleDetails.status},{vehicleDetails.fuelType},{vehicleDetails.remark}
                    </li>
                ))}
            </ul>
        </>
    )
}