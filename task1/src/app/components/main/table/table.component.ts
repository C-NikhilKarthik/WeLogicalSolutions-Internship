import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface TableRow {
  name: string;
  email: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Name','Age','Gender','Purpose','Email','PhoneNumber','LastUpdated','Actions'];
  dataSource = new MatTableDataSource<List>(FNA_LIST);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  deleteRow(row:any): void {
    const index = this.dataSource.data.indexOf(row);
    // if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription(); // Notify the table that data has changed
    // }
  }

  // deleteTicket(rowid: any) {
  //   const index = this.dataSource.data.indexOf(rowid);
  //   this.dataSource.data.splice(index, 1);
  //   this.dataSource._updateChangeSubscription();
  //   }

}

export interface List {
  Name:string;
  Age:number;
  Gender:string;
  Purpose:string;
  Email:string;
  PhoneNumber:number;
  LastUpdated:Date;
  button:string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const FNA_LIST: List[] = [
  {Name:'Velles Test',Age:36,Gender:'Male',Purpose:'Dream Planning',Email:'Velis@gmail.com',PhoneNumber:4567,LastUpdated:new Date('2021-07-01'),button:'delete'},
  {Name:'Test Changed1 Test Changed1',Age:50,Gender:'Female',Purpose:'RetirementF Planning',Email:'testChanged1@gmail.com',PhoneNumber:7557575222221,LastUpdated:new Date('2021-07-01'),button:'delete'},
  {Name:'Test dfg',Age:1,Gender:'Male',Purpose:'Dream Planning',Email:'dfdg@fhgj.fhfgh',PhoneNumber:4635654,LastUpdated:new Date('2021-07-01'),button:'delete'},
  {Name:'Harshal Lad',Age:15,Gender:'Male',Purpose:'Business Protection',Email:'itsmylife0708@gmail.com',PhoneNumber:70405767155,LastUpdated:new Date('2021-07-01'),button:'delete'},
  {Name:'Tst Prajapati',Age:1,Gender:'Female',Purpose:'Income Protection',Email:'vaishali@welogicalsolutions.com',PhoneNumber:35345046454,LastUpdated:new Date('2021-07-01'),button:'delete'},
  {Name:'test3 test',Age:1,Gender:'Male',Purpose:'Retirement Planning',Email:'test3@test.com',PhoneNumber:56576,LastUpdated:new Date('2021-07-01'),button:'delete'},
  {Name:'Test2 Test',Age:25,Gender:'Male',Purpose:'Income Protection',Email:'test2@test.com',PhoneNumber:565657,LastUpdated:new Date('2021-07-01'),button:'delete'},
]

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
