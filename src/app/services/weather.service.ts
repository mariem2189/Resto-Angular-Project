import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURL = 'http://localhost:3003/api/weather'
  constructor(private httpClient:HttpClient) { }

  saerchByCountry(weather:any){
   return this.httpClient.post<{result:any}>(`${this.weatherURL}/search`, weather);
  }
}
