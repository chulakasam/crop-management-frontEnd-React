import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewLog} from "../slice/LogSlice.ts";

export function AddLog(){
    const log = useSelector((state:any) => state.log);
    const dispatch = useDispatch();

    const [logCode, setLogCode] = useState('');
    const [logDate, setLogDate] = useState('');
    const [observation, setObservation] = useState('');
    const [logImage, setLogImage] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const [vehicleCode, setVehicleCode] = useState('');
    const [cropCode, setCropCode] = useState('');
    const [staffCode, setStaffCode] = useState('');


    function handleSubmitLog(event: React.FormEvent){

        event.preventDefault();
        dispatch(addNewLog({logCode,logDate,observation,logImage,fieldCode,vehicleCode,cropCode,staffCode}))
        setLogCode('');
        setLogDate('');
        setObservation('');
        setLogImage('');
        setCropCode('');
        setStaffCode('');
        setFieldCode('');
        setVehicleCode('');
    }


    return (
        <>
            <br/>

            <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Monitoring Log</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="log_code" className="block text-sm font-medium text-gray-700">
                            Log Code
                        </label>
                        <input
                            type="text"
                            id="log_code"
                            name="log_code"
                            value={logCode}
                            onChange={(e) => setLogCode(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="log_date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input
                            type="text"
                            id="log_date"
                            name="log_date"
                            value={logDate}
                            onChange={(e) => setLogDate(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="observation" className="block text-sm font-medium text-gray-700">
                            Observation
                        </label>
                        <input
                            type="text"
                            id="observation"
                            name="observation"
                            value={observation}
                            onChange={(e) => setObservation(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="log_image" className="block text-sm font-medium text-gray-700">
                            Log Image
                        </label>
                        <input
                            type="text"
                            id="log_image"
                            name="log_image"
                            value={logImage}
                            onChange={(e) => setLogImage(e.target.value)}
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

                    <div>
                        <label htmlFor="vehicle_code" className="block text-sm font-medium text-gray-700">
                            Vehicle Code
                        </label>
                        <input
                            type="text"
                            id="vehicle_code"
                            name="vehicle_code"
                            value={vehicleCode}
                            onChange={(e) => setVehicleCode(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="crop_code" className="block text-sm font-medium text-gray-700">
                            Crop Code
                        </label>
                        <input
                            type="text"
                            id="crop_code"
                            name="crop_code"
                            value={cropCode}
                            onChange={(e) => setCropCode(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="staff_code" className="block text-sm font-medium text-gray-700">
                            Staff Code
                        </label>
                        <input
                            type="text"
                            id="staff_code"
                            name="staff_code"
                            value={staffCode}
                            onChange={(e) => setStaffCode(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmitLog}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Add Monitoring Log
                    </button>
                </form>
            </div>

            <ul>
                {log.map((logDetails: any, index: number) => (
                    <li key={index}>
                        {logDetails.logCode}, {logDetails.logDate},{logDetails.observation},{logDetails.logImage},{logDetails.fieldCode},{logDetails.vehicleCode},{logDetails.cropCode},{logDetails.staffCode}
                    </li>
                ))}
            </ul>
        </>
    )
}