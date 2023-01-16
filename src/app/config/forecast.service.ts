import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(
    private http: HttpClient,   
    ) { }
    getForecast(quiry:string,d:number,q:string): Observable<any> {
      return this.http.get<any>('http://api.weatherapi.com/v1/forecast.json?key=ea4c406db2674a93aaf111338222507&q='+quiry+'&days='+d+'&aqi='+q+'&alerts=no');
    }
    getSearch(quiry:string): Observable<any> {
      return this.http.get<any>('http://api.weatherapi.com/v1/search.json?key=ea4c406db2674a93aaf111338222507&q= '+ quiry)
    }

}
