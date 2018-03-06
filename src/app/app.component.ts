import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {QuoteService} from './service/quote.service';
import {QuoteDetail} from './service/model/QuoteDetail';
import {QuoteDataRequest} from './service/model/QuoteDataRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuoteService, QuoteDetail, QuoteDataRequest]
})

export class AppComponent implements OnInit {
  constructor(private apiSerivce: QuoteService, private http: Http, public quoteObject: QuoteDetail, public dataToPost: QuoteDataRequest) {
  }

  ngOnInit(): void {
    this.dataToPost.poo = 'USMIA';
    this.dataToPost.fd = 'JMKIN';
    this.apiSerivce.getQuoteJsonData().subscribe(data => {
      this.quoteObject = data;
      console.log(this.quoteObject);
    });
  }

  changeCase(): void {
    this.dataToPost.poo = this.dataToPost.poo.toUpperCase();
    this.dataToPost.fd = this.dataToPost.fd.toUpperCase();
    this.apiSerivce.postQuoteRequest(this.dataToPost).then(response => {
      this.quoteObject = response;
    });
  }
}
