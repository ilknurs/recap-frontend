import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/entities/car';
import { CarImage } from 'src/app/models/entities/carImage';
import { CarService } from 'src/app/services/car/car.service';
import { CarimageService } from 'src/app/services/carImage/carimage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: Car[]=[];
  carImages:CarImage[]=[];
  apiUrl: string =  "https://localhost:44321/";


  constructor(private carImageService:CarimageService, private activatedRoute: ActivatedRoute,
    private carService:CarService) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params['id']){
          this.getCarImagesById(params['id'])
          this.getCarsByCar(params['id'])
        }
      })
    }

  getCarImagesById(id:number){
    this.carImageService.getCarImagesById(id).subscribe(response=>{
      this.carImages=response.data;
    })
   }
  getCarsByCar(id:number){
    this.carService.getCarsByCar(id).subscribe(response=>{
      this.cars=response.data;
   
    })
  }
  
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

}
