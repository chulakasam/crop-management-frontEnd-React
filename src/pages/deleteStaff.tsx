export function DeleteStaff(){
    return (
        <>
            <br/>
            <div>
                <h2>Delete Staff</h2>
                <form>
                    <label>Name: <input type="text" name="name"/></label><br/>
                    <label>Position: <input type="text" name="position"/></label><br/>
                    <button type="submit">Delete Staff</button>
                </form>
            </div>
        </>
    )
}