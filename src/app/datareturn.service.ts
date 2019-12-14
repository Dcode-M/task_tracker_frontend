import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatareturnService {

  GETFROMDJANGO = 'http://127.0.0.1:8000/api/get/details/' // Api URL
  DJANGO_SERVER: string = 'http://127.0.0.1:8000';   //the django server
  constructor(private gethttp:HttpClient) { } //injecting the httpclient module to the service constructor


  public getData(){                 // A function that takes the instance of the formdata and send it to the django endpoint using post request
    return this.gethttp.get<any>(`${this.GETFROMDJANGO}`)
  }
}
