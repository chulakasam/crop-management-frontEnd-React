import {Link} from "react-router";

export function Staff(){
    return (
        <>
            <br/>
            Staff Management
            <Link to="/staff/addStaff"><button>Add New Staff</button></Link>
            <Link to="/staff/updateStaff"><button>Update Staff</button></Link>
            <Link to="/staff/deleteStaff"><button>Delete Staff</button></Link>


        </>
    )
}