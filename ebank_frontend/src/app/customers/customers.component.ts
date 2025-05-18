import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../services/customer.service";
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers! : Observable<Array<Customer>>;
  searchForm!: FormGroup;
  keyword!: string;
  errorMessage!: string;
  constructor(private customerService : CustomerService, private fb : FormBuilder) {
  
  }

  ngOnInit(): void {
    this.searchForm=this.fb.group({
      keyword : this.fb.control("")
    });
    this.handleSearchCustomers();
  }

  handleSearchCustomers() {
    let kw=this.searchForm?.value.keyword;
    this.customers=this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(() => err);
      })
    );
  }

}
