import { TransferLine } from './transfer-line';

export interface Transfer {
  currency: string;
  exchangeRate: string;
  value: string;
  accountFrom: string;
  accountTo: string;
  date: Date;
  valueInPln: string;
  _id?: string;
  transferLineIds?: string[];
  transferLines?: TransferLine[];
}
