import { IAvailibility } from "./i-availibility";

export interface IRent{
    id: number,
    byuAt: Date,
    status: string,
    availabilities: IAvailibility []
}