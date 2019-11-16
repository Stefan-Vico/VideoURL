import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL: string = 'https://video-test.cbfsident.com/api/v1/stream';

  constructor(private httpClient: HttpClient) {}

  currentUserAuthData:string = JSON.parse(localStorage.getItem('usersForChat'));
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Basic ${this.currentUserAuthData}`,
    })
  };

  public getStreamId(){
      return this.httpClient.get(`/api/register`, this.httpOptions);
  }

}
