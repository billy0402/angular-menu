import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  serverIp: string = environment.serverIp;

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get<any>(this.serverIp + url, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  postData(url, data) {
    return this.http.post<any>(this.serverIp + url, data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

}
