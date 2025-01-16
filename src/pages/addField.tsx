import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewField} from "../slice/FieldSlice.ts";

export function AddField(){

    const field = useSelector((state:any) => state.field);
    const dispatch = useDispatch();

    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [location, setLocation] = useState('');
    const [fieldSize, setFieldSize] = useState('');
    const [fieldImg_01, setFieldImg_01] = useState('');
    const [fieldImg_02, setFieldImg_02] = useState('');


    function handleSubmitField(event: React.FormEvent){
        event.preventDefault();
        dispatch(addNewField({fieldCode,fieldName,location,fieldSize,fieldImg_01,fieldImg_02}))
        setFieldCode('');
        setFieldName('');
        setLocation('');
        setFieldSize('');
        setFieldImg_01('');
        setFieldImg_02('');

    }




    return (
        <>
            <br/>

            <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Field</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="field_code" className="block text-sm font-medium text-gray-700">
                            Field Code
                        </label>
                        <input
                            type="text"
                            id="field_code"
                            name="field_code"
                            value={fieldCode}
                            onChange={(e) => setFieldCode(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Field Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={fieldName}
                            onChange={(e) => setFieldName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="field_size" className="block text-sm font-medium text-gray-700">
                            Field Size
                        </label>
                        <input
                            type="text"
                            id="field_size"
                            name="field_size"
                            value={fieldSize}
                            onChange={(e) => setFieldSize(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="field_image_01" className="block text-sm font-medium text-gray-700">
                            Field Image 01
                        </label>
                        <input
                            type="text"
                            id="field_image_01"
                            name="field_image_01"
                            value={fieldImg_01}
                            onChange={(e) => setFieldImg_01(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="field_image_02" className="block text-sm font-medium text-gray-700">
                            Field Image 02
                        </label>
                        <input
                            type="text"
                            id="field_image_02"
                            name="field_image_02"
                            value={fieldImg_02}
                            onChange={(e) => setFieldImg_02(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmitField}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Add Field
                    </button>
                </form>
            </div>


            <ul>
                {field.map((fieldDetails: any, index: number) => (
                    <li key={index}>
                        {fieldDetails.fieldCode}, {fieldDetails.fieldName},{fieldDetails.location},{fieldDetails.fieldSize},{fieldDetails.fieldImg_01},{fieldDetails.fieldImg_02}
                    </li>
                ))}
            </ul>
        </>
    )
}