import { Component } from '@angular/core';

interface Select{
  value: string;
}
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  firstname="";
  lastname="";
  phonenumber=null;
  email="";
  children=null;

  placeholder = 'Select an option';
  selectedValue!:string;
  SelectValues: Select[] = [
    {value:'Dream Planning'},
    {value:'Retirement Planning'},
    {value:'Business Protection'},
    {value:'Income Protection'},
    {value:'Emergency Planning'},
  ]
}
