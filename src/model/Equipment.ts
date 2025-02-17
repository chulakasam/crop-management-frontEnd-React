export default class Equipment {
    equipmentId: string;
    equipmentName: string;
    equipmentType: string;
    equipmentStatus: string;
    staffId: string;
    fieldCode: string;

    constructor(equipmentId: string, equipmentName: string, equipmentType: string, equipmentStatus: string, staffId: string, fieldCode: string) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.equipmentType = equipmentType;
        this.equipmentStatus = equipmentStatus;
        this.staffId = staffId;
        this.fieldCode = fieldCode;
    }
}
