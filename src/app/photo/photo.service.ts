import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './Photo';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  endpoint: string = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${this.endpoint}/flavio/photos`)
  }

}
