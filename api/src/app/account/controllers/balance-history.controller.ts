import { Response, Request } from 'express';
import { BalanceHistoryDao } from '../dao/balance-history.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function generateBalanceHistoryByAccountId(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const responseData = await BalanceHistoryDao.generateBalanceHistoryByAccountId(options);
    response.json(responseData);
  } catch (error) {
    return next(error);
  }
}
