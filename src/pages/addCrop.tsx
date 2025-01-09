export function AddCrop() {
    return (
        <>
            <br/>
            <div>
                <h2>Add New Crop</h2>
                <form>
                    <label>Crop Name: <input type="text" name="crop_name"/></label><br/>
                    <label>Type: <input type="text" name="type"/></label><br/>
                    <button type="submit">Add Crop</button>
                </form>
            </div>
        </>
    )
}