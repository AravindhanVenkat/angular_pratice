import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {QuoteDetail} from './model/QuoteDetail';

@Injectable()
export class QuoteService {

  private actionUrl: string;

  constructor(private http: Http) {
    this.actionUrl = '/lcl/quote/carrierdetails';
  }

  getQuoteJsonData(): Observable<QuoteDetail> {
    return this.http.get(this.actionUrl)
      .map((response: Response) => {
        return <QuoteDetail>response.json();
      });
  }
}
