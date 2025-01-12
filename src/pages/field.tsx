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
            Field Management
            <br/>
            <Link to="/field/addField">
                <button>Add New Field</button>
            </Link>
            {/*TODO ----------------function update*/}
            <button>Update Field</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the field code" value={deleteFieldCode}
                   onChange={(e) => setDeleteFieldCode(e.target.value)}/>
            <button onClick={handleDeleteField}>Delete Field</button>
            <br/>
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