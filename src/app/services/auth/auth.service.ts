import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../classes/user/user';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private url = `http://${environment.api_url}`;

  constructor(private httpClient: HttpClientModule, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public postRegisterUser(data): Observable<any> {
    return this.http.post(`${this.url}/auth/signup`, data);
  }

  public LoginUser(data): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, data).pipe( map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (user instanceof User) {
        this.currentUserSubject.next(user);
      }
      return user;
    }));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public getMe(): Observable<any> {
    return this.http.get(`${this.url}/api/v1/me`);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
