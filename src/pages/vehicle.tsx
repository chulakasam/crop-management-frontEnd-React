import {Link} from "react-router";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {deleteVehicle} from "../slice/VehicleSlice.ts";

export function Vehicle() {
    const vehicle = useSelector((state:any) => state.vehicle);
    const dispatch = useDispatch();
    const [deleteLicenseNo,setDeleteLicenseNo] = useState('');



    function handleDeleteVehicle(event:React.FormEvent){
        event.preventDefault();
        if (!deleteLicenseNo) {
            alert('Please enter the license no to delete.');
            return;
        }
        dispatch(deleteVehicle(deleteLicenseNo));
        setDeleteLicenseNo('');

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
            <button>Update Vehicle</button>






            {/*TODO ----------------function delete*/}
            <br/>

            <input type="text" placeholder="Enter Vehicle License No" value={deleteLicenseNo} onChange={(e) => setDeleteLicenseNo(e.target.value)}/>
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