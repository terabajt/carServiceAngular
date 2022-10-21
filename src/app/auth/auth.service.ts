import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//fake credentials
  private credentials = {
    login: 'admin',
    password: 'admin'
  };

  //fake login

  private isUserLoggedIn = false;
  login(login: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      if (login === this.credentials.login  && password === this.credentials.password) {
        this.isUserLoggedIn = true;
        resolve();
      } else {
        reject();
      }
      
    })
  }

  isLoggedIn() {
    return this.isUserLoggedIn;
  }

}
