import { Purchase } from "./Purchase";

export interface Order{
    IdType:string,
    IdClient:number,
    ClientName:string,
    Purchases:Purchase[]
}