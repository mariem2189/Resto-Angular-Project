import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:3003/api/users';
  constructor(private httpClient:HttpClient) { }

  login(user:any){
    return this.httpClient.post(`${this.userURL}/login`, user);
  }
  signup(user:any){
    return this.httpClient.post(`${this.userURL}/signup`, user);
  }
}
