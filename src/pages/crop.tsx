import {Link} from "react-router";

export function Crop(){
    return(
        <>
        <br/>

            Crop Management
            <Link to="/crop/addCrop"><button>Add New Crop</button></Link>
        </>
    )
}