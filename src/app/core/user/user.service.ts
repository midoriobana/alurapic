import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './../token/token.service';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null)

  private userName: string

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
    this.userName = user.name
    this.userSubject.next(user)
  }

  logout() {
    this.tokenService.removeToken()
    this.userSubject.next(null)
  }

  isLogged(){
    return this.tokenService.hasToken()
  }

  getUserName(){
    return this.userName
  }

}