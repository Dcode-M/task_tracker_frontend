import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatareturnService {

  GETFROMDJANGO = 'http://127.0.0.1:8000/api/get/details/' // Api URL
  constructor(private gethttp:HttpClient) { } //injecting the httpclient module to the service constructor


  public getData(){                
    return this.gethttp.get<any>(`${this.GETFROMDJANGO}`)
  }
}
