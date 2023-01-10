import { Observable } from 'rxjs';
import { UserService } from './../../../core/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/user/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>
  user: User

  constructor(
    userService: UserService
  ) {
    this.user$ = userService.getUser()
    this.user$.subscribe(user => this.user = user)
   }

  ngOnInit() {
  }

}
