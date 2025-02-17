import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewEquipment, saveEquipment} from "../slice/EquipmentSlice.ts";
import Equipment from "../model/Equipment.ts";
import {AppDispatch} from "../store/store.ts";

export function AddEquipment() {
    const equipment = useSelector((state:any) => state.equipment);
    const dispatch = useDispatch<AppDispatch>();

    const [equipmentId, setEquipmentId] = useState('');
    const [equipmentName, setEquipmentName] = useState('');
    const [equipmentType, setEquipmentType] = useState('');
    const [equipmentStatus, setEquipmentStatus] = useState('');
    const [staffId, setStaffId] = useState('');
    const [fieldCode, setFieldCode] = useState('');

    function handleSubmitEquipment(event: React.FormEvent){
        event.preventDefault();
        // dispatch(addNewEquipment({equipmentId,equipmentName,equipmentType,equipmentStatus,staffId,fieldCode}));
        // setEquipmentId('');
        // setEquipmentName('');
        // setEquipmentType('');
        // setEquipmentStatus('');
        // setStaffId('');
        // setFieldCode('');
        const newEquipment= new Equipment(equipmentId,equipmentName,equipmentType,equipmentStatus,staffId,fieldCode);
        dispatch(saveEquipment(newEquipment))
    }

    return (
        <>
            <br/>

            <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Equipment</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="equipment_id" className="block text-sm font-medium text-gray-700">
                            Equipment ID
                        </label>
                        <input
                            type="text"
                            id="equipment_id"
                            name="equipment_id"
                            value={equipmentId}
                            onChange={(e) => setEquipmentId(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Equipment Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={equipmentName}
                            onChange={(e) => setEquipmentName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                            Type
                        </label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            value={equipmentType}
                            onChange={(e) => setEquipmentType(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <input
                            type="text"
                            id="status"
                            name="status"
                            value={equipmentStatus}
                            onChange={(e) => setEquipmentStatus(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="staff_id" className="block text-sm font-medium text-gray-700">
                            Staff ID
                        </label>
                        <input
                            type="text"
                            id="staff_id"
                            name="staff_id"
                            value={staffId}
                            onChange={(e) => setStaffId(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="field_code" className="block text-sm font-medium text-gray-700">
                            Field Code
                        </label>
                        <input
                            type="text"
                            id="field_code"
                            name="field_code"
                            value={fieldCode}
                            onChange={(e) => setFieldCode(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmitEquipment}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Add Equipment
                    </button>
                </form>
            </div>

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