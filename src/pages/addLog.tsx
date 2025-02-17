import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { saveLog } from "../slice/LogSlice.ts";
import MonitoringLog from "../model/Log.ts";
import { AppDispatch } from "../store/store.ts";

export function AddLog() {
    const log = useSelector((state: any) => state.log);
    const dispatch = useDispatch<AppDispatch>();

    const [
        logCode, setLogCode] = useState('');
    const [logDate, setLogDate] = useState('');
    const [observation, setObservation] = useState('');
    const [logImage, setLogImage] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const [vehicleCode, setVehicleCode] = useState('');
    const [cropCode, setCropCode] = useState('');
    const [staffCode, setStaffCode] = useState('');

    function handleSubmitLog(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Validation (optional, add more checks as needed)
        if (!logCode || !logDate || !observation || !logImage) {
            alert("Please fill in all required fields.");
            return;
        }

        const newLog = new MonitoringLog(logCode, logDate, observation, logImage);
        dispatch(saveLog(newLog));

        // Reset form fields after submission
        setLogCode('');
        setLogDate('');
        setObservation('');
        setLogImage('');
        setFieldCode('');
        setVehicleCode('');
        setCropCode('');
        setStaffCode('');
    }

    return (
        <>
            <br />

            <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Monitoring Log</h2>
                <form className="space-y-4" onSubmit={handleSubmitLog}>
                    <div>
                        <label htmlFor="LogCode" className="block text-sm font-medium text-gray-700">
                            Log Code
                        </label>
                        <input
                            type="text"
                            id="LogCode"
                            name="log_code"
                            value={logCode}
                            onChange={(e) => setLogCode(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input
                            type="text"
                            id="date"
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
                        <label htmlFor="LogImage" className="block text-sm font-medium text-gray-700">
                            Log Image
                        </label>
                        <input
                            type="text"
                            id="LogImage"
                            name="log_image"
                            value={logImage}
                            onChange={(e) => setLogImage(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Add Monitoring Log
                    </button>
                </form>
            </div>

            <ul>
                {log.map((logDetails: any, index: number) => (
                    <li key={index}>
                        {logDetails.LogCode}, {logDetails.date},{logDetails.observation},{logDetails.LogImage}
                    </li>
                ))}
            </ul>
        </>
    );
}
