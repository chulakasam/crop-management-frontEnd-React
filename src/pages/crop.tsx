import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import * as React from "react";

import {deleteCrop} from "../slice/CropSlice.ts";

export function Crop(){
    const crop = useSelector((state: any) => state.crop);
    const dispatch = useDispatch();

    const [deleteCropCode, setDeleteCropCode] = useState('');
    function handleDeleteCrop(event:React.FormEvent){
        event.preventDefault();
        if(!deleteCropCode){
            alert("please enter the crop code...");
        }
        dispatch(deleteCrop(deleteCropCode));
        setDeleteCropCode('');
    }
    return(
        <>
            <br/>

            <h2 className="text-3xl font-bold text-gray-800">Crop Management</h2>
                <br/>
                <Link to="/crop/addCrop">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add New Crop</button>
            </Link>
            {/*TODO ----------------function update*/}
            <button>Update Crop</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the crop code" value={deleteCropCode}
                   onChange={(e) => setDeleteCropCode(e.target.value)} className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

            <button onClick={handleDeleteCrop} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete Crop</button>
            <br/>
            <ul>
                {crop.map((cropDetails: any, index: number) => (
                    <li key={index}>
                        {cropDetails.cropId}, {cropDetails.cropName},{cropDetails.scientificName},{cropDetails.image},{cropDetails.category},{cropDetails.season},{cropDetails.fieldCode}
                    </li>
                ))}
            </ul>
        </>
    )
}