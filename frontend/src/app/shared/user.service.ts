import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    companyName: '',
    email: '', 
    passcode: '',
    userType: '',
    city: '',
    state: '',
    contactName: '',
    phoneNumber: ''
  };

  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/users`);
  }
}