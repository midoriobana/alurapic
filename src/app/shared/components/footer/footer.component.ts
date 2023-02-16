import { User } from 'src/app/core/user/User';
import { Observable } from 'rxjs';
import { UserService } from './../../../core/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  user$: Observable<User>

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser()
  }

}
