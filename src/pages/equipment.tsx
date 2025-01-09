import {Link} from "react-router";

export function Equipment(){
    return(
        <>

            <br/>

            Equipment Management
            <Link to="/equipment/addEquipment"><button>Add New Equipment</button></Link>

        </>
    )
}