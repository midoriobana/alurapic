import { environment } from 'src/environments/environment';
import { ServerLog } from './../components/interfaces/server-log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {
  constructor(
    private http: HttpClient
  ) { }

  log(serverLog: ServerLog){
    return this.http.post(`${environment.serverLog}/infra/log`, serverLog)
  }

}
