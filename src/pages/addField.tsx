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
            <div>
                <h2>Add New Field</h2>
                <form>
                    <label>Field Code: <input type="text" name="field_code" value={fieldCode}
                                              onChange={(e) => setFieldCode(e.target.value)}/></label><br/>
                    <label>Field Name: <input type="text" name="name" value={fieldName}
                                              onChange={(e) => setFieldName(e.target.value)}/></label><br/>
                    <label>Location: <input type="text" name="location" value={location}
                                            onChange={(e) => setLocation(e.target.value)}/></label><br/>
                    <label>Field Size: <input type="text" name="field_size" value={fieldSize}
                                              onChange={(e) => setFieldSize(e.target.value)}/></label><br/>
                    <label>Field Image 01: <input type="text" name="field_image_01" value={fieldImg_01}
                                                  onChange={(e) => setFieldImg_01(e.target.value)}/></label><br/>
                    <label>Field Image 02: <input type="text" name="field_image_02" value={fieldImg_02}
                                                  onChange={(e) => setFieldImg_02(e.target.value)}/></label><br/>
                    <button type="submit" onClick={handleSubmitField} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add Field</button>
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