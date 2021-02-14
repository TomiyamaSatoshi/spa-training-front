import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;

  pictureUrl: string;
  userName: string;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginCheck();
  }

  loginCheck() {
    this.isLogin = this.authService.isLogin();
    if (this.isLogin) {
      const userToken = this.authService.getUserToken();
      this.pictureUrl = userToken.picture;
      this.userName = userToken.name;
    }
  }

  logout() {
    this.authService.logout();
  }
}
