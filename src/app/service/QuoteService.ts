import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {QuoteDetail} from './model/QuoteDetail';

import 'rxjs/Rx';

@Injectable()
export class QuoteService {

  private _getURL = '/lcl/quote/carrierdetails';

  constructor(private http: Http) {
  }

  getQuoteJsonData(): Observable<QuoteDetail[]> {
    return this.http.get(this._getURL)
      .map((response: Response) => {
        return <QuoteDetail[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
