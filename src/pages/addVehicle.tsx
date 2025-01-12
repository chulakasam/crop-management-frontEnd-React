import {useDispatch, useSelector} from "react-redux";
import {addNewVehicle} from "../slice/VehicleSlice.ts";
import {useState} from "react";

export function AddVehicle(){

    const vehicle = useSelector((state:any) => state.vehicle);
    const dispatch = useDispatch();

    const [licenseNo, setLicenseNo] = useState('');
    const [vehicleCode, setVehicleCode] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [remark, setRemark] = useState('')



    function handleSubmitVehicle(event: React.FormEvent){
        event.preventDefault();
        dispatch(addNewVehicle({licenseNo, vehicleCode, category, status, fuelType,remark}));
        setLicenseNo('');
        setVehicleCode('');
        setCategory('');
        setStatus('');
        setFuelType('');
        setRemark('');
    }
    return(
        <>
            <br/>
            <div>
                <h2>Add New Vehicle</h2>
                <form>
                    <label>License No: <input type="text" name="license_no" value={licenseNo}
                                              onChange={(e) => setLicenseNo(e.target.value)}/></label><br/>
                    <label>Vehicle code: <input type="text" name="vehicle_code" value={vehicleCode}
                                                onChange={(e) => setVehicleCode(e.target.value)}/></label><br/>
                    <label>Category: <input type="text" name="category" value={category}
                                            onChange={(e) => setCategory(e.target.value)}/></label><br/>
                    <label>Status: <input type="text" name="status" value={status}
                                          onChange={(e) => setStatus(e.target.value)}/></label><br/>
                    <label>Fuel type: <input type="text" name="fuel_type" value={fuelType}
                                             onChange={(e) => setFuelType(e.target.value)}/></label><br/>
                    <label>Remark: <input type="text" name="remark" value={remark}
                                          onChange={(e) => setRemark(e.target.value)}/></label><br/>

                    <button type="submit" onClick={handleSubmitVehicle}>Add Vehicle</button>
                </form>
            </div>
            <ul>
                {vehicle.map((vehicleDetails: any, index: number) => (
                    <li key={index}>
                        {vehicleDetails.licenseNo}, {vehicleDetails.vehicleCode},{vehicleDetails.category},{vehicleDetails.status},{vehicleDetails.fuelType},{vehicleDetails.remark}
                    </li>
                ))}
            </ul>
        </>
    )
}