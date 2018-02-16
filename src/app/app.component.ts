import { Component, AfterContentInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit{
  title = 'Login con FB';
  private name: string;
  private pic_url: string;
  private login: boolean;

  constructor(private fb: FacebookService) {
    this.login = false;
  }

  ngAfterContentInit() {
    const initParams: InitParams = {
      appId: '1236516716401897',
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }

  loginWithFB(): void {
    this.fb.login()
      .then((res: LoginResponse) => {
        this.login = true;
        console.log('Logged in', res);
        this.getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getProfile() {
    this.fb.api('/me?fields=picture,name')
      .then((res: any) => {
        console.log('Got the users profile', res);
        this.name = res.name;
        this.pic_url = res.picture.data.url;
      })
      .catch((error: any) => console.error(error));
  }
}
