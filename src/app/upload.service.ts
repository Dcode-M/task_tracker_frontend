import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  DJANGO_SERVER: string = 'http://127.0.0.1:8000';   //the django server
  constructor(private http:HttpClient) { } //injecting the httpclient module to the service constructor

  public upload(formData){                 // A function that takes the instance of the formdata and send it to the django endpoint using post request
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/document/`,formData)
  }
}
