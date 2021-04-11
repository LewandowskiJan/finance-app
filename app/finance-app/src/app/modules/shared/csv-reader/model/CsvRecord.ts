export interface CsvRecord {
  date: string;
  accountFrom: string;
  accountTo: string;
  value: string;
  description: string;
  currency: string;
  exchangeRate: string;
  valueInPln?: string;

  transferLines: {
    categoryId: string;
    expensesGroupId: string;
    productId: string;
    targetId: string;
    eventId: string;
    projectId: string;
    currency: string;
    exchangeRate: string;
    importance: string;
    value: string;
    typeId: string;
    valueInPln?: string;
  };
}
