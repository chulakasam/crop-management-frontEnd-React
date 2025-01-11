import {Link} from "react-router";

export function Crop(){
    return(
        <>
        <br/>

            Crop Management
            <br/>
            <Link to="/crop/addCrop"><button>Add New Crop</button></Link>
            {/*TODO ----------------function update*/}
            <button>Update Crop</button>

            {/*TODO ----------------function delete*/}
            <button>Delete Crop</button>
        </>
    )
}