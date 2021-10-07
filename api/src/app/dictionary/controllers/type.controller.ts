import { Response, Request } from 'express';
import { TypeDao } from '../dao/type.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function addType(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TypeDao.addType(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getTypeById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TypeDao.findTypeById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getAllTypes(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TypeDao.findTypes(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function findTypeByName(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TypeDao.searchForType(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function updateTypeById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TypeDao.updateTypeById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function deleteTypeById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TypeDao.deleteTypeById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
