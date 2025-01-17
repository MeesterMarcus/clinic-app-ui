import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinic-app';

  constructor(private authService: AuthService, private router: Router) {
  }

  isLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
