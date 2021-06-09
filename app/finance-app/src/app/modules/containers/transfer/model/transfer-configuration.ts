import { Currency } from './../../../shared/models/currency.enum';

export interface TransferConfiguration {
  accountFrom: string;
  accountFromName: string;
  accountTo: string;
  accountToName: string;
  currency: Currency;
  exchangeRate: string;
  balance: string;
  value: string;
  date: Date;
}
