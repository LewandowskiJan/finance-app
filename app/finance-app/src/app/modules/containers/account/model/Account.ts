import { BalanceHistory } from './BalanceHistory';

export interface Account {
  _id: string;
  name: string;
  alias: string;
  dateOfCreate: Date;
  isActive: boolean;
  isExternal: boolean;
  balance: string;
  currency: string;
  balanceHistory: BalanceHistory;
  deletedDetails?: any;
}
