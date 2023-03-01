export class Address {
    private _city : string;
    private _streetName : string;
    private _streetNumber : string;

    constructor(city:string, streetName:string, streetNumber:string ) {
        this._city = city;
        this._streetName = streetName;
        this._streetNumber = streetNumber;
    }

    
    public get city() : string {
        return this._city;
    }
    
    public set city (city : string) {
        this._city = city;
    }
    
    
    public get streetName() : string {
        return this._streetName;
    }
    
    
    public set streetName (streetName : string) {
        this._streetName = streetName;
    }
    
    public get streetNumber() : string {
        return this._streetNumber;
    }
    
    
    public set streetNumber (streetNumber : string) {
        this._streetNumber = streetNumber;
    }
    
    
}