import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private url = `http://${environment.api_url}`;

  constructor(private http: HttpClient) { }

  public getAllBugReports(): Observable<any> {
    return this.http.get(this.url + '/api/v1/bug');
  }

  public postBugReport(bug: any): Observable<any> {
    return this.http.post(this.url + '/api/v1/bug', bug);
  }

  public getBugReport(id): Observable<any>{
    return this.http.get(this.url + `/api/v1/bug/${id}`);
  }

  public deleteBugReport(id): Observable<any>{
    return this.http.delete(this.url + `/api/v1/bug/${id}`);
  }
}


