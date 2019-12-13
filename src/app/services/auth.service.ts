import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  isLoggedIn() {
    return this.loggedIn;
  }

  setLoggedIn(loggedIn) {
    this.loggedIn = loggedIn;
  }
}
