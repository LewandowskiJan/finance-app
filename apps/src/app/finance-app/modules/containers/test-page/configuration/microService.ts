import { Observable } from 'rxjs';

import { ConnectionStatus } from './connection-status';

export interface MicroService {
  microServicesName: string;
  microServiceCheckEndpoint: Observable<ConnectionStatus>;
}
