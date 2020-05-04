import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PriceCard} from '../../classes/pricecard/price-card';

@Injectable({
  providedIn: 'root'
})
export class PreviousCardsService {

  constructor(private http: HttpClient) { }

  private url = `http://${environment.api_url}`;

  public getPriceCards(): Observable<any> {
    return this.http.get<PriceCard>(this.url + '/api/v1/pricecards');
  }

  public postPriceCards(priceCard: PriceCard): Observable<any> {
    return this.http.post<PriceCard>(this.url + '/api/v1/pricecards', priceCard);
  }

  public getPriceCard(id): Observable<any> {
    return this.http.get<PriceCard>(this.url + `/api/v1/pricecards/${id}`);
  }

  public deletePriceCard(id): Observable<any>{
    return this.http.delete(this.url + `/api/v1/pricecards/${id}`);
  }

  public searchPriceCard(search): Observable<any>{
    return this.http.post(this.url + `/api/v1/pricecards/search`, search );
  }
}
