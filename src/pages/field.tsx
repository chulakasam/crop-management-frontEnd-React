import {Link} from "react-router";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {deleteField, removeField, updateField} from "../slice/FieldSlice.ts";
import {getAllVehicle, removeVehicle} from "../slice/VehicleSlice.ts";
import {AppDispatch} from "../store/store.ts";


export function Field(){
    const field = useSelector((state: any) => state.field);
    const dispatch = useDispatch<AppDispatch>();

    const [deleteFieldCode, setDeleteFieldCode] = useState('');

    const [searchFieldCode, setSearchFieldCode] = useState('');
    const [foundField, setFoundField] = useState<any | null>(null);

    const [newFieldName, setNewFieldName] = useState('');
    const [newFieldLocation, setNewFieldLocation] = useState('');
    const [newFieldSize, setNewFieldSize] = useState('');
    const [newFieldImage_1, setNewFieldImage_1] = useState('');
    const [newFieldImage_2, setNewFieldImage_2] = useState('');

    function handleSearchField(event:React.FormEvent){
        event.preventDefault();
        const found = field.find((f: any) => f.fieldCode === searchFieldCode);
        if (found) {
            setFoundField(found);
            setNewFieldName(found.fieldName);
            setNewFieldLocation(found.location);
            setNewFieldSize(found.fieldSize);
            setNewFieldImage_1(found.fieldImg_01);
            setNewFieldImage_2(found.fieldImg_02);


        } else {
            alert('field not found.');
            setFoundField(null);
        }
    }


    function handleUpdateField(event:React.FormEvent){
        event.preventDefault();
        if(foundField){
            dispatch(updateField({fieldCode:foundField.fieldCode,newFieldName,newFieldLocation,newFieldSize,newFieldImage_1,newFieldImage_2}));
            alert("field updated successfully.");
            setNewFieldName('');
            setNewFieldLocation('');
            setNewFieldSize('');
            setNewFieldImage_1('');
            setNewFieldImage_2('');


        }else{
            alert("field not found.");
            setFoundField(null);
        }

    }





    const handleDeleteField=async (event:React.FormEvent)=>{
        event.preventDefault();
        if(window.confirm("Are you sure you want to delete this Field ?")){
            await dispatch(removeField(deleteFieldCode));
        }
    }

















    // function handleDeleteField(event:React.FormEvent){
    //     event.preventDefault();
    //     if(!deleteFieldCode){
    //         alert("please enter the field code...");
    //     }
    //     dispatch(deleteField(deleteFieldCode));
    //     setDeleteFieldCode('');
    // }
    return (
        <>
            <br/>
            <h2 className="text-3xl font-bold text-gray-800"><i
                className="fas fa-tractor text-green-500 text-3xl"></i> Field
                Management</h2>
            <br/>
            <Link to="/field/addField">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add
                    New Field
                </button>
            </Link>
            {/*TODO ----------------function update*/}
            <input type="text" placeholder="Field code to search" value={searchFieldCode}
                   onChange={(e) => setSearchFieldCode(e.target.value)}
                   className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

            <button onClick={handleSearchField}
                    className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Search
                Field
            </button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the field code" value={deleteFieldCode}
                   onChange={(e) => setDeleteFieldCode(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteField}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Field
            </button>

            <div className="max-w-8xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                    {foundField && (
                        <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Field:</h3>

                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Field Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    <p>
                                        <strong className="text-gray-600">Current Field Name:</strong>
                                        <span className="text-gray-900">{foundField.fieldName}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Current Location:</strong>
                                        <span className="text-gray-900">{foundField.location}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Current Field Size:</strong>
                                        <span className="text-gray-900">{foundField.fieldSize}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Current Field Image 01:</strong>{" "}
                                        <span className="text-gray-900">{foundField.fieldImg_01}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Current Field Image 02:</strong>{" "}
                                        <span className="text-gray-900">{foundField.fieldImg_02}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Field Details</h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input
                                        type="text"
                                        value={newFieldName}
                                        onChange={(e) => setNewFieldName(e.target.value)}
                                        placeholder="New Field Name"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newFieldLocation}
                                        onChange={(e) => setNewFieldLocation(e.target.value)}
                                        placeholder="New Location"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newFieldSize}
                                        onChange={(e) => setNewFieldSize(e.target.value)}
                                        placeholder="New Field Size"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newFieldImage_1}
                                        onChange={(e) => setNewFieldImage_1(e.target.value)}
                                        placeholder="New Field Image 01 URL"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newFieldImage_2}
                                        onChange={(e) => setNewFieldImage_2(e.target.value)}
                                        placeholder="New Field Image 02 URL"
                                        className="border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <button
                                    onClick={handleUpdateField}
                                    className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                >
                                    Update Field
                                </button>
                            </div>
                            </div>
                            )}


                            <div className="overflow-x-auto lg:w-1/1 max-w-6xl mx-auto mb-8">
                                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                    <thead>
                                    <tr className="bg-teal-900 text-white text-left">
                                        <th className="py-2 px-4 border-b">Field Code</th>
                                        <th className="py-2 px-4 border-b">Field Name</th>
                                        <th className="py-2 px-4 border-b">Location</th>
                                        <th className="py-2 px-4 border-b">Field Size</th>
                                        <th className="py-2 px-4 border-b">Field Image 01</th>
                                        <th className="py-2 px-4 border-b">Field Image 02</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {field.map((fieldDetails: any, index: number) => (
                                        <tr
                                            key={index}
                                            className={`${
                                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            } hover:bg-gray-100`}
                                        >
                                            <td className="py-2 px-4 border-b">{fieldDetails.fieldCode}</td>
                                            <td className="py-2 px-4 border-b">{fieldDetails.fieldName}</td>
                                            <td className="py-2 px-4 border-b">{fieldDetails.location}</td>
                                            <td className="py-2 px-4 border-b">{fieldDetails.fieldSize}</td>
                                            <td className="py-2 px-4 border-b">{fieldDetails.fieldImg_01}</td>
                                            <td className="py-2 px-4 border-b">{fieldDetails.fieldImg_02}</td>
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