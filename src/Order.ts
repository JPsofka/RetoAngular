import { Purchase } from "./Purchase";

export interface Order{
    IdType:string,
    IdCient:number,
    ClientName:string,
    Purchases:Purchase[]
}