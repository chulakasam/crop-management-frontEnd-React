import {Link} from "react-router";


export function Staff(){

    return (
        <>

            <br/>
            Staff Management
            <br/>

            <Link to="/staff/addStaff">
                <button>Add New Staff</button>
            </Link>


            {/*TODO ----------------function update*/}
            <button>Update Staff</button>

            {/*TODO ----------------function delete*/}
            <button>Delete Staff</button>



        </>
    )
}