import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {QuoteService} from './service/QuoteService';
import {QuoteDetail} from './service/model/QuoteDetail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuoteService]
})

export class AppComponent implements OnInit {
  public _getQuoteJsonData: QuoteDetail[];

  constructor(private apiSerivce: QuoteService, private http: Http) {
  }

  private _getURL = '/lcl/quote/carrierdetails';
  getQuoteDetail(): void {
    this.apiSerivce.getQuoteJsonData()
      .subscribe(resultArray => this._getQuoteJsonData = resultArray,
      error => console.log('Error :: ' + error)
      );
  }

  ngOnInit(): void {
    this.getQuoteDetail();
  }
}
