import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewStaff, saveStaff} from "../slice/StaffSlice.ts";
import {AppDispatch} from "../store/store.ts";
import Staff from "../model/Staff.ts";

export function AddStaff(){
    const staff = useSelector((state:any) => state.staff);
    const dispatch = useDispatch<AppDispatch>();

    const [staffId, setStaffId] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [gender, setGender] = useState('');
    const [joinedDate, setJoinedDate] = useState('');
    const [dob, setDob] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email,setEmail]=useState('');
    const [address, setAddress] = useState('');
    const [LicenseNo,setLicenseNo]=useState('');

    function handleSubmitStaff(event: React.FormEvent){
event.preventDefault();
        // event.preventDefault();
        //
        // dispatch(addNewStaff ({staffId,name,position,gender,joinedDate,dob,contactNo,email,address,vehicleId}));
        //
        //
        // setStaffId('');
        // setName('');
        // setPosition('');
        // setGender('');
        // setJoinedDate('');
        // setDob('');
        // setContactNo('');
        // setEmail('');
        // setAddress('');
        // setVehicleId('');
        const newStaff = new Staff(staffId,name,position,gender,joinedDate,dob,Number(contactNo),email,address,LicenseNo)
        dispatch(saveStaff(newStaff))
        alert("Staff Add Successfully");
    }




    return (
        <>
            <br/>
            <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Staff</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="staff_id" className="block text-sm font-medium text-gray-700">
                            Staff ID
                        </label>
                        <input
                            type="text"
                            id="staff_id"
                            name="staff_id"
                            value={staffId}
                            onChange={(e) => setStaffId(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                            Position
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            Gender
                        </label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="joined_date" className="block text-sm font-medium text-gray-700">
                            Joined Date
                        </label>
                        <input
                            type="text"
                            id="joined_date"
                            name="joined_date"
                            value={joinedDate}
                            onChange={(e) => setJoinedDate(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                            Date of Birth
                        </label>
                        <input
                            type="text"
                            id="dob"
                            name="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="contact_no" className="block text-sm font-medium text-gray-700">
                            Contact No
                        </label>
                        <input
                            type="text"
                            id="contact_no"
                            name="contact_no"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="vehicle_id" className="block text-sm font-medium text-gray-700">
                            Vehicle ID
                        </label>
                        <input
                            type="text"
                            id="vehicle_id"
                            name="vehicle_id"
                            value={LicenseNo}
                            onChange={(e) => setLicenseNo(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmitStaff}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Add Staff
                    </button>
                </form>
            </div>

            <br/>
            <ul>
                {staff.map((stafffDetails: any, index: number) => (
                    <li key={index}>
                        {stafffDetails.staffId}, {stafffDetails.name},{stafffDetails.position},{stafffDetails.gender},{stafffDetails.joinedDate},{stafffDetails.dob},{stafffDetails.email},{stafffDetails.contactNo},{stafffDetails.address},{stafffDetails.vehicleId}
                    </li>
                ))}
            </ul>


        </>
    )
}