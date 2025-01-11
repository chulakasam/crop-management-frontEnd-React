export function AddLog(){
    return (
        <>
            <br/>
            <div>
                <h2>Add New Monitoring Log</h2>
                <form>
                    <label>Log Code: <input type="text" name="log_code"/></label><br/>
                    <label>Date: <input type="text" name="log_date"/></label><br/>
                    <label>Observation: <input type="text" name="observation"/></label><br/>
                    <label>Log Image: <input type="text" name="log_image"/></label><br/>
                    <label>Field Code: <input type="text" name="field_code"/></label><br/>
                    <label>Vehicle Code: <input type="text" name="vehicle_code"/></label><br/>
                    <label>Crop Code: <input type="text" name="crop_code"/></label><br/>
                    <label>Staff Code: <input type="text" name="staff_code"/></label><br/>
                    <button type="submit">Add Monitoring Log</button>
                </form>
            </div>
        </>
    )
}