import {Link} from "react-router";

export function Staff(){
    return (
        <>
            <br/>
            Staff Management
            <Link to="/staff/addStaff"><button>Add New Staff</button></Link>


            {/*TODO ----------------function add*/}
           <button>Update Staff</button>

            {/*TODO ----------------function add*/}
           <button>Delete Staff</button>



        </>
    )
}