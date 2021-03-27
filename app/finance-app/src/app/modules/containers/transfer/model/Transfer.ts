export interface Transfer {
  _id: string;
  currency: string;
  exchangeRate: string;
  value: string;
  accountFrom: string;
  accountTo: string;
  date: Date;
  valueInPln: string;
  transferLineIds: string[];
}
