import {Link} from "react-router";

export function Field(){
    return (
        <>
            <br/>
            Field Management
            <br/>
            <Link to="/field/addField"><button>Add New Field</button></Link>
            {/*TODO ----------------function update*/}
            <button>Update Field</button>

            {/*TODO ----------------function delete*/}
            <button>Delete Field</button>
        </>
    )
}