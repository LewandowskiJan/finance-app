import { Response, Request } from 'express';
import { TargetDao } from '../dao/target.dao';
import { requestParseToOptionObj } from '../../shared/request-parser';

export async function addTarget(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TargetDao.addTarget(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getTargetById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TargetDao.findTargetById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function getAllTargets(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TargetDao.findTargets(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function findTargetByName(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TargetDao.searchForTarget(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function updateTargetById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TargetDao.updateTargetById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function deleteTargetById(request: Request, response: Response, next: any): Promise<any> {
  const options = requestParseToOptionObj(request);

  try {
    const result = await TargetDao.deleteTargetById(options);
    response.json(result);
  } catch (error) {
    return next(error);
  }
}
