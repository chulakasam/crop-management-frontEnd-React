export function AddField(){
    return (
        <>
            <br/>
            <div>
                <h2>Add New Field</h2>
                <form>
                    <label>Field Name: <input type="text" name="name"/></label><br/>
                    <label>Location: <input type="text" name="location"/></label><br/>
                    <button type="submit">Add Field</button>
                </form>
            </div>
        </>
    )
}