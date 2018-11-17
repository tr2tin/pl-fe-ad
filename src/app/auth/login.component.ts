import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Jsonp } from '@angular/http';
import { LocalStorageService } from '../common/service/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private lStorage: LocalStorageService
  ) {

  }

  ngOnInit() {
  }

  login() {
    this.lStorage.set('token', JSON.stringify({
      token: '123'
    }));
    this.authService.isLoggedIn = true;
    this.router.navigate(['/admin']);
  }

}
