import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewStaff} from "../slice/StaffSlice.ts";

export function AddStaff(){
    const staff = useSelector((state:any) => state.staff);
    const dispatch = useDispatch();

    const [staffId, setStaffId] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [gender, setGender] = useState('');
    const [joinedDate, setJoinedDate] = useState('');
    const [dob, setDob] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email,setEmail]=useState('');
    const [address, setAddress] = useState('');
    const [vehicleId,setVehicleId]=useState('');

    function handleSubmitStaff(event: React.FormEvent){

        event.preventDefault();

        dispatch(addNewStaff ({staffId,name,position,gender,joinedDate,dob,contactNo,email,address,vehicleId}));


        setStaffId('');
        setName('');
        setPosition('');
        setGender('');
        setJoinedDate('');
        setDob('');
        setContactNo('');
        setEmail('');
        setAddress('');
        setVehicleId('');
    }





    return (
        <>
            <br/>

            <div>
                <h2>Add New Staff</h2>
                <form>
                    <label>Staff ID: <input type="text" name="staff_id" value={staffId}
                                            onChange={(e) => setStaffId(e.target.value)}/></label><br/>
                    <label>Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/></label><br/>
                    <label>Position: <input type="text" name="position" value={position}
                                            onChange={(e) => setPosition(e.target.value)}/></label><br/>
                    <label>Gender: <input type="text" name="gender" value={gender}
                                          onChange={(e) => setGender(e.target.value)}/></label><br/>
                    <label>Joined Date: <input type="text" name="joined_date" value={joinedDate}
                                               onChange={(e) => setJoinedDate(e.target.value)}/></label><br/>
                    <label>Date of Birth: <input type="text" name="dob" value={dob}
                                                 onChange={(e) => setDob(e.target.value)}/></label><br/>
                    <label>Contact No: <input type="text" name="contact_no" value={contactNo}
                                              onChange={(e) => setContactNo(e.target.value)}/></label><br/>
                    <label>Email: <input type="text" name="email" value={email}
                                         onChange={(e) => setEmail(e.target.value)}/></label><br/>
                    <label>Address: <input type="text" name="address" value={address}
                                           onChange={(e) => setAddress(e.target.value)}/></label><br/>
                    <label>Vehicle ID: <input type="text" name="vehicle_id" value={vehicleId}
                                              onChange={(e) => setVehicleId(e.target.value)}/></label><br/>

                    <button type="submit" onClick={handleSubmitStaff}>Add Staff</button>

                </form>
                <br/>

                <ul>
                    {staff.map((stafffDetails: any, index: number) => (
                        <li key={index}>
                            {stafffDetails.staffId}, {stafffDetails.name},{stafffDetails.position},{stafffDetails.gender},{stafffDetails.joinedDate},{stafffDetails.dob},{stafffDetails.email},{stafffDetails.contactNo},{stafffDetails.address},{stafffDetails.vehicleId}
                        </li>
                    ))}
                </ul>

            </div>


        </>
    )
}