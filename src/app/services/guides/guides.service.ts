import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuidesService {

  private url = `http://${environment.api_url}`;

  constructor(private httpClient: HttpClientModule, private http: HttpClient) {
  }

  public getAllGuides(): Observable<any> {
    return this.http.get(this.url + '/api/v1/guides');
  }

  public postGuide(guide): Observable<any> {
    return this.http.post(this.url + '/api/v1/guides', guide);
  }

  public searchGuide(search): Observable<any> {
    return this.http.post(this.url + `/api/v1/guides/search`, search);
  }

  public getGuide(id): Observable<any> {
    return this.http.get(this.url + `/api/v1/guides/${id}`);
  }

  public updateGuide(body): Observable<any> {
    return this.http.patch(this.url + `/api/v1/guides/`, body);
  }

  public deleteGuide(id): Observable<any>{
    return this.http.delete(this.url + `/api/v1/guides/${id}`);
  }

}
