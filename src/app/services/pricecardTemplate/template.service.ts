import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PriceCard} from '../../classes/pricecard/price-card';
import {Template} from '@angular/compiler/src/render3/r3_ast';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { }

  private url = `http://${environment.api_url}`;

  public getTemplates(): Observable<any> {
    return this.http.get<PriceCard>(this.url + '/api/v1/templates');
  }

  public postTemplate(template: PriceCard): Observable<any> {
    return this.http.post<PriceCard>(this.url + '/api/v1/templates', template);
  }

  public getTemplate(id): Observable<any> {
    return this.http.get<PriceCard>(this.url + `/api/v1/templates/${id}`);
  }

  public deleteTemplate(id): Observable<any>{
    return this.http.delete(this.url + `/api/v1/templates/${id}`);
  }

  public searchTemplate(search): Observable<PriceCard[]>{
    return this.http.post<any>(this.url + `/api/v1/templates/search`, search );
  }
}
