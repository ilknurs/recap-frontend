import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/entities/carImage';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl= 'https://localhost:44321/api/';

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl + "carimages/getall"
return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
 };

 getCarImagesById(id:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl + "carimages/getimagesbycarid?id=" + id
return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
 };
}
