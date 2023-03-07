import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/User';
import { UserService } from './../../../core/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>
  user: User

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = userService.getUser()
    this.user$.subscribe(user => this.user = user)
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout()
    this.router.navigate([''])
  }
}
