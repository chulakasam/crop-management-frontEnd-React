export function AddEquipment() {
    return (
        <>
            <br/>
            <div>
                <h2>Add New Equipment</h2>
                <form>
                    <label>Equipment Name: <input type="text" name="name"/></label><br/>
                    <label>Type: <input type="text" name="type"/></label><br/>
                    <button type="submit">Add Equipment</button>
                </form>
            </div>

        </>
    )
}