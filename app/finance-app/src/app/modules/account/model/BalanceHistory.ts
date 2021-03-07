export interface BalanceHistory {
  _id: string;
  balance: string;
  date: Date;
  isActive: boolean;
  accountId: string;
}
