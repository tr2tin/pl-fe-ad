import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl = '/login';
  constructor(private localStorage: LocalStorageService) { }

  getToken() {
    return localStorage.getItem('token');
  }

}
