import { environment } from 'src/environments/environment';
import { NewUser } from './NewUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupService {

  endpoint = 'user'

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(`${environment.API_URL}/${this.endpoint}/exists/${userName}`)
  }

  signup(newUser: NewUser){
    return this.http.post(`${environment.API_URL}/${this.endpoint}/signup`, newUser)
  }

}
