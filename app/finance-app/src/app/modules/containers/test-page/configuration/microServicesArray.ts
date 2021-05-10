import { Status } from './status';

export const microServicesArray: any[] = [
  {
    name: 'api/account/checkConnection',
    url: 'http://localhost:8080/api/authorization/checkConnection',
    status: Status.PENDING,
  },
  {
    name: 'api/authorization/checkConnection',
    url: 'http://localhost:8081/api/account/checkConnection',
    status: Status.PENDING,
  },
];
