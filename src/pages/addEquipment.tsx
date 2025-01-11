export function AddEquipment() {
    return (
        <>
            <br/>
            <div>
                <h2>Add New Equipment</h2>
                <form>
                    <label>Equipment ID: <input type="text" name="equipment_id"/></label><br/>
                    <label>Equipment Name: <input type="text" name="name"/></label><br/>
                    <label>Type: <input type="text" name="type"/></label><br/>
                    <label>Status: <input type="text" name="status"/></label><br/>
                    <label>Staff ID: <input type="text" name="staff_id"/></label><br/>
                    <label>Field Code: <input type="text" name="field_code"/></label><br/>
                    <button type="submit">Add Equipment</button>
                </form>
            </div>

        </>
    )
}