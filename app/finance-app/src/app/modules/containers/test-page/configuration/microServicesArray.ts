import { MicroService } from './microService';
import { Status } from './status';

export const microServicesArray: MicroService[] = [
  {
    name: 'api/account/checkConnection',
    url: 'http://localhost:8000/api/authorization/checkConnection',
    status: Status.PENDING,
  },
  {
    name: 'api/authorization/checkConnection',
    url: 'http://localhost:8001/api/account/checkConnection',
    status: Status.PENDING,
  },
];
