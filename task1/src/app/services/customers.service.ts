import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CustomersService {
  private Data: CustomerDetails[] = [];

  constructor() { }


  add(item:CustomerDetails) {
    this.Data.push(item);
  }

  getData(){
    return this.Data
  }
}

export interface CustomerDetails{
  Name:string;
  Age:number;
  Gender:string;
  Purpose:string;
  Email:string;
  PhoneNumber:number;
  LastUpdated:Date;
  button:string;
}
