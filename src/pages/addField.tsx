export function AddField(){
    return (
        <>
            <br/>
            <div>
                <h2>Add New Field</h2>
                <form>
                    <label>Field Code: <input type="text" name="field_code"/></label><br/>
                    <label>Field Name: <input type="text" name="name"/></label><br/>
                    <label>Location: <input type="text" name="location"/></label><br/>
                    <label>Field Size: <input type="text" name="field_size"/></label><br/>
                    <label>Field Image 01: <input type="text" name="field_image_01"/></label><br/>
                    <label>Field Image 02: <input type="text" name="field_image_02"/></label><br/>
                    <button type="submit">Add Field</button>
                </form>
            </div>
        </>
    )
}