import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {QuoteService} from './service/quote.service';
import {QuoteDetail} from './service/model/QuoteDetail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuoteService, QuoteDetail]
})

export class AppComponent implements OnInit {
  constructor(private apiSerivce: QuoteService, private http: Http, public quoteObject: QuoteDetail) {
  }
  ngOnInit(): void {
    this.apiSerivce.getQuoteJsonData().subscribe(data => {
      this.quoteObject = data;
      console.log(this.quoteObject);
    });
  }
}
