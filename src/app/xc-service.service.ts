import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class XcServiceService {

  constructor(private http: HttpClient) { }

  private f200jsonUrl = 'assets/xcfiles.json';
  // private f200jsonUrl = 'https://api.airtable.com/v0/appgVTix76WgWvjRQ/xcfiles?api_key=key4U3BbeXwLMdTGd';
  private f200excellUrl = 'https://api.airtable.com/v0/app5BmCRNauW3PZwl/Магазин?';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getf200json(date: string): Observable<any> {
    const headers1 = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers1 };
    // const params1 = new HttpParams().set('id', '3');
    // const options = { headers: headers1, params: params1 };
    // const url = `${this.f200jsonUrl}/${date}`;
    const url = `${this.f200jsonUrl}`;
    console.log('in http');
    return this.http.get(url);
  }
}
