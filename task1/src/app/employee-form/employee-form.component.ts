import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      id:this.formBuilder.control({value:'',disabled:true}),
      firstname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      lastname: ['', Validators.required],
      phonenumber: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      gender: ['', Validators.required],
      purpose: ['', Validators.required],
      date: [new Date(), Validators.required]
    });

  }

  saveForm(): void {
    if (this.CustomerForm.valid) {
      const currentTime = new Date();
      const formattedDate = currentTime.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });

      const customerData = {
        ...this.CustomerForm.value,
        LastUpdated: formattedDate
      };

      this.details.createCustomer(customerData).subscribe(res => {
        alert('Customer saved');
      });
    } else {
      console.log("Form is not valid");
    }
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
