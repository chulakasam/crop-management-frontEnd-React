import {Link} from "react-router";

export function Log(){
    return (
        <>
        <br/>

            Monitoring logs Management
            <br/>
            <Link to="/log/addLog"><button>Add New Monitoring Log</button></Link>
            {/*TODO ----------------function update*/}
            <button>Update Monitoring Log</button>

            {/*TODO ----------------function delete*/}
            <button>Delete Monitoring Log</button>
        </>
    )
}