import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private jwtHelper: JwtHelperService
  ) { }

  isLogin() {
    return !this.jwtHelper.isTokenExpired();
  }

  logout() {
    localStorage.removeItem('access_token');
    document.location.href = 'https://www.google.com/accounts/Logout?continue=http://appengine.google.com/_ah/logout?continue='
      + environment.homeUrl;
  }

  getUserToken() {
    const token = localStorage.getItem('access_token');
    return this.jwtHelper.decodeToken(token);
  }
}
