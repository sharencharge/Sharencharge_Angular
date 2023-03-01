import { Address } from "./address";
import { User } from "./user";

export class Station {
    private _id : number;
    private _name : string;
    private _model : string;
    private _imageURL : string;
    private _address : Address;
    private _user : User;

    constructor(id : number, name :string, model: string,imageURL : string, address: Address, user: User) {
        this._id = id;
        this._name = name;
        this._model = model;
        this._imageURL = imageURL
        this._address = address;
        this._user = user;
    }
    
    public get id() : number {
        return this._id;
    }
    
    public set id(id : number) {
        this._id = id;
    }
        
    public get name() : string {
        return this._name;
    }
    
    public set name(name : string) {
        this._name = name;
    }
     
    public get model() : string {
        return this._model;
     }
     
    public set model(model : string) {
        this._model = model;
     }
    public get imageURL() : string {
        return this._imageURL;
     }
     
    public set imageURL(imageURL : string) {
        this._imageURL = imageURL;
     }

    public get address() : Address {
        return this._address;
     }
     
     public set address(address : Address) {
        this._address = address;
     }
    
     public get user() : User {
        return this._user;
     }
     
     public set user(user : User) {
        this._user = user;
     }
     
     

    
}