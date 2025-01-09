export function AddVehicle(){
    return(
        <>
            <br/>
            <div>
                <h2>Add New Vehicle</h2>
                <form>
                    <label>Vehicle Name: <input type="text" name="name"/></label><br/>
                    <label>License No: <input type="text" name="license_no"/></label><br/>
                    <button type="submit">Add Vehicle</button>
                </form>
            </div>
        </>
    )
}