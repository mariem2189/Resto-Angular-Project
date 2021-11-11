import { WeatherService } from './../../services/weather.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather:any={};
  weatherForm:FormGroup;
  result:any;
  constructor(private fb:FormBuilder,
    private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherForm = this.fb.group({
      country:['']
    })
  }

  search(){
    this.weatherService.saerchByCountry(this.weather).subscribe(
      (data)=> {
        console.log('Here data from BE', data.result); 
        this.result = data.result;     
      }
    )
  }

}
