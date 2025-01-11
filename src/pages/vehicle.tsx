import {Link} from "react-router";

export function Vehicle() {
    return (
        <>
            <br/>

            Vehicle Management
            <br/>
            <Link to="/vehicle/addVehicle"><button>Add New Vehicle</button></Link>
            {/*TODO ----------------function update*/}
            <button>Update Vehicle</button>

            {/*TODO ----------------function delete*/}
            <button>Delete Vehicle</button>
        </>
    )
}