import { Response, Request } from 'express';
import { ExpensesGroupDao } from '../dao/expenses-group.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function addExpensesGroup(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ExpensesGroupDao.addExpensesGroup(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getExpensesGroupById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ExpensesGroupDao.findExpensesGroupById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getAllExpensesGroups(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ExpensesGroupDao.findExpensesGroups(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function findExpensesGroupByName(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ExpensesGroupDao.searchForExpensesGroup(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function updateExpensesGroupById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ExpensesGroupDao.updateExpensesGroupById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function deleteExpensesGroupById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await ExpensesGroupDao.deleteExpensesGroupById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
