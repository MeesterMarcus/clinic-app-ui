import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public email: string;
  public password: string;

  constructor(private http: HttpClient) {

  }

  authenticationService(email: string, password: string) {
    return this.http.get(`api/login/basicauth`,
      { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {
      this.email = email;
      this.password = password;
      this.registerSuccessfulLogin(email, password);
    }));
  }

  createBasicAuthToken(email: string, password: string) {
    return 'Basic ' + window.btoa(email + ':' + password);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.email = null;
    this.password = null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) { return false; }
    return true;
  }

  getLoggedInUserName() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) { return ''; }
    return user;
  }
}
