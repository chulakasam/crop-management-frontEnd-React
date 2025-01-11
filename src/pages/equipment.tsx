import {Link} from "react-router";

export function Equipment(){
    return(
        <>

            <br/>

            Equipment Management
            <br/>
            <Link to="/equipment/addEquipment"><button>Add New Equipment</button></Link>

            {/*TODO ----------------function update*/}
            <button>Update Equipment</button>

            {/*TODO ----------------function delete*/}
            <button>Delete Equipment</button>

        </>
    )
}