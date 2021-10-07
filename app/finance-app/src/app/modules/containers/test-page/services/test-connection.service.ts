import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, tap } from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';

import { HttpRequestMethods } from '@my-lib/util';

import { MicroService } from '../configuration/microService';
import { Status } from '../configuration/status';

import { ConnectionStatus } from './../configuration/connection-status';

import { GlobalApiService } from '@src/app/modules/shared/services/global-api.service';

@Injectable()
export class TestConnectionService {
  public microServicesCheckConnectionTestArray: MicroService[] = [
    {
      microServicesName: 'api/checkConnection',
      microServiceCheckEndpoint: this.checkConnectionWithAccount(),
    },
  ];

  public apiChecked: BehaviorSubject<number> = new BehaviorSubject(0);
  public apiFailed: BehaviorSubject<number> = new BehaviorSubject(0);

  private failure: number = 0;
  private checked: number = 0;

  constructor(private apiService: GlobalApiService) {}

  public reset(): void {
    this.failure = 0;
    this.checked = 0;
    this.apiChecked.next(this.failure);
    this.apiFailed.next(this.checked);
  }

  public checkConnectionWithAccount(): Observable<ConnectionStatus> {
    return this.checkConnection('http://localhost:8080/api', 'checkConnection');
  }

  private checkConnection(endpoint: string, url: string): Observable<ConnectionStatus> {
    return this.apiService.request<ConnectionStatus, HttpErrorResponse>(url, { method: HttpRequestMethods.GET, endpoint: endpoint }).pipe(
      catchError(() => {
        this.failure++;
        this.apiFailed.next(this.failure);
        return [{ connectionStatus: Status.ERROR }];
      }),
      tap(() => {
        this.checked++;
        this.apiChecked.next(this.checked);
      }),
      map((result: { connectionStatus: Status }) => {
        return result.connectionStatus ? { connectionStatus: result.connectionStatus } : { connectionStatus: Status.ERROR };
      })
    ) as Observable<{
      connectionStatus: Status;
    }>;
  }
}
