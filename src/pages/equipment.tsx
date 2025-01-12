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

            Equipment Management
            <br/>
            <Link to="/equipment/addEquipment">
                <button>Add New Equipment</button>
            </Link>

            {/*TODO ----------------function update*/}
            <button>Update Equipment</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the equipment ID" value={deleteEquipmentId}
                   onChange={(e) => setDeleteEquipmentCode(e.target.value)}/>

            <button onClick={handleDeleteEquipment}>Delete Equipment</button>
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