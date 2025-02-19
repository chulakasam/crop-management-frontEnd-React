import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as React from "react";

import {getAllCrop, removeCrop, updatingCrop} from "../slice/CropSlice.ts";
import {AppDispatch} from "../store/store.ts";


export function Crop(){
    const crop = useSelector((state: any) => state.crop);
    const dispatch = useDispatch<AppDispatch>();

    const [deleteCropCode, setDeleteCropCode] = useState('');
    const [foundCrop, setFoundCrop] = useState<any|null>(null);
    const [searchCropId, setSearchCropId] = useState('')
    const [newCropName, setNewCropName] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newSeason, setNewSeason] = useState('');
    const [newFieldCode, setNewFieldCode] = useState('');
    
    
    
    
    
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

    function handleSearchCrop(event: React.FormEvent) {
        event.preventDefault();
        const found = crop.find((c: any) => c.cropId === searchCropId);
        if (found) {
            setFoundCrop(found);
            setNewCropName(found.cropName);
            setNewImage(found.cropImage);
            setNewCategory(found.category);
            setNewSeason(found.season);
            setNewFieldCode(found.fieldCode);

        } else {
            alert('crop not found.');
            setFoundCrop(null);
        }

    }


    function handleUpdateCrop(event: React.FormEvent) {
        event.preventDefault();
        if (!newCropName || !newImage || !newCategory || !newSeason || !newFieldCode) {
            alert("Please fill in all fields to update the crop.");
            return;
        }

        const updatedCrop = {
            cropId: searchCropId,
            cropName: newCropName,
            cropImage: newImage,
            category: newCategory,
            season: newSeason,
            fieldCode: newFieldCode,
        };

        dispatch(updatingCrop(updatedCrop));
        setFoundCrop(null);
        setNewCropName("");
        setNewImage("");
        setNewCategory("");
        setNewSeason("");
        setNewFieldCode("");
        dispatch(getAllCrop());
        alert("Crop updated successfully.");
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
            <input type="text" placeholder="enter the crop ID" className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={(e)=>setSearchCropId(e.target.value)}/>
            <button onClick={handleSearchCrop} className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" >Search Crop</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the crop code" value={deleteCropCode}
                   onChange={(e) => setDeleteCropCode(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

            <button onClick={handleDeleteCrop}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Crop
            </button>
            <br/>
          
            
            
            
            <div>
                <div>

                    {foundCrop && (

                        <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Vehicle:</h3>


                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Equipment Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <p>
                                        <strong className="text-gray-600">Current Crop Name:</strong>
                                        <span className="text-gray-900">{foundCrop.cropName}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Crop Image:</strong>
                                        <span className="text-gray-900">{foundCrop.cropImage}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Crop Category:</strong>
                                        <span className="text-gray-900">{foundCrop.category}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Season:</strong>
                                        <span className="text-gray-900">{foundCrop.season}</span>
                                    </p>

                                    <p>
                                        <strong className="text-gray-600">Current Field Code:</strong>
                                        <span className="text-gray-900">{foundCrop.fieldCode}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Crop Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <input type="text" placeholder="New vehicle code" value={newCropName}
                                           onChange={(e) => setNewCropName(e.target.value)}/>
                                    <input type="text" placeholder="New category" value={newImage}
                                           onChange={(e) => setNewImage(e.target.value)}/>
                                    <input type="text" placeholder="New status" value={newCategory}
                                           onChange={(e) => setNewCategory(e.target.value)}/>
                                    <input type="text" placeholder="New fuel type" value={newSeason}
                                           onChange={(e) => setNewSeason(e.target.value)}/>
                                    <input type="text" placeholder="New remark" value={newFieldCode}
                                           onChange={(e) => setNewFieldCode(e.target.value)}/>
                                    <button onClick={handleUpdateCrop}
                                            className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">Update
                                        vehicle
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}





















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
                </div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

        </>
    )
}