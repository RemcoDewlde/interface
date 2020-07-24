import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Feature} from '../../classes/feature/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private url = `http://${environment.api_url}`;

  constructor(private http: HttpClient) { }

  public getAllFeatureRequests(): Observable<any> {
    return this.http.get(this.url + '/api/v1/feature');
  }

  public postFeature(feature: Feature): Observable<any> {
    return this.http.post<Feature>(this.url + '/api/v1/feature', feature);
  }

  public deleteFeature(id): Observable<any>{
    return this.http.delete(this.url + `/api/v1/feature/${id}`);
  }

}
