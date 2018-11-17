import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl = '/login';
  constructor(private lStorage: LocalStorageService) { }

  isLogged() {
    console.log(this.getToken());
    
    return this.getToken() !== undefined;
  }

  getToken() {
    return this.lStorage.get('token');
  }

}
