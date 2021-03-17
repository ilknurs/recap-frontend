import { ResponseModel } from "../ResponseModel";
import { Rental } from "./rental";

export interface RentalResponseModel extends  ResponseModel{
    data:Rental[];
}