import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  GETFROMDJANGO = 'http://127.0.0.1:8000/api/get/report/' // Api URL
  constructor(private gethttp:HttpClient) { } //injecting the httpclient module to the service constructor


  public getReport(){                
    return this.gethttp.get<any>(`${this.GETFROMDJANGO}`)
  }
}
