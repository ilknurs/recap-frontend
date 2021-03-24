import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/entities/car';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44321/api/';

  constructor(private httpClient: HttpClient) {}

  getCarsByCar(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getcardtobyid?Id="+id
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
  
   }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getcardetails"
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
}
