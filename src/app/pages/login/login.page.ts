import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginWithPhone = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeLogin(number) {
    this.loginWithPhone = number;
  }

  loginSubmit(loginSubmit: NgForm) {
    this.router.navigateByUrl('/home');
  }
}
