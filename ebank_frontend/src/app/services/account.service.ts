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
}
