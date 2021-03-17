import { ResponseModel } from "../ResponseModel";
import { Color } from "./color";


export interface ColorResponeModel extends ResponseModel{
    data:Color[];
    
}