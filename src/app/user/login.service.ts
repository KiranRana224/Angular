import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  base_url = 'http://localhost:3000/api/users/';
  constructor(private http: HttpClient) {}
  loginUser(data: any): Observable<any> {
    return this.http.post(this.base_url + 'login', data);
  }
  registerUser(data: any) {
    return this.http.post(this.base_url + 'register', data);
  }
  getUserList(data: any) {
    return this.http.get(this.base_url + 'user-lists', {
      params: data,
    });
  }
  searchUser(data: any) {
    return this.http.post(this.base_url + 'searchUser', data);
  }

  addUser(data: any) {
    return this.http.post(this.base_url + 'addUser', data);
  }
}
