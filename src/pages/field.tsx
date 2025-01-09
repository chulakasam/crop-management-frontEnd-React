import {Link} from "react-router";

export function Field(){
    return (
        <>
            <br/>
            Field Management
            <Link to="/field/addField"><button>Add New Field</button></Link>
        </>
    )
}