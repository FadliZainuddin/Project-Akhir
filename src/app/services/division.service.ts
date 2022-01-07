import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Divison } from '../model/divison.model';

const baseUrl = 'http://spa-api.aqiladigital.com/api/divisions'
@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http:HttpClient) { }
  
  getAll():Observable<Divison[]>{
    return this.http.get<Divison[]>(baseUrl);
  }
}
