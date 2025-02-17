export default class Staff {
    staffId: string;
    name: string;
    position: string;
    gender: string;
    joinedDate: string;
    dob: string;
    contactNo: number;
    email: string;
    address: string;
    LicenseNo: string;

    constructor(staffId: string, name: string, position: string, gender: string, joinedDate: string, dob: string, contactNo: number, email: string, address: string, LicenseNo: string) {
        this.staffId = staffId;
        this.name = name;
        this.position = position;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.dob = dob;
        this.contactNo = contactNo;
        this.email = email;
        this.address = address;
        this.LicenseNo = LicenseNo;
    }
}
