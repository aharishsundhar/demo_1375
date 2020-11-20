import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

users = {
   name: '',
   email: '',
   age: ''
};

  constructor(
private loginService: LoginService
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.loginService.GpCreate(this.users)
  .subscribe(
    data => {
       console.log('data created successfully');
this.users.name = '';

this.users.email = '';

this.users.age = '';

    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}