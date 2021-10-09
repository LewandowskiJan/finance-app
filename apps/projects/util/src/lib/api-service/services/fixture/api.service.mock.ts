import { Observable, of } from 'rxjs';

export class ApiServiceMock {
  endpoint: string;

  public set setBaseUrl(endpoint: string) {
    this.endpoint = endpoint;
  }

  public request(): Observable<any> {
    return of({});
  }
}
