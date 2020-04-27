import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuidesService {

  private url = `http://${environment.api_url}`;

  constructor(private httpClient: HttpClientModule, private http: HttpClient) { }

  public getAllGuides(): Observable<any> {
    return this.http.get(this.url + '/api/v1/guides');
  }

}
