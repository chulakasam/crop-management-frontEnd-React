export function UpdateStaff(){
    return(
        <>
            <br/>
            <div>
                <h2>Update Staff</h2>
                <form>
                    <label>Name: <input type="text" name="name"/></label><br/>
                    <label>Position: <input type="text" name="position"/></label><br/>
                    <button type="submit">Update Staff</button>
                </form>
            </div>
        </>
    )
}