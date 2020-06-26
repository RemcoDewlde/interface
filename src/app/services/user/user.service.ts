import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PriceCard} from '../../classes/pricecard/price-card';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../../classes/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private url = `http://${environment.api_url}`;

  public getUser(id): Observable<any> {
    return this.http.get<User>(this.url + `/api/v1/users/${id}`);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + `/api/v1/users`);
  }

  public searchUser(search): Observable<User[]>{
    return this.http.post<User[]>(this.url + `/api/v1/users/search`, search);
  }

  public getApiStatus(): Observable<any> {
    return this.http.get(this.url + `/api/v1/online`);
  }
}
