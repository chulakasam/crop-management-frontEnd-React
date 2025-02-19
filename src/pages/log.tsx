import {Link} from "react-router";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {useEffect, useState} from "react";
import {getAllLogs, removeLog, updatingLog} from "../slice/LogSlice.ts";
import {getAllVehicle} from "../slice/VehicleSlice.ts";
import {AppDispatch} from "../store/store.ts";

export function Log(){
    const log=useSelector((state:any)=>state.log);
    const dispatch = useDispatch<AppDispatch>();
    const [deleteLogCode, setDeleteLogCode] = useState('');


    const [searchLogCode, setsearchLogCode] = useState('');
    const [foundLog, setFoundLog] = useState<any | null>(null);

    const [newLogDate, setNewLogDate] = useState('');
    const [newObservation, setNewObservation] = useState('');
    const [newLogImage, setNewLogImage] = useState('');



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

    function handleSearchLog(event:React.FormEvent){
        event.preventDefault();
        const found = log.find((l: any) => l.LogCode === searchLogCode);
        if (found) {
            setFoundLog(found);
            setNewLogDate(found.date);
            setNewObservation(found.observation);
            setNewLogImage(found.LogImage);


        } else {
            alert('monitoring log not found.');
            setFoundLog(null);
        }
    }

    function handleUpdateLog(event:React.FormEvent){
        event.preventDefault();
        const updatedLog={
            LogCode: searchLogCode,
            date:newLogDate,
            observation:newObservation,
            LogImage:newLogImage
        }
        if(updatedLog){
            dispatch(updatingLog(updatedLog));
            setNewLogDate('');
            setNewObservation('');
            setNewLogImage('');
            alert('log updated successfully.');
        }else {
            alert('log not updated .');
        }


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
            <input type="text" placeholder="enter the log ID" className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={(e)=>setsearchLogCode(e.target.value)}/>
            <button className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={handleSearchLog}> Search Monitoring Log</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder='enter the log code' value={deleteLogCode}
                   onChange={(e) => setDeleteLogCode(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteLog}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Monitoring Log
            </button>

            <br/>

           <div className="max-w-8xl mx-auto px-4 py-8">
               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                   {foundLog && (
                       <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                           <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Monitoring Log</h3>

                           <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                               <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Monitoring Log Details</h4>
                               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                   <p>
                                       <strong className="text-gray-600">Log Date:</strong>{" "}
                                       <span className="text-gray-900">{foundLog.date}</span>
                                   </p>
                                   <p>
                                       <strong className="text-gray-600">Observation:</strong>{" "}
                                       <span className="text-gray-900">{foundLog.observation}</span>
                                   </p>
                                   <p>
                                       <strong className="text-gray-600">Monitoring Log Image:</strong>{" "}
                                       <span className="text-gray-900">{foundLog.LogImage}</span>
                                   </p>


                               </div>
                           </div>

                           <div className="bg-white p-6 rounded-lg shadow-sm">
                               <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Monitoring Log Details</h4>
                               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                   <input
                                       type="text"
                                       value={newLogDate}
                                       onChange={(e) => setNewLogDate(e.target.value)}
                                       placeholder="New Staff Name"
                                       className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                   />
                                   <input
                                       type="text"
                                       value={newObservation}
                                       onChange={(e) => setNewObservation(e.target.value)}
                                       placeholder="New Position"
                                       className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                   />
                                   <input
                                       type="text"
                                       value={newLogImage}
                                       onChange={(e) => setNewLogImage(e.target.value)}
                                       placeholder="New Gender"
                                       className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                   />

                               </div>
                           </div>

                           <button
                               onClick={handleUpdateLog}
                               className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                           >
                               Update Staff
                           </button>
                       </div>
                   )}



















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

               </div>
           </div>

        </>
    )
}