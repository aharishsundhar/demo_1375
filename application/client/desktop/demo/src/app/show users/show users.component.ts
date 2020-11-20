import { Component, OnInit } from '@angular/core';

import { Show usersService } from './show users.service';



@Component({
  selector: 'app-show users',
  templateUrl: './show users.component.html',
  styleUrls: ['./show users.component.scss'],
})
export class Show usersComponent implements OnInit {

columnDefs = [
{headerName: 'name', field: 'name'},
{headerName: 'email', field: 'email'}];
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(
private show usersService: Show usersService
  ) { }

  ngOnInit() {
    this.GpGetAllValues();
  }

onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}
GpGetAllValues() {
 this.show usersService.GpGetAllValues()
  .subscribe(
    data => {
       console.log('successfully get all data --- ', data);
       this.rowData = data;
    },
    error => {
       console.log('cannot able to get all data --- ', error);
    }
    );
}

}