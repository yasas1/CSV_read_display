import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CsvReadserviceService {

  constructor(private _http:HttpClient) { } 

  getcsvdata(){
    return this._http.get('http://127.0.0.1:3000/users/csv',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
}
