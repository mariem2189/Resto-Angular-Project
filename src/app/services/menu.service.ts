import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuURL = 'http://localhost:3003/api/menus';
  constructor(private httpClient:HttpClient) { }

  addMenu(obj:any, image:File){
    console.log('Here obj into service', obj);
    
    const formData = new FormData();
    formData.append('name', obj.name); 
    formData.append('description', obj.descripiton); 
    formData.append('price', obj.price); 
    formData.append('image', image); 
    return this.httpClient.post(`${this.menuURL}/add`, formData);
  }
}
