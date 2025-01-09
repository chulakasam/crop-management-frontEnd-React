export function AddStaff(){
    return (
        <>
        <br/>
        add staff
            <div>
                <h2>Add New Staff</h2>
                <form>
                    <label>Name: <input type="text" name="name" /></label><br/>
                    <label>Position: <input type="text" name="position" /></label><br/>
                    <button type="submit">Add Staff</button>
                </form>
            </div>

        </>
    )
}