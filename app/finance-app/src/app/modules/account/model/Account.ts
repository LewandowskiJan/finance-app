import { BalanceHistory } from './BalanceHistory';

export interface Account {
  _id: string;
  name: string;
  dateOfCreate: Date;
  isActive: boolean;
  balance: string;
  balanceHistory: BalanceHistory;
  deletedDetails?: any;
}
