import {Link} from "react-router";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteEquipment, getAllEquipment, removeEquipment} from "../slice/EquipmentSlice.ts";
import {AppDispatch} from "../store/store.ts";


export function Equipment(){
    const equipment = useSelector((state: any) => state.equipment);
    const dispatch = useDispatch<AppDispatch>();

    const [deleteEquipmentId, setDeleteEquipmentCode] = useState('');

    const [foundEquipment, setFoundEquipment] = useState<any | null>(null);

    const [searchEquipmentId, setSearchEquipmentId] = useState('');
    const [newEquipmentName, setNewEquipmentName] = useState('');
    const [newEquipmentType, setNewEquipmentType] = useState('');
    const [newEquipmentStatus, setNewEquipmentStatus] = useState('');
    const [newStaffId, setNewStaffId] = useState('');
    const [newFieldCode, setNewFieldCode] = useState('')











    useEffect(() => {
        dispatch(getAllEquipment());
    }, [dispatch]);

    function handleDeleteEquipment(event:React.FormEvent){
        event.preventDefault();
        if(!deleteEquipmentId){
            alert("please enter the equipment ID...");
        }
        dispatch(removeEquipment(deleteEquipmentId));
        dispatch(getAllEquipment())
        setDeleteEquipmentCode('');
    }



    function handleSearchEquipment(event:React.FormEvent){
        event.preventDefault();
        const found = equipment.find((e: any) => e.equipmentId === searchEquipmentId);
        if (found) {
            setFoundEquipment(found);
            setNewEquipmentName(found.equipmentName);
            setNewEquipmentType(found.equipmentType);
            setNewEquipmentStatus(found.equipmentStatus);
            setNewStaffId(found.staffId);
            setNewFieldCode(found.fieldCode);

        } else {
            alert('equipment not found.');
            setFoundEquipment(null);
        }

    }


    function handleUpdateEquipment(event:React.FormEvent){
        event.preventDefault();
    }

    return(
        <>

            <br/>

            <h2 className="text-3xl font-bold text-gray-800"> <i className="fas fa-cogs text-green-500 text-3xl"></i> Equipment
                Management</h2>
            <br/>
            <Link to="/equipment/addEquipment">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add
                    New Equipment
                </button>
            </Link>

            {/*TODO ----------------function update*/}
            <input type="text" placeholder="enter the equipment ID" className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={searchEquipmentId}
                   onChange={(e) => setSearchEquipmentId(e.target.value)}/>
            <button  onClick={handleSearchEquipment} className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Search Equipment</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the equipment ID" value={deleteEquipmentId}
                   onChange={(e) => setDeleteEquipmentCode(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

            <button onClick={handleDeleteEquipment}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Equipment
            </button>
            {/*<ul>*/}
            {/*    {equipment.map((equipmentDetails: any, index: number) => (*/}
            {/*        <li key={index}>*/}
            {/*            {equipmentDetails.equipmentId}, {equipmentDetails.equipmentName},{equipmentDetails.equipmentType},{equipmentDetails.equipmentStatus},{equipmentDetails.staffId},{equipmentDetails.fieldCode}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}




            <div className="max-w-8xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                    {foundEquipment && (

                        <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Vehicle:</h3>


                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Equipment Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <p>
                                        <strong className="text-gray-600">Current Equipment Name:</strong>
                                        <span className="text-gray-900">{foundEquipment.equipmentName}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Equipment Type:</strong>
                                        <span className="text-gray-900">{foundEquipment.equipmentType}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Equipment Status:</strong>
                                        <span className="text-gray-900">{foundEquipment.equipmentStatus}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current StaffId:</strong>
                                        <span className="text-gray-900">{foundEquipment.staffId}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Field Code:</strong>
                                        <span className="text-gray-900">{foundEquipment.fieldCode}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Equipment Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <input type="text" placeholder="New vehicle code" value={newEquipmentName}
                                           onChange={(e) => setNewEquipmentName(e.target.value)}/>
                                    <input type="text" placeholder="New category" value={newEquipmentType}
                                           onChange={(e) => setNewEquipmentType(e.target.value)}/>
                                    <input type="text" placeholder="New status" value={newEquipmentStatus}
                                           onChange={(e) => setNewEquipmentStatus(e.target.value)}/>
                                    <input type="text" placeholder="New fuel type" value={newStaffId}
                                           onChange={(e) => setNewStaffId(e.target.value)}/>
                                    <input type="text" placeholder="New remark" value={newFieldCode}
                                           onChange={(e) => setNewFieldCode(e.target.value)}/>
                                    <button onClick={handleUpdateEquipment}
                                            className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">Update
                                        vehicle
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}


                    <br/>
                    <div className="overflow-x-auto max-w-6xl mx-auto">
                        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead>
                            <tr className="bg-teal-900 text-white text-left">
                                <th className="py-2 px-4 border-b">Equipment ID</th>
                                <th className="py-2 px-4 border-b">Equipment Name</th>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Status</th>
                                <th className="py-2 px-4 border-b">Staff ID</th>
                                <th className="py-2 px-4 border-b">Field Code</th>
                            </tr>
                            </thead>
                            <tbody>
                            {equipment.map((equipmentDetails: any, index: number) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-gray-100`}
                                >
                                    <td className="py-2 px-4 border-b">{equipmentDetails.equipmentId}</td>
                                    <td className="py-2 px-4 border-b">{equipmentDetails.equipmentName}</td>
                                    <td className="py-2 px-4 border-b">{equipmentDetails.equipmentType}</td>
                                    <td className="py-2 px-4 border-b">{equipmentDetails.equipmentStatus}</td>
                                    <td className="py-2 px-4 border-b">{equipmentDetails.staffId}</td>
                                    <td className="py-2 px-4 border-b">{equipmentDetails.fieldCode}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>






























































            {/*<div className="overflow-x-auto max-w-6xl mx-auto">*/}
            {/*    <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">*/}
            {/*        <thead>*/}
            {/*        <tr className="bg-teal-900 text-white text-left">*/}
            {/*            <th className="py-2 px-4 border-b">Equipment ID</th>*/}
            {/*            <th className="py-2 px-4 border-b">Equipment Name</th>*/}
            {/*            <th className="py-2 px-4 border-b">Type</th>*/}
            {/*            <th className="py-2 px-4 border-b">Status</th>*/}
            {/*            <th className="py-2 px-4 border-b">Staff ID</th>*/}
            {/*            <th className="py-2 px-4 border-b">Field Code</th>*/}
            {/*        </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody>*/}
            {/*        {equipment.map((equipmentDetails: any, index: number) => (*/}
            {/*            <tr*/}
            {/*                key={index}*/}
            {/*                className={`${*/}
            {/*                    index % 2 === 0 ? "bg-gray-50" : "bg-white"*/}
            {/*                } hover:bg-gray-100`}*/}
            {/*            >*/}
            {/*                <td className="py-2 px-4 border-b">{equipmentDetails.equipmentId}</td>*/}
            {/*                <td className="py-2 px-4 border-b">{equipmentDetails.equipmentName}</td>*/}
            {/*                <td className="py-2 px-4 border-b">{equipmentDetails.equipmentType}</td>*/}
            {/*                <td className="py-2 px-4 border-b">{equipmentDetails.equipmentStatus}</td>*/}
            {/*                <td className="py-2 px-4 border-b">{equipmentDetails.staffId}</td>*/}
            {/*                <td className="py-2 px-4 border-b">{equipmentDetails.fieldCode}</td>*/}
            {/*            </tr>*/}
            {/*        ))}*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*</div>*/}

        </>
    )
}