import { ResponseModel } from "../ResponseModel";
import { Brand } from "./brand";

export interface BrandResponeModel extends ResponseModel{
    data:Brand[];
    
}