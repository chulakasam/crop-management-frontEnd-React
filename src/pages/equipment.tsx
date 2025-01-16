import {Link} from "react-router";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteEquipment} from "../slice/EquipmentSlice.ts";

export function Equipment(){
    const equipment = useSelector((state: any) => state.equipment);
    const dispatch = useDispatch();

    const [deleteEquipmentId, setDeleteEquipmentCode] = useState('');

    function handleDeleteEquipment(event:React.FormEvent){
        event.preventDefault();
        if(!deleteEquipmentId){
            alert("please enter the equipment ID...");
        }
        dispatch(deleteEquipment(deleteEquipmentId));
        setDeleteEquipmentCode('');
    }
    return(
        <>

            <br/>

            <h2 className="text-3xl font-bold text-gray-800">Equipment Management</h2>
                <br/>
                <Link to="/equipment/addEquipment">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add New Equipment</button>
            </Link>

            {/*TODO ----------------function update*/}
            <button>Update Equipment</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the equipment ID" value={deleteEquipmentId}
                   onChange={(e) => setDeleteEquipmentCode(e.target.value)} className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

            <button onClick={handleDeleteEquipment} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete Equipment</button>
            <ul>
                {equipment.map((equipmentDetails: any, index: number) => (
                    <li key={index}>
                        {equipmentDetails.equipmentId}, {equipmentDetails.equipmentName},{equipmentDetails.equipmentType},{equipmentDetails.equipmentStatus},{equipmentDetails.staffId},{equipmentDetails.fieldCode}
                    </li>
                ))}
            </ul>
        </>
    )
}