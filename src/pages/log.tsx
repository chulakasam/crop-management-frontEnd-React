import {Link} from "react-router";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {useEffect, useState} from "react";
import {getAllLogs, removeLog} from "../slice/LogSlice.ts";
import {getAllVehicle} from "../slice/VehicleSlice.ts";
import {AppDispatch} from "../store/store.ts";

export function Log(){
    const log=useSelector((state:any)=>state.log);
    const dispatch = useDispatch<AppDispatch>();
    const [deleteLogCode, setDeleteLogCode] = useState('')
    useEffect(() => {
        dispatch(getAllLogs());
    }, [dispatch]);

    function handleDeleteLog(event:React.FormEvent){
        event.preventDefault();
        if(!deleteLogCode){
            alert("please enter the log code...")
        }
        dispatch(removeLog(deleteLogCode));
        setDeleteLogCode('');
    }



    return (

        <>
            <br/>

            <h2 className="text-3xl font-bold text-gray-800"><i className="fas fa-clipboard-list text-green-500 text-3xl"></i> Monitoring
                logs Management</h2>
            <br/>
            <Link to="/log/addLog">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add
                    New Monitoring Log
                </button>
            </Link>
            {/*TODO ----------------function update*/}
            <input type="text" placeholder="enter the log ID" className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"> Search Monitoring Log</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder='enter the log code' value={deleteLogCode}
                   onChange={(e) => setDeleteLogCode(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteLog}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Monitoring Log
            </button>

            <br/>

            {/*<ul>*/}
            {/*    {log.map((logDetails: any, index: number) => (*/}
            {/*        <li key={index}>*/}
            {/*            {logDetails.logCode}, {logDetails.logDate},{logDetails.observation},{logDetails.logImage},{logDetails.fieldCode},{logDetails.vehicleCode},{logDetails.cropCode},{logDetails.staffCode}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            <div className="overflow-x-auto max-w-6xl mx-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                    <tr className="bg-teal-900 text-white text-left">
                        <th className="py-2 px-4 border-b">Log Code</th>
                        <th className="py-2 px-4 border-b">Log Date</th>
                        <th className="py-2 px-4 border-b">Observation</th>
                        <th className="py-2 px-4 border-b">Log Image</th>

                    </tr>
                    </thead>
                    <tbody>
                    {log.map((logDetails: any, index: number) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100`}
                        >
                            <td className="py-2 px-4 border-b">{logDetails.LogCode}</td>
                            <td className="py-2 px-4 border-b">{logDetails.date}</td>
                            <td className="py-2 px-4 border-b">{logDetails.observation}</td>
                            <td className="py-2 px-4 border-b">{logDetails.LogImage}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}