import {Link} from "react-router";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {deleteField} from "../slice/FieldSlice.ts";


export function Field(){
    const field = useSelector((state: any) => state.field);
    const dispatch = useDispatch();

    const [deleteFieldCode, setDeleteFieldCode] = useState('');

    function handleDeleteField(event:React.FormEvent){
        event.preventDefault();
        if(!deleteFieldCode){
            alert("please enter the field code...");
        }
        dispatch(deleteField(deleteFieldCode));
        setDeleteFieldCode('');
    }
    return (
        <>
            <br/>
            <h2 className="text-3xl font-bold text-gray-800">Field Management</h2>
            <br/>
            <Link to="/field/addField">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add
                    New Field
                </button>
            </Link>
            {/*TODO ----------------function update*/}
            <button>Update Field</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the field code" value={deleteFieldCode}
                   onChange={(e) => setDeleteFieldCode(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteField}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Field
            </button>
            <br/>
            {/*<ul>*/}
            {/*    {field.map((fieldDetails: any, index: number) => (*/}
            {/*        <li key={index}>*/}
            {/*            {fieldDetails.fieldCode}, {fieldDetails.fieldName},{fieldDetails.location},{fieldDetails.fieldSize},{fieldDetails.fieldImg_01},{fieldDetails.fieldImg_02}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}


            <div className="overflow-x-auto max-w-6xl mx-auto">
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

        </>
    )
}