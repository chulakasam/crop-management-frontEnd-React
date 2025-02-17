import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as React from "react";

import {deleteCrop, getAllCrop, removeCrop} from "../slice/CropSlice.ts";
import {AppDispatch} from "../store/store.ts";
import {getAllField} from "../slice/FieldSlice.ts";

export function Crop(){
    const crop = useSelector((state: any) => state.crop);
    const dispatch = useDispatch<AppDispatch>();

    const [deleteCropCode, setDeleteCropCode] = useState('');
    useEffect(() => {
        dispatch(getAllCrop());
    }, [dispatch]);
    function handleDeleteCrop(event:React.FormEvent){
        event.preventDefault();
        if(!deleteCropCode){
            alert("please enter the crop code...");
        }
        dispatch(removeCrop(deleteCropCode));
        setDeleteCropCode('');
        dispatch(getAllCrop())
    }
    return(
        <>
            <br/>

            <h2 className="text-3xl font-bold text-gray-800"><i className="fas fa-seedling text-green-500 text-3xl"></i> Crop
                Management</h2>
            <br/>
            <Link to="/crop/addCrop">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add
                    New Crop
                </button>
            </Link>
            {/*TODO ----------------function update*/}
            <input type="text" placeholder="enter the crop ID" className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" >Search Crop</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the crop code" value={deleteCropCode}
                   onChange={(e) => setDeleteCropCode(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

            <button onClick={handleDeleteCrop}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Crop
            </button>
            <br/>
            {/*<ul>*/}
            {/*    {crop.map((cropDetails: any, index: number) => (*/}
            {/*        <li key={index}>*/}
            {/*            {cropDetails.cropId}, {cropDetails.cropName},{cropDetails.scientificName},{cropDetails.image},{cropDetails.category},{cropDetails.season},{cropDetails.fieldCode}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            <div className="overflow-x-auto max-w-6xl mx-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                    <tr className="bg-teal-900 text-white text-left">
                        <th className="py-2 px-4 border-b">Crop ID</th>
                        <th className="py-2 px-4 border-b">Crop Name</th>

                        <th className="py-2 px-4 border-b">Image</th>
                        <th className="py-2 px-4 border-b">Category</th>
                        <th className="py-2 px-4 border-b">Season</th>
                        <th className="py-2 px-4 border-b">Field Code</th>
                    </tr>
                    </thead>
                    <tbody>
                    {crop.map((cropDetails: any, index: number) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100`}
                        >
                            <td className="py-2 px-4 border-b">{cropDetails.cropId}</td>
                            <td className="py-2 px-4 border-b">{cropDetails.cropName}</td>

                            <td className="py-2 px-4 border-b">
                                <img
                                    src={cropDetails.image}
                                    alt={`${cropDetails.cropName} image`}
                                    className="w-16 h-16 rounded object-cover"
                                />
                            </td>
                            <td className="py-2 px-4 border-b">{cropDetails.category}</td>
                            <td className="py-2 px-4 border-b">{cropDetails.season}</td>
                            <td className="py-2 px-4 border-b">{cropDetails.fieldCode}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}