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

            <h2 className="text-3xl font-bold text-gray-800"> <i className="fas fa-truck text-green-500 text-3xl"></i> Vehicle
                Management</h2>
            <br/>
            <Link to="/vehicle/addVehicle">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add
                    New Vehicle
                </button>
            </Link>


            {/*TODO ----------------function update*/}
            <input type="text" placeholder="License No to search" value={searchLicenseNo}
                   onChange={(e) => setSearchLicenseNo(e.target.value)}
                   className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

            <button onClick={handleSearchVehicle}
                    className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Search
                Vehicle
            </button>

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
                    <input type="text" placeholder="New vehicle code" value={newVehicleCode}
                           onChange={(e) => setNewVehicleCode(e.target.value)}/>
                    <input type="text" placeholder="New category" value={newCategory}
                           onChange={(e) => setNewCategory(e.target.value)}/>
                    <input type="text" placeholder="New status" value={newStatus}
                           onChange={(e) => setNewStatus(e.target.value)}/>
                    <input type="text" placeholder="New fuel type" value={newFuelType}
                           onChange={(e) => setNewFuelType(e.target.value)}/>
                    <input type="text" placeholder="New remark" value={newRemark}
                           onChange={(e) => setNewRemark(e.target.value)}/>
                    <button onClick={handleUpdateVehicle}>Update vehicle</button>
                </div>
            )}


            {/*TODO ----------------function delete*/}


            <input type="text" placeholder="Enter Vehicle License No" value={deleteLicenseNo}
                   onChange={(e) => setDeleteLicenseNo(e.target.value)}
                   className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteVehicle}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Vehicle
            </button>


            <br/>


            {/*<ul>*/}
            {/*    {vehicle.map((vehicleDetails: any, index: number) => (*/}
            {/*        <li key={index}>*/}
            {/*            {vehicleDetails.licenseNo}, {vehicleDetails.vehicleCode},{vehicleDetails.category},{vehicleDetails.status},{vehicleDetails.fuelType},{vehicleDetails.remark}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                    <tr className="bg-teal-900 text-white text-left">
                        <th className="py-2 px-4 border-b">License No</th>
                        <th className="py-2 px-4 border-b">Vehicle Code</th>
                        <th className="py-2 px-4 border-b">Category</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Fuel Type</th>
                        <th className="py-2 px-4 border-b">Remark</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vehicle.map((vehicleDetails: any, index: number) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100`}
                        >
                            <td className="py-2 px-4 border-b">{vehicleDetails.licenseNo}</td>
                            <td className="py-2 px-4 border-b">{vehicleDetails.vehicleCode}</td>
                            <td className="py-2 px-4 border-b">{vehicleDetails.category}</td>
                            <td className="py-2 px-4 border-b">{vehicleDetails.status}</td>
                            <td className="py-2 px-4 border-b">{vehicleDetails.fuelType}</td>
                            <td className="py-2 px-4 border-b">{vehicleDetails.remark}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}