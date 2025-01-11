export function AddStaff(){
    return (
        <>
        <br/>

            <div>
                <h2>Add New Staff</h2>
                <form>
                    <label>Staff ID: <input type="text" name="staff_id"/></label><br/>
                    <label>Name: <input type="text" name="name"/></label><br/>
                    <label>Position: <input type="text" name="position"/></label><br/>
                    <label>Gender: <input type="text" name="gender"/></label><br/>
                    <label>Joined Date: <input type="text" name="joined_date"/></label><br/>
                    <label>Date of Birth: <input type="text" name="dob"/></label><br/>
                    <label>Contact No: <input type="text" name="dob"/></label><br/>
                    <label>Email: <input type="text" name="email"/></label><br/>
                    <label>Address: <input type="text" name="address"/></label><br/>
                    <label>Vehicle ID: <input type="text" name="vehicle_id"/></label><br/>

                    <button type="submit">Add Staff</button>

                </form>
            </div>

        </>
    )
}