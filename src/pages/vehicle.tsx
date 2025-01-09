import {Link} from "react-router";

export function Vehicle() {
    return (
        <>
            <br/>

            Vehicle Management
            <Link to="/vehicle/addVehicle"><button>Add New Vehicle</button></Link>
        </>
    )
}