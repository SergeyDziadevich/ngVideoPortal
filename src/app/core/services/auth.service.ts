import { Injectable } from '@angular/core';

import { User } from '../../users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '1234';
  private user: User = {id: 1, firstName: 'John', lastName: 'Smit'};
  public redirectUrl: string;

  constructor() { }

  get isAuthorized() {
    return !!this.getUserInfo();
  }

  login(userLogin: string): void {
    localStorage.setItem(this.token, userLogin);
  }

  logout(): void {
    localStorage.removeItem(this.token);
  }

  getUserInfo(): User {
    return JSON.parse(localStorage.getItem(this.token));
  }
}