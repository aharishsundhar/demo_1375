import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Show usersComponent } from './show users.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule,
RouterModule.forChild([
            {path: '', component: Show usersComponent}
          ]),
AgGridModule
],
  declarations: [
  Show usersComponent
]
  
})
export class Show usersModule { }