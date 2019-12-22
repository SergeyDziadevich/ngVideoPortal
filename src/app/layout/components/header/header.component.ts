import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from '../../../core';
import { User, UserService } from '../../../users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user: User;

  private sub: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  get hasUserInfo(): boolean {
    return this.authService.isAuthorized;
  }

  ngOnInit() {
    this.sub = this.userService.getUser().subscribe((user: User) => this.user = user);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onLogout(): void {
    console.log('User click Log off');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
