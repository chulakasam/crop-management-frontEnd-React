export function AddCrop() {
    return (
        <>
            <br/>
            <div>
                <h2>Add New Crop</h2>
                <form>
                    <label>Crop ID: <input type="text" name="crop_id"/></label><br/>
                    <label>Crop Name: <input type="text" name="crop_name"/></label><br/>
                    <label>Scientific Name: <input type="text" name="scientific_name"/></label><br/>
                    <label>Image: <input type="text" name="image"/></label><br/>
                    <label>Category: <input type="text" name="category"/></label><br/>
                    <label>Season: <input type="text" name="season"/></label><br/>
                    <label>Field Code: <input type="text" name="field_code"/></label><br/>
                    <button type="submit">Add Crop</button>
                </form>
            </div>
        </>
    )
}