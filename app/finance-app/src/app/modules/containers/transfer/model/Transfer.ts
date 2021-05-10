import { TransferLine } from './TransferLine';
export interface Transfer {
  _id: string;
  currency: string;
  exchangeRate: string;
  value: string;
  accountFrom: string;
  accountTo: string;
  date: Date;
  valueInPln: string;
  transferLineIds?: string[];
  transferLines?: TransferLine[];
}
