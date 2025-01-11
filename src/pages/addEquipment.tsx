import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewEquipment} from "../slice/EquipmentSlice.ts";

export function AddEquipment() {
    const equipment = useSelector((state:any) => state.equipment);
    const dispatch = useDispatch();

    const [equipmentId, setEquipmentId] = useState('');
    const [equipmentName, setEquipmentName] = useState('');
    const [equipmentType, setEquipmentType] = useState('');
    const [equipmentStatus, setEquipmentStatus] = useState('');
    const [staffId, setStaffId] = useState('');
    const [fieldCode, setFieldCode] = useState('');

    function handleSubmitEquipment(){
        dispatch(addNewEquipment({equipmentId,equipmentName,equipmentType,equipmentStatus,staffId,fieldCode}));
        setEquipmentId('');
        setEquipmentName('');
        setEquipmentType('');
        setEquipmentStatus('');
        setStaffId('');
        setFieldCode('');
    }

    return (
        <>
            <br/>
            <div>
                <h2>Add New Equipment</h2>
                <form>
                    <label>Equipment ID: <input type="text" name="equipment_id" value={equipmentId}
                                                onChange={(e) => setEquipmentId(e.target.value)}/></label><br/>
                    <label>Equipment Name: <input type="text" name="name" value={equipmentName}
                                                  onChange={(e) => setEquipmentName(e.target.value)}/></label><br/>
                    <label>Type: <input type="text" name="type" value={equipmentType}
                                        onChange={(e) => setEquipmentType(e.target.value)}/></label><br/>
                    <label>Status: <input type="text" name="status" value={equipmentStatus}
                                          onChange={(e) => setEquipmentStatus(e.target.value)}/></label><br/>
                    <label>Staff ID: <input type="text" name="staff_id" value={staffId}
                                            onChange={(e) => setStaffId(e.target.value)}/></label><br/>
                    <label>Field Code: <input type="text" name="field_code" value={fieldCode}
                                              onChange={(e) => setFieldCode(e.target.value)}/></label><br/>
                    <button type="submit" onClick={handleSubmitEquipment}>Add Equipment</button>
                </form>
            </div>
            <ul>
                {equipment.map((equipmentDetails: any, index: number) => (
                    <li key={index}>
                        {equipmentDetails.equipmentId}, {equipmentDetails.equipmentName},{equipmentDetails.equipmentType},{equipmentDetails.equipmentStatus},{equipmentDetails.staffId},{equipmentDetails.dob},{equipmentDetails.fieldCode}
                    </li>
                ))}
            </ul>
        </>
    )
}