import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

  constructor(
private http: HttpClient,
private sharedService: SharedService
  ) { }

GpCreate(users: any): Observable<any> {
 return this.http.post(this.sharedService.DESKTOP_API + '/users', users);
}

}