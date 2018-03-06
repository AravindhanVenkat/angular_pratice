import 'rxjs/add/operator/map';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {QuoteDetail} from './model/QuoteDetail';
import {QuoteDataRequest} from './model/QuoteDataRequest';

@Injectable()
export class QuoteService {

  private actionUrl: string;
  private postUrl: string;
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.actionUrl = '/lcl/quote/carrierdetails';
    this.postUrl = '/lcl/quote/quoteRecord';

    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getQuoteJsonData(): Observable<QuoteDetail> {
    return this.http.get(this.actionUrl)
      .map((response: Response) => {
        return <QuoteDetail>response.json();
      });
  }

  postQuoteRequest(searchData: QuoteDataRequest): Promise<QuoteDetail> {
    return this.http
      .post(this.postUrl, JSON.stringify(searchData), this.options)
      .toPromise()
      .then(res => res.json() as QuoteDetail);
  }
}
