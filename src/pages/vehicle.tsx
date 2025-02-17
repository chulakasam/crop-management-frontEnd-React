import {Link} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {deleteVehicle, getAllVehicle, removeVehicle, updateVehicle, updatingVehicle} from "../slice/VehicleSlice.ts";
import {AppDispatch} from "../store/store.ts";

export function Vehicle() {
    const vehicle = useSelector((state:any) => state.vehicle);
    const dispatch = useDispatch<AppDispatch>();
    const [deleteLicenseNo,setDeleteLicenseNo] = useState('');


    const [searchLicenseNo, setSearchLicenseNo] = useState('');
    const [foundVehicle, setFoundVehicle] = useState<any | null>(null);

    const [newVehicleCode, setNewVehicleCode] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newFuelType, setNewFuelType] = useState('');
    const [newRemark, setNewRemark] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        dispatch(getAllVehicle());
    }, [dispatch]);



    const handleDeleteVehicle=async (event:React.FormEvent)=>{
        event.preventDefault();
        if(window.confirm("Are you sure you want to delete this vehicle ?")){
          await dispatch(removeVehicle(deleteLicenseNo));
          dispatch(getAllVehicle())
        }
    }


    function handleSearchVehicle(event:React.FormEvent){
        event.preventDefault();
        const found = vehicle.find((v: any) => v.LicenseNo === searchLicenseNo);
        if (found) {
            setFoundVehicle(found);
            setNewVehicleCode(found.VehicleCode);
            setNewCategory(found.Category);
            setNewStatus(found.Status);
            setNewFuelType(found.FuelType);
            setNewRemark(found.Remark);

        } else {
            alert('vehicle not found.');
            setFoundVehicle(null);
        }
    }

    // function handleUpdateVehicle(event:React.FormEvent){
    //     event.preventDefault();
    //     if(foundVehicle){
    //         dispatch(updateVehicle({licenseNo:foundVehicle.licenseNo,newVehicleCode,newCategory,newStatus,newFuelType,newRemark}));
    //
    //         alert("vehicle updated successfully.");
    //         setNewVehicleCode('');
    //         setNewCategory('');
    //         setNewStatus('');
    //         setNewFuelType('');
    //         setNewRemark('');
    //     }else{
    //         alert("vehicle not found.");
    //         setFoundVehicle(null);
    //     }
    // }

    const handleUpdateVehicle = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!vehicle) {
            console.error("Vehicle data is missing!");
            return;
        }

        dispatch(updateVehicle({licenseNo:foundVehicle.licenseNo,newVehicleCode,newCategory,newStatus,newFuelType,newRemark}));
    };













    return (
        <>
            <br/>

            <h2 className="text-3xl font-bold text-gray-800"><i
                className="fas fa-truck text-green-500 text-3xl"></i> Vehicle
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

            {/*TODO ----------------function delete*/}


            <input type="text" placeholder="Enter Vehicle License No" value={deleteLicenseNo}
                   onChange={(e) => setDeleteLicenseNo(e.target.value)}
                   className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteVehicle}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Vehicle
            </button>


            <div className="max-w-8xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                    {foundVehicle && (

                        <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Vehicle:</h3>


                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Vehicle Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <p>
                                        <strong className="text-gray-600">Current Vehicle No:</strong>
                                        <span className="text-gray-900">{foundVehicle.VehicleCode}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Category:</strong>
                                        <span className="text-gray-900">{foundVehicle.Category}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Status:</strong>
                                        <span className="text-gray-900">{foundVehicle.Status}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Fuel type:</strong>
                                        <span className="text-gray-900">{foundVehicle.FuelType}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Remark:</strong>
                                        <span className="text-gray-900">{foundVehicle.Remark}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Vehicle Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                    <button onClick={handleUpdateVehicle}
                                            className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">Update
                                        vehicle
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}


                                <br/>

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
                                                <td className="py-2 px-4 border-b">{vehicleDetails.LicenseNo}</td>
                                                <td className="py-2 px-4 border-b">{vehicleDetails.VehicleCode}</td>
                                                <td className="py-2 px-4 border-b">{vehicleDetails.Category}</td>
                                                <td className="py-2 px-4 border-b">{vehicleDetails.Status}</td>
                                                <td className="py-2 px-4 border-b">{vehicleDetails.FuelType}</td>
                                                <td className="py-2 px-4 border-b">{vehicleDetails.Remark}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        </>
                        )
                    }