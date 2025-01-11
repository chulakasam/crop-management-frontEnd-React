export function AddVehicle(){
    return(
        <>
            <br/>
            <div>
                <h2>Add New Vehicle</h2>
                <form>
                    <label>License No: <input type="text" name="license_no"/></label><br/>
                    <label>Vehicle code: <input type="text" name="vehicle_code"/></label><br/>
                    <label>Category: <input type="text" name="category"/></label><br/>
                    <label>Status: <input type="text" name="status"/></label><br/>
                    <label>Fuel type: <input type="text" name="fuel_type"/></label><br/>
                    <label>Remark: <input type="text" name="remark"/></label><br/>

                    <button type="submit">Add Vehicle</button>
                </form>
            </div>
        </>
    )
}