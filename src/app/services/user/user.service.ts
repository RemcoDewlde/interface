import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PriceCard} from '../../classes/pricecard/price-card';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = `http://${environment.api_url}`;

  public getUser(id): Observable<any> {
    return this.http.get<PriceCard>(this.url + `/api/v1/users/${id}`);
  }

  public getApiStatus(): Observable<any> {
    return this.http.get(this.url + `/api/v1/online`);
  }
}
