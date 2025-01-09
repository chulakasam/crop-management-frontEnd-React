import {Link} from "react-router";

export function Log(){
    return (
        <>
        <br/>

            Monitoring logs Management
            <Link to="/log/addLog"><button>Add New Monitoring Log</button></Link>
        </>
    )
}