import { Injectable } from '@angular/core';

const KEY = 'authToken'

@Injectable({
  providedIn: 'root'
})


export class TokenService {

  constructor() { }

  hasToken() {
    return !!this.getToken()
  }

  setToken(token) {
    localStorage.setItem(KEY, token)
  }

  getToken() {
    return localStorage.getItem(KEY)
  }

  removeToken() {
    return localStorage.removeItem(KEY)
  }

}
