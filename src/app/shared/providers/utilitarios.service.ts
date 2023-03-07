import { ServerLogService } from './server-log.service';
import { UserService } from 'src/app/core/user/user.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Output, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as StackTrace from 'stacktrace-js'

@Injectable({
  providedIn: 'root'
})
export class UtilitariosService implements ErrorHandler {

  @Output() aberto: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(
    private injector: Injector

  ) { }

  handleError(err: any): void {
    const location = this.injector.get(LocationStrategy)
    const url = location instanceof PathLocationStrategy ? location.path() : ''
    const message = err.message ? err.message : err.toString()
    const userService = this.injector.get(UserService)
    const serverLogService = this.injector.get(ServerLogService)

    StackTrace
      .fromError(err)
      .then(stackFrames => {
        const stackAsString = stackFrames
          .map(sf => sf.toString())
          .join('\n')

        console.log(message)
        console.log(stackAsString)
        serverLogService.log({
          message,
          url,
          userName: userService.getUserName(),
          stack: stackAsString
        }
        ).subscribe(
          () => console.log('Error logged on server'),
          err => {
            console.log(err);
            console.log('Fail to send error log to server');
          }
        )
      })

  }

}
