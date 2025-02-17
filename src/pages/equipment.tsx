import {Link} from "react-router";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteEquipment, getAllEquipment, removeEquipment} from "../slice/EquipmentSlice.ts";
import {AppDispatch} from "../store/store.ts";
import {getAllField} from "../slice/FieldSlice.ts";

export function Equipment(){
    const equipment = useSelector((state: any) => state.equipment);
    const dispatch = useDispatch<AppDispatch>();

    const [deleteEquipmentId, setDeleteEquipmentCode] = useState('');
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
            <input type="text" placeholder="enter the equipment ID" className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button  className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Search Equipment</button>

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

        </>
    )
}