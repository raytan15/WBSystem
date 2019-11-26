import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Transaction } from './home-page/transaction';
import { Consumer } from './consumer-page/consumer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private url:string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http:HttpClient) { }

  getTransactions():Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      this.url + '/transaction'
    );
  }

  getConsumers():Observable<Consumer[]> {
    return this.http.get<Consumer[]>(
      this.url + '/consumer'
    );
  }

  getTran(id):Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      this.url + '/transaction/'+ id
    );
  }

  getTranView(id):Observable<Consumer[]> {
    return this.http.get<Consumer[]>(
      this.url + '/transaction/view/'+ id
    );
  }
  
  updateTransaction(transaction: Transaction, id: string): Observable<Transaction> {
    return this.http.put<Transaction>(
      this.url + '/transaction/' + id,
      transaction, 
      { headers:this.headers }
    );
  }
  deleteTransaction(id: string){
    return this.http.delete(this.url + '/transaction/' + id);
  }
}
