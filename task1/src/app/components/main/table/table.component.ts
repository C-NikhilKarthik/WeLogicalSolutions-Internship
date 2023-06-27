import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CustomersService, CustomerDetails } from 'src/app/services/customers.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<CustomerDetails>();
  displayedColumns: string[] = ['Name', 'Age', 'Gender', 'Purpose', 'Email', 'PhoneNumber', 'LastUpdated', 'Actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private details: CustomersService) { }

  ngOnInit() {
    this.details.fetchData();
    this.details.getDataObservable().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteRow(customerId: number): void {
    this.details.deleteCustomer(customerId).subscribe(r => {
      this.details.fetchData();
      this.details.getDataObservable().subscribe(data => {
        this.dataSource.data = data;
      });
    })
  }
}

// const FNA_LIST: List[] = [
//   {Name:'Velles Test',Age:36,Gender:'Male',Purpose:'Dream Planning',Email:'Velis@gmail.com',PhoneNumber:4567,LastUpdated:new Date('2021-07-01'),button:'delete'},
//   {Name:'Test Changed1 Test Changed1',Age:50,Gender:'Female',Purpose:'RetirementF Planning',Email:'testChanged1@gmail.com',PhoneNumber:7557575222221,LastUpdated:new Date('2021-07-01'),button:'delete'},
//   {Name:'Test dfg',Age:1,Gender:'Male',Purpose:'Dream Planning',Email:'dfdg@fhgj.fhfgh',PhoneNumber:4635654,LastUpdated:new Date('2021-07-01'),button:'delete'},
//   {Name:'Harshal Lad',Age:15,Gender:'Male',Purpose:'Business Protection',Email:'itsmylife0708@gmail.com',PhoneNumber:70405767155,LastUpdated:new Date('2021-07-01'),button:'delete'},
//   {Name:'Tst Prajapati',Age:1,Gender:'Female',Purpose:'Income Protection',Email:'vaishali@welogicalsolutions.com',PhoneNumber:35345046454,LastUpdated:new Date('2021-07-01'),button:'delete'},
//   {Name:'test3 test',Age:1,Gender:'Male',Purpose:'Retirement Planning',Email:'test3@test.com',PhoneNumber:56576,LastUpdated:new Date('2021-07-01'),button:'delete'},
//   {Name:'Test2 Test',Age:25,Gender:'Male',Purpose:'Income Protection',Email:'test2@test.com',PhoneNumber:565657,LastUpdated:new Date('2021-07-01'),button:'delete'},
// ]
