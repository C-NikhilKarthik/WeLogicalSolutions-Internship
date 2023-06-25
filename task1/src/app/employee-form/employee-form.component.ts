import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomersService, CustomerDetails } from '../services/customers.service';

interface Select {
  value: string;
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  CustomerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private details: CustomersService) {
    this.CustomerForm = formBuilder.group({
      firstname: [''],
      lastName: [''],
      phonenumber: [],
      email: [''],
      age: [],
      gender: [''],
      purpose: [''],
      date: [new Date()]
    });
  }

  saveForm(): void {
    const getvalues: CustomerDetails = {
      Name: this.CustomerForm.value.firstname,
      Age: this.CustomerForm.value.age,
      Gender: this.CustomerForm.value.gender,
      Purpose: this.CustomerForm.value.purpose,
      Email: this.CustomerForm.value.email,
      PhoneNumber: this.CustomerForm.value.phonenumber,
      LastUpdated: new Date('2023-07-21'),
      button: 'delete'
    };
    this.details.add(getvalues);
    console.log("Saving", getvalues);
    console.log("Data", this.details.getData());
  }

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  firstname = "";
  lastname = "";
  phonenumber = null;
  email = "";
  children = null;

  placeholder = 'Select an option';
  selectedValue!: string;
  SelectValues: Select[] = [
    { value: 'Dream Planning' },
    { value: 'Retirement Planning' },
    { value: 'Business Protection' },
    { value: 'Income Protection' },
    { value: 'Emergency Planning' },
  ];
}
