import {useDispatch, useSelector} from "react-redux";

import {useState} from "react";
import {saveVehicle} from "../slice/VehicleSlice.ts";
import Vehicle from "../model/Vehicle.ts";
import {AppDispatch} from "../store/store.ts";




export function AddVehicle(){

    const vehicle = useSelector((state:any) => state.vehicle);
    const dispatch = useDispatch<AppDispatch>();

    const [licenseNo, setLicenseNo] = useState('');
    const [vehicleCode, setVehicleCode] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [remark, setRemark] = useState('')



    // function handleSubmitVehicle(event: React.FormEvent){
    //     event.preventDefault();
    //     dispatch(addNewVehicle({licenseNo, vehicleCode, category, status, fuelType,remark}));
    //     setLicenseNo('');
    //     setVehicleCode('');
    //     setCategory('');
    //     setStatus('');
    //     setFuelType('');
    //     setRemark('');
    // }



const handleSubmitVehicle=async (event:React.FormEvent)=>{
        event.preventDefault();
        const newVehicle=new Vehicle(licenseNo, vehicleCode, category, status, fuelType, remark);
        dispatch(saveVehicle(newVehicle));
}
















    return(
        <>
            <br/>

            <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Vehicle</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="license_no" className="block text-sm font-medium text-gray-700">
                            License No
                        </label>
                        <input
                            type="text"
                            id="license_no"
                            name="license_no"
                            value={licenseNo}
                            onChange={(e) => setLicenseNo(e.target.value)}
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
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
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
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="fuel_type" className="block text-sm font-medium text-gray-700">
                            Fuel Type
                        </label>
                        <input
                            type="text"
                            id="fuel_type"
                            name="fuel_type"
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="remark" className="block text-sm font-medium text-gray-700">
                            Remark
                        </label>
                        <input
                            type="text"
                            id="remark"
                            name="remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmitVehicle}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Add Vehicle
                    </button>
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