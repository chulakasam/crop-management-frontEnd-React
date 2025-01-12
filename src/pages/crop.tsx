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

            Crop Management
            <br/>
            <Link to="/crop/addCrop">
                <button>Add New Crop</button>
            </Link>
            {/*TODO ----------------function update*/}
            <button>Update Crop</button>

            {/*TODO ----------------function delete*/}
            <input type="text" placeholder="enter the crop code" value={deleteCropCode}
                   onChange={(e) => setDeleteCropCode(e.target.value)}/>

            <button onClick={handleDeleteCrop}>Delete Crop</button>
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