import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.setLoggedIn(false);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.setLoggedIn(true);
    this.router.navigate(['patients']);
  }

}
