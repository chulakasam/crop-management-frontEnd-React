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
            <div>
                <h2>Add New Monitoring Log</h2>
                <form>
                    <label>Log Code: <input type="text" name="log_code" value={logCode}
                                            onChange={(e) => setLogCode(e.target.value)}/></label><br/>
                    <label>Date: <input type="text" name="log_date" value={logDate}
                                        onChange={(e) => setLogDate(e.target.value)}/></label><br/>
                    <label>Observation: <input type="text" name="observation" value={observation}
                                               onChange={(e) => setObservation(e.target.value)}/></label><br/>
                    <label>Log Image: <input type="text" name="log_image" value={logImage}
                                             onChange={(e) => setLogImage(e.target.value)}/></label><br/>
                    <label>Field Code: <input type="text" name="field_code" value={fieldCode}
                                              onChange={(e) => setFieldCode(e.target.value)}/></label><br/>
                    <label>Vehicle Code: <input type="text" name="vehicle_code" value={vehicleCode}
                                                onChange={(e) => setVehicleCode(e.target.value)}/></label><br/>
                    <label>Crop Code: <input type="text" name="crop_code" value={cropCode}
                                             onChange={(e) => setCropCode(e.target.value)}/></label><br/>
                    <label>Staff Code: <input type="text" name="staff_code" value={staffCode}
                                              onChange={(e) => setStaffCode(e.target.value)}/></label><br/>
                    <button type="submit" onClick={handleSubmitLog}>Add Monitoring Log</button>
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