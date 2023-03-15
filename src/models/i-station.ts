import { IAddress } from "./i-address";
import { IAvailibility } from "./i-availibility";
import { IUser } from "./i-user";

export interface IStation{
    id : number,
    name : string,
    model : string,
    image : string,
    createAt : Date,
    user : IUser,
    address : IAddress,
    avaibilities : IAvailibility[]
}