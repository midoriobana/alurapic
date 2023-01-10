import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(userName: string, password: string) {

    return this.http
      .post(API + '/user/login', { userName, password }, {
        observe: 'response'
      })
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token')
        this.userService.setToken(authToken)
      }))

  }
}
