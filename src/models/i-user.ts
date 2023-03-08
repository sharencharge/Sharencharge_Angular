import { IAddress } from "./i-address";
import { IStation } from "./i-station";

export interface IUser{
    id : number,
    firstname : string,
    lastname : string,
    username : string,
    email : string,
    phoneNumber : string,
    urlAvatar : string,
    stations : IStation[],
    addresses : IAddress[],
    /*
    roles : IRole[],
    rents : IRents[]
*/
}