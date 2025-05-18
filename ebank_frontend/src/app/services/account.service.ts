import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDetails } from '../model/account.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = "http://localhost:8085";

  constructor(private http:HttpClient) { }

  public getAccount(id: string, page: number, size: number): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(this.baseUrl + "/accounts/" + id + "/pageOperations?page=" + page + "&size=" + size);
  } 

  public debit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(this.baseUrl +"/accounts/debit",data);
  }
  public credit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(this.baseUrl +"/accounts/credit",data);
  }
  public transfer(accountSource: string,accountDestination: string, amount : number, description:string){
    let data={accountSource, accountDestination, amount, description }
    return this.http.post(this.baseUrl +"/accounts/transfer",data);
  }
}
