export function AddLog(){
    return (
        <>
            <br/>
            <div>
                <h2>Add New Monitoring Log</h2>
                <form>
                    <label>Log Name: <input type="text" name="log_name"/></label><br/>
                    <label>Observation: <input type="text" name="observation"/></label><br/>
                    <button type="submit">Add Monitoring Log</button>
                </form>
            </div>
        </>
    )
}