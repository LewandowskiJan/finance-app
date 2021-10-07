import { Response, Request } from 'express';
import { AccountDao } from '../dao/account.dao';
import { BalanceHistoryDao } from '../dao/balance-history.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function getAllAccounts(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const accounts = await AccountDao.getAllAccounts(options);
    response.json(accounts);
  } catch (error) {
    return next(error);
  }
}

export async function getAllAccountsWithBalanceHistory(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const accounts = await AccountDao.getAllAccounts(options);
    const historyBalances = await BalanceHistoryDao.findBalanceHistories(options);

    const result = accounts.map((account: any) => {
      return {
        ...account._doc,
        balanceHistory: historyBalances.filter((hb: any) => hb.accountId === account._id.toString()),
      };
    });
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function addAccount(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const createdAccount = await AccountDao.createAccount(options);
    response.json(createdAccount);
  } catch (error) {
    return next(error);
  }
}

export async function getAccountById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const foundAccount = await AccountDao.findAccountById(options);
    response.json(foundAccount);
  } catch (error) {
    return next(error);
  }
}

export async function deleteAccountById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const account = await AccountDao.deleteAccountById(options);
    await BalanceHistoryDao.deleteManyBalanceHistoriesBy({ accountId: options.params.id });

    if (!account) {
      response.json({});
    } else {
      const responseData = { ...account._doc };
      response.json(responseData);
    }
  } catch (error) {
    return next(error);
  }
}

export async function updateAccountById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const responseData = await AccountDao.updateAccount(options);
    const mappedReq = { body: { accountId: options.params.id } };
    await BalanceHistoryDao.generateBalanceHistoryByAccountId(mappedReq);
    response.json(responseData);
  } catch (error) {
    return next(error);
  }
}

export async function findAccountByName(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await AccountDao.searchForAccount(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function resetAllAccountsBalance(request: Request, response: Response, next: any): Promise<any> {
  try {
    const result = await AccountDao.resterAllAccountsBalance();
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
