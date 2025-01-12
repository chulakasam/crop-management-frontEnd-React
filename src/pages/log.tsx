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

            Monitoring logs Management
            <br/>
            <Link to="/log/addLog">
                <button>Add New Monitoring Log</button>
            </Link>
            {/*TODO ----------------function update*/}
            <button>Update Monitoring Log</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder='enter the log code' value={deleteLogCode} onChange={(e) => setDeleteLogCode(e.target.value)}/>
            <button onClick={handleDeleteLog}>Delete Monitoring Log</button>

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