import {Link} from "react-router";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteLog} from "../slice/LogSlice.ts";
import {useState} from "react";

export function Log(){
    const log=useSelector((state:any)=>state.log);
    const dispatch = useDispatch();
    const [deleteLogCode, setDeleteLogCode] = useState('')

    function handleDeleteLog(event:React.FormEvent){
        event.preventDefault();
        if(!deleteLogCode){
            alert("please enter the log code...")
        }
        dispatch(deleteLog(deleteLogCode));
        setDeleteLogCode('');
    }



    return (

        <>
            <br/>

            <h2 className="text-3xl font-bold text-gray-800">Monitoring logs Management</h2>
                <br/>
                <Link to="/log/addLog">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add New Monitoring Log</button>
            </Link>
            {/*TODO ----------------function update*/}
            <button>Update Monitoring Log</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder='enter the log code' value={deleteLogCode} onChange={(e) => setDeleteLogCode(e.target.value)} className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteLog} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete Monitoring Log</button>

            <br/>

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