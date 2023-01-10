import { User } from './User';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null)

  constructor(
    private tokenService: TokenService
  ) {
    this.tokenService.hasToken() && this.decodeAndNotify()
  }

  setToken(token: string) {
    this.tokenService.setToken(token)
    this.decodeAndNotify()
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable()
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken()
    const user = jwtDecode(token) as User
    this.userSubject.next(user)
  }


}