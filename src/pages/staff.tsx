import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent, useEffect, useState} from "react";
import * as React from "react";
import { getAllStaff, removeStaff, updatingStaff} from "../slice/StaffSlice.ts";
import {AppDispatch} from "../store/store.ts";




export function Staff(){
    const staff = useSelector((state:any) => state.staff);
    const dispatch = useDispatch<AppDispatch>();
    const [deleteStaffId, setDeleteStaffId] = useState('');

    const [searchStaffId,setSearchStaffId] = useState('');
    const [foundStaff,setFoundStaff] = useState<any | null>(null);

    const [newStaffname, setNewStaffName] = useState('');
    const [newPosition, setNewPosition] = useState('');
    const [newGender, setNewGender] = useState('');
    const [newJoined_date, setNewJoined_date] = useState('');
    const [newdob, setNewdob] = useState('');
    const [newContact_no, setNewContact_no] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newLicenseNo, setNewLicenseNo] = useState('');


    useEffect(() => {
        dispatch(getAllStaff());
    }, [dispatch]);

    function handleDeleteStaff(event:React.FormEvent){
        event.preventDefault();
        if (!deleteStaffId) {
            alert('Please enter the staff ID to delete.');
            return;
        }
        dispatch(removeStaff(deleteStaffId));
        setDeleteStaffId('');
    }


    function handleSearchStaff(event:React.FormEvent){
        event.preventDefault();
        const found = staff.find((s: any) => s.staffId === searchStaffId);
        if (found) {
            setFoundStaff(found);
            setNewStaffName(found.name);
            setNewPosition(found.position);
            setNewGender(found.gender);
            setNewJoined_date(found.joinedDate);
            setNewdob(found.dob);
            setNewContact_no(found.contactNo);
            setNewEmail(found.email);
            setNewAddress(found.address);
            setNewLicenseNo(found.licenseNo);
        } else {
            alert('staff not found.');
            setFoundStaff(null);
        }
    }

    function handleUpdateStaff (event: React.FormEvent) {
        event.preventDefault();

        const updatedStaff={
            staffId: searchStaffId,
            name: newStaffname,
            position: newPosition,
            gender: newGender,
            joinedDate: newJoined_date,
            dob: newdob,
            contactNo: newContact_no,
            email: newEmail,
            address: newAddress,
            LicenseNo: newLicenseNo,
        }

        dispatch(updatingStaff(updatedStaff));
        setNewStaffName('');
        setNewPosition('');
        setNewGender('');
        setNewJoined_date('');
        setNewdob('');
        setNewContact_no('');
        setNewEmail('');
        setNewAddress('');
        setNewLicenseNo('');
        alert('staff successfully updated !')
    }




    return (
        <>
            <h2 className="text-3xl font-bold text-gray-800"><i className="fas fa-users text-green-500 text-3xl"></i> Staff
                Management</h2>
            <br/>

            <Link to="/staff/addStaff">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add
                    New Staff
                </button>
            </Link>


            {/*TODO ----------------function update*/}
            <input type="text" placeholder="Staff ID to search" value={searchStaffId}
                   onChange={(e) => setSearchStaffId(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleSearchStaff}
                    className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Search
                Staff
            </button>
            {/*TODO ----------------function delete*/}
            <input type="text" placeholder='enter the staff ID' value={deleteStaffId}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setDeleteStaffId(e.target.value)}
                   className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <button onClick={handleDeleteStaff}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete
                Staff
            </button>
            <div className="max-w-8xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                    {foundStaff && (
                        <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Staff</h3>

                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Staff Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <p>
                                        <strong className="text-gray-600">Name:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.name}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Position:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.position}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Gender:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.gender}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Joined Date:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.joinedDate}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Date of Birth:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.dob}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Contact No:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.contactNo}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Email:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.email}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Address:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.address}</span>
                                    </p>
                                    <p>
                                        <strong className="text-gray-600">Vehicle ID:</strong>{" "}
                                        <span className="text-gray-900">{foundStaff.LicenseNo}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Staff Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <input
                                        type="text"
                                        value={newStaffname}
                                        onChange={(e) => setNewStaffName(e.target.value)}
                                        placeholder="New Staff Name"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newPosition}
                                        onChange={(e) => setNewPosition(e.target.value)}
                                        placeholder="New Position"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newGender}
                                        onChange={(e) => setNewGender(e.target.value)}
                                        placeholder="New Gender"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <input
                                        type="date"
                                        value={newJoined_date}
                                        onChange={(e) => setNewJoined_date(e.target.value)}
                                        placeholder="New Joined Date"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <input
                                        type="date"
                                        value={newdob}
                                        onChange={(e) => setNewdob(e.target.value)}
                                        placeholder="New Date of Birth"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newContact_no}
                                        onChange={(e) => setNewContact_no(e.target.value)}
                                        placeholder="New Contact No"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        placeholder="New Email"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newAddress}
                                        onChange={(e) => setNewAddress(e.target.value)}
                                        placeholder="New Address"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <input
                                        type="text"
                                        value={newLicenseNo}
                                        onChange={(e) => setNewLicenseNo(e.target.value)}
                                        placeholder="New Vehicle ID"
                                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleUpdateStaff}
                                className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            >
                                Update Staff
                            </button>
                        </div>
                    )}


                    <div className=" max-w-8xl lg:w-1/1 overflow-x-auto">
                        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead>
                            <tr className="bg-teal-900 text-white text-left">
                                <th className="py-2 px-4 border-b">Staff ID</th>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Position</th>
                                <th className="py-2 px-4 border-b">Gender</th>
                                <th className="py-2 px-4 border-b">Joined Date</th>
                                <th className="py-2 px-4 border-b">Date of Birth</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Contact No</th>
                                <th className="py-2 px-4 border-b">Address</th>
                                <th className="py-2 px-4 border-b">Vehicle ID</th>
                            </tr>
                            </thead>
                            <tbody>
                            {staff.map((staffDetails: any, index: number) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-gray-100`}
                                >
                                    <td className="py-2 px-4 border-b">{staffDetails.staffId}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.name}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.position}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.gender}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.joinedDate}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.dob}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.email}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.contactNo}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.address}</td>
                                    <td className="py-2 px-4 border-b">{staffDetails.LicenseNo}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>



                </div>
            </div>

        </>
    )
}