import { Alert } from './Alert';
import { AlertStatus } from './AlertStatus.enum';

export interface DialogData {
  alertData: Alert;
  alertStatus: AlertStatus;
}
