import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private data: CustomerDetails[] = [];
  private dataSubject = new BehaviorSubject<CustomerDetails[]>([]);

  constructor(private http: HttpClient) {}

  api = 'http://localhost:3000/customers'

  getAllCustomers():Observable<CustomerDetails[]>{
    return this.http.get<CustomerDetails[]>(this.api)
  }

  createCustomer(customer:any){
    return this.http.post(this.api, customer)
  }

  fetchData() {
    this.http.get<CustomerDetails[]>(this.api).subscribe(data => {
      this.data = data;
      this.dataSubject.next(this.data);
      console.log(this.data);
    });
  }


  deleteCustomer(customerId: number) {
    return this.http.delete(this.api + '/' + customerId)
  }

  getDataObservable() {
    return this.dataSubject.asObservable();
  }
}


export interface CustomerDetails {
  id:number;
  Name: string;
  Age: number;
  Gender: string;
  Purpose: string;
  Email: string;
  PhoneNumber: number;
  LastUpdated: any;
  button: string;
}
