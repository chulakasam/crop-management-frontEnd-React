export default class Vehicle{
    LicenseNo!:string;
    VehicleCode!:string;
    Category!:string;
    Status!:string;
    FuelType!:string;
    Remark!:string;


    constructor(LicenseNo:string,VehicleCode:string,Category:string,Status:string,FuelType:string,Remark:string) {
        this.LicenseNo = LicenseNo;
        this.VehicleCode = VehicleCode;
        this.Category = Category;
        this.Status = Status;
        this.FuelType = FuelType;
        this.Remark = Remark;
    }
}