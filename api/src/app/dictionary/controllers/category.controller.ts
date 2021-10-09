import { Response, Request } from 'express';
import { CategoryDao } from '../dao/category.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function addCategory(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await CategoryDao.addCategory(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getCategoryById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await CategoryDao.findCategoryById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getAllCategories(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await CategoryDao.findCategories(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function findCategoryByName(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await CategoryDao.searchForCategory(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function updateCategoryById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await CategoryDao.updateCategoryById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function deleteCategoryById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await CategoryDao.deleteCategoryById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
