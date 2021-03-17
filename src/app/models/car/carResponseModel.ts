import { ResponseModel } from "../ResponseModel";
import { Car } from "./car";


export interface CarResponeModel extends ResponseModel{
    data:Car[];
    
}