import { ConnectionStatus } from './../configuration/connection-status';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MicroService } from '../configuration/microService';
import { Status } from '../configuration/status';

@Injectable()
export class TestConnectionService {
  public microServicesCheckConnectionTestArray: MicroService[] = [
    {
      microServicesName: 'api/account/checkConnection',
      microServiceCheckEndpoint: this.checkConnectionWithAccount(),
    },
    {
      microServicesName: 'api/authorization/checkConnection',
      microServiceCheckEndpoint: this.checkConnectionWithAuthorization(),
    },
  ];

  public apiChecked: BehaviorSubject<number> = new BehaviorSubject(0);
  public apiFailed: BehaviorSubject<number> = new BehaviorSubject(0);

  private failure: number = 0;
  private checked: number = 0;

  constructor(private httpClient: HttpClient) {}

  public reset(): void {
    this.failure = 0;
    this.checked = 0;
    this.apiChecked.next(this.failure);
    this.apiFailed.next(this.checked);
  }

  public checkConnectionWithAuthorization(): Observable<ConnectionStatus> {
    return this.checkConnection('http://localhost:8000/api/authorization/checkConnection');
  }

  public checkConnectionWithAccount(): Observable<ConnectionStatus> {
    return this.checkConnection('http://localhost:8001/api/account/checkConnection');
  }

  private checkConnection(url: string): Observable<ConnectionStatus> {
    return from(this.httpClient.get(url)).pipe(
      catchError(() => {
        this.failure++;
        this.apiFailed.next(this.failure);
        return [{ connectionStatus: Status.ERROR }];
      }),
      tap(() => {
        this.checked++;
        this.apiChecked.next(this.checked);
      })
    ) as Observable<{
      connectionStatus: Status;
    }>;
  }
}
