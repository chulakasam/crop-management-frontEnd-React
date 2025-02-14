export default class Field{
    fieldCode!:string;
    fieldName!:string;
    location!:string;
    fieldSize!:number;
    fieldImg01!:string;
    fieldImg02!:string;

    constructor(fieldCode:string,fieldName:string,location:string,fieldSize:number,fieldImg01:string,fieldImg02:string) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.location = location;
        this.fieldSize = fieldSize;
        this.fieldImg01 = fieldImg01;
        this.fieldImg02 = fieldImg02;
    }


}


