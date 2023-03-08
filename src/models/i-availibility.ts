import { IRent } from "./i-rent";
import { IStation } from "./i-station";

export interface IAvailibility{
    id : number,
    beginHour : string,
    endHour : string,
    weekDay : string,
    duration : number,
    price : number,
    station : IStation,
    rents : IRent[]
    
}